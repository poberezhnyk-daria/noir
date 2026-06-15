import React from 'react';

const Booking: React.FC = () => {
  // Ваша Google Форма
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSdRJXRyr97EVrgRHZYV4g3vc_bqhRixKJjFPmRr1fqfGq8hDw/viewform?usp=publish-editor';

  return (
    <section
      id="booking"
      style={{
        padding: '120px 0',
        backgroundColor: '#0A0A0A',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '700px',
          textAlign: 'center',
        }}
      >
        {/* Заголовок у стилі Noir */}
        <div
          style={{
            marginBottom: '60px',
          }}
        >
          <h2
            style={{
              fontSize: '3rem',
              letterSpacing: '5px',
              marginBottom: '20px',
              fontWeight: '300',
            }}
          >
            <span className="gold-text">RESERVATION</span>
          </h2>

          <div
            style={{
              width: '60px',
              height: '1px',
              backgroundColor: '#D4AF37',
              margin: '0 auto',
            }}
          />
        </div>

        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '1.1rem',
            lineHeight: '1.8',
            marginBottom: '50px',
            letterSpacing: '1px',
          }}
        >
          Для вашої зручності ми використовуємо онлайн-систему бронювання.
          <br />
          Натисніть кнопку нижче, щоб обрати час та кількість гостей.
        </p>

        {/* Стилізована золота кнопка */}
        <a
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={goldButtonStyle}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#D4AF37';
            e.currentTarget.style.color = '#0A0A0A';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#D4AF37';
          }}
        >
          ЗАБРОНЮВАТИ СТІЛ
        </a>

        <div
          style={{
            marginTop: '70px',
            borderTop: '1px solid rgba(212, 175, 55, 0.1)',
            paddingTop: '40px',
          }}
        >
          <p
            style={{
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.9rem',
              letterSpacing: '2px',
              marginBottom: '15px',
            }}
          >
            АБО ЗА ТЕЛЕФОНОМ
          </p>

          <a
            href="tel:+380963635324"
            style={{
              color: '#D4AF37',
              fontSize: '1.6rem',
              textDecoration: 'none',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
          >
            +380 96 363 5324
          </a>
        </div>
      </div>
    </section>
  );
};

const goldButtonStyle: React.CSSProperties = {
  display: 'inline-block',
  padding: '22px 50px',
  backgroundColor: 'transparent',
  border: '1px solid #D4AF37',
  color: '#D4AF37',
  fontSize: '1.1rem',
  letterSpacing: '4px',
  textDecoration: 'none',
  fontWeight: 'bold',
  transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
};

export default Booking;
