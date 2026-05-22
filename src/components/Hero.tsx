import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Вибір фото в залежності від пристрою
  const backgroundImage = isMobile
    ? 'url("/tilo-mobile.JPG")'
    : 'url("/tilo.png")';

  return (
    <section
      id="hero"
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: backgroundImage, // Автоматичне перемикання
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
        backgroundColor: '#0A0A0A'
      }}
    >
      {/* Затемнення */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: 1
        }}
      ></div>

      {/* Кнопка з Constraints */}
      <div
        style={{
          position: 'absolute',
          zIndex: 2,
          top: isMobile ? 'auto' : '55%',
          bottom: isMobile ? '15%' : 'auto',
          right: isMobile ? '50%' : '10%',
          transform: isMobile ? 'translateX(50%)' : 'translateY(-50%)',
          textAlign: 'center',
          width: isMobile ? '80%' : 'auto'
        }}
      >
        <a
          href="#booking"
          style={{
            display: 'inline-block',
            padding: isMobile ? '16px 32px' : '20px 50px',
            fontSize: isMobile ? '0.9rem' : '1.1rem',
            letterSpacing: '3px',
            fontWeight: 'bold',
            transition: '0.4s ease',
            backgroundColor: 'transparent',
            color: '#D4AF37',
            border: '2px solid #D4AF37',
            textDecoration: 'none',
            backdropFilter: 'blur(10px)',
            whiteSpace: 'nowrap',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#D4AF37';
            e.currentTarget.style.color = 'black';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = '#D4AF37';
          }}
        >
          ЗАБРОНЮВАТИ СТІЛ
        </a>
      </div>
    </section>
  );
};

export default Hero;
