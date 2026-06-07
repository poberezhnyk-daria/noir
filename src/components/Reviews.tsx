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
    } else {
      setReviews([]);
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
    <section id="reviews" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', letterSpacing: '4px', textTransform: 'uppercase' }}>
            Відгуки <span className="gold-text">Відвідувачів</span>
          </h2>
          <div
            style={{
              width: '60px',
              height: '2px',
              backgroundColor: 'var(--accent-gold)',
              margin: '20px auto'
            }}
          ></div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px'
          }}
        >
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              padding: '40px',
              borderRadius: '4px',
              border: '1px solid rgba(212, 175, 55, 0.2)'
            }}
          >
            <h3
              style={{
                color: 'var(--accent-gold)',
                marginBottom: '30px',
                textAlign: 'center'
              }}
            >
              ВАШ ВІДГУК
            </h3>

            <form
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      style={{
                        fontSize: '1.8rem',
                        color: star <= (hoverRating || rating)
                          ? 'var(--accent-gold)'
                          : '#333',
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
                placeholder="Ваші враження..."
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
                  fontWeight: '700'
                }}
              >
                ОПУБЛІКУВАТИ
              </button>

              {isSubmitted && (
                <p
                  style={{
                    color: '#4BB543',
                    textAlign: 'center'
                  }}
                >
                  Дякуємо! Відгук додано.
                </p>
              )}
            </form>
          </div>

          <div
            style={{
              maxHeight: '600px',
              overflowY: 'auto',
              paddingRight: '15px'
            }}
            className="reviews-scroll"
          >
            {reviews.length === 0 ? (
              <p
                style={{
                  color: 'var(--text-muted)',
                  textAlign: 'center'
                }}
              >
                Тут поки немає відгуків. Станьте першим!
              </p>
            ) : (
              reviews.map((review) => (
                <div
                  key={review.id}
                  style={{
                    backgroundColor: 'rgba(26, 26, 26, 0.5)',
                    padding: '25px',
                    borderRadius: '4px',
                    borderLeft: '3px solid var(--accent-gold)',
                    marginBottom: '20px'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: '10px'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          backgroundColor: '#333',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-gold)',
                          fontWeight: 'bold'
                        }}
                      >
                        {getInitials(review.name)}
                      </div>

                      <div>
                        <p style={{ fontWeight: '600' }}>{review.name}</p>
                        <p
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-muted)'
                          }}
                        >
                          {review.date}
                        </p>
                      </div>
                    </div>

                    <div style={{ color: 'var(--accent-gold)' }}>
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                  </div>

                  <p
                    style={{
                      color: 'var(--text-muted)',
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
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '14px',
  backgroundColor: '#151515',
  border: '1px solid #252525',
  color: 'white',
  outline: 'none'
};

export default Reviews;
