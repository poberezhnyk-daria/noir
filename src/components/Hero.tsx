import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end', // Зміщуємо контент (кнопку) вправо
      textAlign: 'center',
      position: 'relative',
      backgroundImage: 'url("/tilo.png")', 
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%', // Трохи опускаємо фото, щоб не обрізався верх
      backgroundRepeat: 'no-repeat',
      color: 'white',
      paddingRight: '10%' // Відступ від правого краю для кнопки
    }}>
      {/* Темний шар поверх фото */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Трохи менше затемнення, бо тексту немає
        zIndex: 1
      }}></div>

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Текст видалено, залишаємо тільки кнопку справа посередині */}
        <a href="#booking" style={{
          display: 'inline-block',
          padding: '20px 50px',
          fontSize: '1.1rem',
          letterSpacing: '4px',
          fontWeight: 'bold',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          backgroundColor: 'transparent',
          color: '#D4AF37',
          textTransform: 'uppercase',
          backdropFilter: 'blur(10px)',
          border: '2px solid #D4AF37',
          textDecoration: 'none',
          boxShadow: '0 0 20px rgba(212, 175, 55, 0.2)'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#D4AF37';
          e.currentTarget.style.color = 'black';
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.5)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = '#D4AF37';
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
        }}>
          ЗАБРОНЮВАТИ СТІЛ
        </a>
      </div>
    </section>
  );
};

export default Hero;
