import React from 'react';

const Booking: React.FC = () => {
  const googleFormUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSeiDoJ5rDpmYvftLwQkiA4N1Qz9P0QhybX0KlFQcke5RucjRA/viewform?usp=dialog';

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
            height: '800px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            boxShadow: '0 0 25px rgba(212, 175, 55, 0.1)',
            backgroundColor: '#ffffff',
          }}
        >
          <iframe
            src={googleFormUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            style={{ display: 'block' }}
          >
            Завантаження...
          </iframe>
        </div>

        <div
          style={{
            textAlign: 'center',
            marginTop: '40px',
          }}
        >
          <p
            style={{
              color: 'var(--text-muted)',
              fontSize: '1rem',
            }}
          >
            Віддаєте перевагу живому спілкуванню?
            <br />
            Зателефонуйте нам:
            <br />
            <a
              href="tel:+380963635324"
              className="gold-text"
              style={{
                fontWeight: 'bold',
                fontSize: '1.4rem',
                textDecoration: 'none',
                marginTop: '10px',
                display: 'inline-block',
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
