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
      width: '100%',
      position: 'relative', // Контейнер-якір
      backgroundImage: 'url("/tilo.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1
      }}></div>

      {/* Кнопка: прикріплена до фото, а не до екрана */}
      <div style={{
        position: 'absolute',
        zIndex: 2,
        top: isMobile ? 'auto' : '55%', // Трохи нижче центру на десктопі
        bottom: isMobile ? '15%' : 'auto',
        right: isMobile ? '50%' : '10%',
        transform: isMobile ? 'translateX(50%)' : 'translateY(-50%)',
        textAlign: 'center'
      }}>
        <a href="#booking" style={{
          display: 'inline-block',
          padding: isMobile ? '14px 28px' : '18px 45px',
          fontSize: isMobile ? '0.85rem' : '1rem',
          letterSpacing: '3px',
          fontWeight: 'bold',
          transition: '0.3s',
          backgroundColor: 'transparent',
          color: '#D4AF37',
          border: '2px solid #D4AF37',
          textDecoration: 'none',
          backdropFilter: 'blur(10px)',
          whiteSpace: 'nowrap'
        }}>
          ЗАБРОНЮВАТИ СТІЛ
        </a>
      </div>
    </section>
  );
};

export default Hero;
