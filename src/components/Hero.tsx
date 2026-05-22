import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  // Перевірка, чи це мобільний пристрій
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
      justifyContent: 'center',
      alignItems: isMobile ? 'center' : 'flex-end',
      textAlign: 'center',
      position: 'relative',
      backgroundImage: 'url("/tilo.png")',
      backgroundSize: 'cover',
      backgroundPosition: isMobile ? 'center center' : 'center 15%',
      backgroundRepeat: 'no-repeat',
      color: 'white',
      paddingRight: isMobile ? '0' : '10%',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        zIndex: 1
      }}></div>

      <div style={{ position: 'relative', zIndex: 2, width: isMobile ? '80%' : 'auto' }}>
        <a href="#booking" style={{
          display: 'inline-block',
          padding: isMobile ? '14px 25px' : '20px 50px',
          fontSize: isMobile ? '0.8rem' : '1.1rem',
          letterSpacing: '2px',
          fontWeight: 'bold',
          transition: 'all 0.4s ease',
          backgroundColor: 'transparent',
          color: '#D4AF37',
          textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
          border: '1.5px solid #D4AF37',
          textDecoration: 'none',
          boxShadow: '0 0 20px rgba(0,0,0,0.3)',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '250px' : 'none'
        }}>
          ЗАБРОНЮВАТИ СТІЛ
        </a>
      </div>
    </section>
  );
};

export default Hero;
