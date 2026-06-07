import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  name: string;
  phone: string;
  rating: number;
  text: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const [hoverRating, setHoverRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem('noir_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || !phone) return;

    const newReview: Review = {
      id: Date.now(),
      name,
      phone,
      rating,
      text,
      date: new Date().toLocaleDateString('uk-UA')
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('noir_reviews', JSON.stringify(updatedReviews));

    setName('');
    setPhone('');
    setRating(5);
    setText('');
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
  };

  return (
    <section id="reviews" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '15px' }}>
            Відгуки <span className="gold-text">Відвідувачів</span>
          </h2>
          <div style={{ width: '60px', height: '2px', backgroundColor: 'var(--accent-gold)', margin: '0 auto' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'start' }}>
          
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            padding: '40px', 
            borderRadius: '4px',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
          }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '30px', fontSize: '1.3rem', letterSpacing: '1px', textAlign: 'center' }}>
              ВАШ ВІДГУК
            </h3>
            
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase' }}>Ваша оцінка</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{
                        fontSize: '1.8rem',
                        color: star <= (hoverRating || rating) ? 'var(--accent-gold)' : '#333',
                        transition: '0.2s',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              <input
                type="text"
                placeholder="Ваше ім'я"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={inputStyle}
              />

              <input
                type="tel"
                placeholder="Номер телефону"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />

              <textarea
                placeholder="Напишіть про ваш досвід у Noir Lounge..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
              />

              <button 
                type="submit" 
                style={{
                  padding: '15px',
                  backgroundColor: 'var(--accent-gold)',
                  color: 'black',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  transition: '0.3s'
                }}
              >
                Опублікувати
              </button>

              {isSubmitted && (
                <p style={{ color: '#4BB543', textAlign: 'center', fontSize: '0.9rem', fontWeight: 'bold' }}>
                  Дякуємо! Ваш відгук успішно додано.
                </p>
              )}
            </form>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '25px',
              maxHeight: '700px',
              overflowY: 'auto',
              paddingRight: '15px'
            }}
            className="reviews-scroll"
          >
            {reviews.length === 0 ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '60px 20px',
                  border: '1px dashed rgba(255,255,255,0.1)',
                  borderRadius: '4px'
                }}
              >
                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                  Будьте першим, хто поділиться враженнями!
                </p>
              </div>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  style={{
                    backgroundColor: 'rgba(26, 26, 26, 0.5)',
                    padding: '25px',
                    borderRadius: '4px',
                    borderLeft: '3px solid var(--accent-gold)',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '15px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                      <div
                        style={{
                          width: '45px',
                          height: '45px',
                          backgroundColor: '#333',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold)',
                          fontWeight: 'bold',
                          fontSize: '0.9rem',
                          border: '1px solid rgba(212, 175, 55, 0.3)'
                        }}
                      >
                        {getInitials(review.name)}
                      </div>

                      <div>
                        <p style={{ fontWeight: '600', color: 'var(--text-main)', marginBottom: '2px' }}>
                          {review.name}
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {review.date}
                        </p>
                      </div>
                    </div>

                    <div style={{ color: 'var(--accent-gold)', fontSize: '0.9rem' }}>
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>

                  <p
                    style={{
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                      fontSize: '0.95rem',
                      fontStyle: 'italic'
                    }}
                  >
                    "{review.text}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <style>{`
        .reviews-scroll::-webkit-scrollbar { width: 4px; }
        .reviews-scroll::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .reviews-scroll::-webkit-scrollbar-thumb { background: var(--accent-gold); border-radius: 10px; }
      `}</style>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '14px',
  backgroundColor: '#151515',
  border: '1px solid #252525',
  color: 'white',
  borderRadius: '2px',
  fontSize: '0.95rem',
  outline: 'none'
};

export default Reviews;
