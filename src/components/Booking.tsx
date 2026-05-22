import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Booking: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_bjw968j';
    const TEMPLATE_ID = 'template_saprc4f';
    const PUBLIC_KEY = 'dj_AphSF-R2wNxTAE';

    // Ініціалізація EmailJS
    emailjs.init(PUBLIC_KEY);

    if (form.current) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current)
        .then(() => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 5000);
        }, (error: any) => {
          console.error('EmailJS Error:', error);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 5000);
        });
    }
  };

  return (
    <section id="booking" style={{ padding: '100px 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          Бронювання <span className="gold-text">Столу</span>
        </h2>
        
        <form ref={form} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" name="user_name" placeholder="Ваше ім'я" required style={inputStyle} />
          <input type="tel" name="user_phone" placeholder="Номер телефону" required style={inputStyle} />
          
          <div style={{ display: 'flex', gap: '20px' }}>
            <input type="date" name="booking_date" required style={{ ...inputStyle, flex: 1 }} />
            <input type="time" name="booking_time" required style={{ ...inputStyle, flex: 1 }} />
          </div>
          
          <select name="guests_count" style={inputStyle}>
            <option value="2">2 особи</option>
            <option value="4">4 особи</option>
            <option value="6">6 осіб</option>
            <option value="more">Більше</option>
          </select>

          <button 
            type="submit" 
            disabled={status === 'sending'}
            className="gold-border" 
            style={{
              padding: '15px',
              color: status === 'sending' ? 'gray' : 'var(--accent-gold)',
              fontSize: '1.1rem',
              letterSpacing: '2px',
              marginTop: '10px',
              cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              transition: '0.3s'
            }}
          >
            {status === 'sending' ? 'ВІДПРАВКА...' : 'ПІДТВЕРДИТИ БРОНЮВАННЯ'}
          </button>

          {status === 'success' && (
            <p style={{ color: '#D4AF37', textAlign: 'center', marginTop: '15px', fontWeight: 'bold' }}>
              Дякуємо! Бронювання надіслано. Ми зателефонуємо вам для підтвердження.
            </p>
          )}
          {status === 'error' && (
            <p style={{ color: '#FF4D4D', textAlign: 'center', marginTop: '15px' }}>
              Сталася помилка. Будь ласка, спробуйте ще раз або зателефонуйте нам.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  borderRadius: '4px'
};

export default Booking;
