import React from 'react';

const Booking: React.FC = () => {
  // Ваша актуальна Google Форма
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSdO7iW9V-F-76YyD8w_H_D9YyR0H-xO0KlFQcke5RucjRA/viewform?embedded=true';

  return (
    <section
      id="booking"
      style={{
        padding: '80px 0',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '800px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '40px',
          }}
        >
          Бронювання <span className="gold-text">Столу</span>
        </h2>

        <div
          style={{
            width: '100%',
            height: '750px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
            backgroundColor: 'white',
          }}
        >
          <iframe
            src={googleFormUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
          >
            Завантаження...
          </iframe>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '30px',
          }}
        >
          <p
            style={{
              color: 'var(--text-muted)',
            }}
          >
            Також ви можете забронювати за телефоном:
            <br />
            <a
              href="tel:+380963635324"
              className="gold-text"
              style={{
                fontWeight: 'bold',
                fontSize: '1.2rem',
              }}
            >
              +380 96 363 5324
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Booking;
