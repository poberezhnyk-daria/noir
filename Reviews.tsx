import React, { useState, useEffect } from 'react';

interface Review {
  id: number;
  name: string;
  phone: string;
  text: string;
  date: string;
}

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Завантаження відгуків з localStorage при першому рендері
  useEffect(() => {
    const savedReviews = localStorage.getItem('noir_reviews');
    if (savedReviews) {
      setReviews(JSON.parse(savedReviews));
    } else {
      // Початкові відгуки для прикладу
      const initialReviews = [
        { id: 1, name: 'Олександр', phone: '0930000000', text: 'Чудова атмосфера та дуже смачні бургери! Обов\'язково повернуся ще.', date: '05.06.2026' },
        { id: 2, name: 'Марія', phone: '0670000000', text: 'Найкращі канолі, які я куштувала. Дуже ввічливий персонал.', date: '01.06.2026' }
      ];
      setReviews(initialReviews);
      localStorage.setItem('noir_reviews', JSON.stringify(initialReviews));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text || !phone) return;

    const newReview: Review = {
      id: Date.now(),
      name,
      phone, // Номер зберігається, але не буде відображатися в списку
      text,
      date: new Date().toLocaleDateString('uk-UA')
    };

    const updatedReviews = [newReview, ...reviews];
    setReviews(updatedReviews);
    localStorage.setItem('noir_reviews', JSON.stringify(updatedReviews));

    // Очищення форми
    setName('');
    setPhone('');
    setText('');
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="reviews" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '2.5rem', 
          marginBottom: '50px', 
          letterSpacing: '4px',
          textTransform: 'uppercase'
        }}>
          Відгуки <span className="gold-text">Гостей</span>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px' }}>
          
          {/* Форма відгуку */}
          <div style={{ 
            backgroundColor: 'var(--bg-primary)', 
            padding: '30px', 
            borderRadius: '4px',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '20px', fontSize: '1.2rem', letterSpacing: '1px' }}>
              ЗАЛИШИТИ ВІДГУК
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
                placeholder="Номер телефону (не публікується)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={inputStyle}
              />
              <textarea
                placeholder="Ваші враження"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                rows={4}
                style={{ ...inputStyle, resize: 'none' }}
              />
              <button 
                type="submit" 
                style={{
                  padding: '12px',
                  backgroundColor: 'var(--accent-gold)',
                  color: 'black',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  letterSpacing: '2px',
                  transition: '0.3s'
                }}
              >
                ВІДПРАВИТИ
              </button>
              {isSubmitted && (
                <p style={{ color: '#4BB543', textAlign: 'center', fontSize: '0.9rem' }}>
                  Дякуємо! Ваш відгук додано.
                </p>
              )}
            </form>
          </div>

          {/* Список відгуків */}
          <div style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }} className="reviews-list">
            {reviews.map((review) => (
              <div key={review.id} style={{ 
                borderBottom: '1px solid rgba(255,255,255,0.1)', 
                paddingBottom: '20px', 
                marginBottom: '20px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>{review.name}</span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{review.date}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reviews-list::-webkit-scrollbar { width: 4px; }
        .reviews-list::-webkit-scrollbar-track { background: transparent; }
        .reviews-list::-webkit-scrollbar-thumb { background: var(--accent-gold); border-radius: 10px; }
        
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '12px',
  backgroundColor: '#1A1A1A',
  border: '1px solid #333',
  color: 'white',
  borderRadius: '2px',
  fontSize: '0.9rem',
  outline: 'none'
};

export default Reviews;
