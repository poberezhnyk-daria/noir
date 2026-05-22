import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="hero" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end', // Опускаємо контент (кнопку) до низу
      alignItems: 'center', // Кнопка тепер завжди по центру для балансу
      textAlign: 'center',
      position: 'relative',
      backgroundImage: 'url("/tilo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center', // Фото ідеально по центру
      backgroundRepeat: 'no-repeat',
      color: 'white',
      paddingBottom: isMobile ? '12vh' : '10vh', // Відступ від самого низу екрана
      transition: 'all 0.3s ease'
    }}>
      {/* Тонкий шар затемнення */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        zIndex: 1
      }}></div>

      <div style={{ position: 'relative', zIndex: 2, width: isMobile ? '80%' : 'auto' }}>
        <a
          href="#booking"
          style={{
            display: 'inline-block',
            padding: isMobile ? '14px 30px' : '18px 50px',
            fontSize: isMobile ? '0.85rem' : '1rem',
            letterSpacing: '3px',
            fontWeight: 'bold',
            transition: 'all 0.4s ease',
            backgroundColor: 'transparent',
            color: '#D4AF37',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)',
            border: '2px solid #D4AF37',
            textDecoration: 'none',
            boxShadow: '0 10px 40px rgba(0,0,0,0.4)',
            maxWidth: isMobile ? '260px' : 'none'
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
