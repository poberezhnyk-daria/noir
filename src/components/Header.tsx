import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header style={{
      padding: '15px 0',
      borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
      position: 'fixed',
      width: '100%',
      top: 0,
      backgroundColor: 'rgba(10, 10, 10, 0.98)',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
      }}>
        {/* Логотип зліва */}
        <div className="header-logo" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          <img 
            src="/logo.jpg" 
            alt="NOIR" 
            style={{ height: '35px', width: 'auto', borderRadius: '4px' }} 
          />
        </div>

        {/* Назва посередині (тільки для мобілок через CSS) */}
        <div className="mobile-title" style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '1.4rem',
          fontWeight: 'bold',
          letterSpacing: '3px',
          color: '#D4AF37',
          display: 'none' // Показується через медіа-запити в CSS
        }}>
          NOIR
        </div>

        {/* Десктопне меню */}
        <nav className="desktop-nav">
          <ul style={{ display: 'flex', gap: '30px' }}>
            <li><a href="#hero" style={navLinkStyle}>Головна</a></li>
            <li><a href="#menu" style={navLinkStyle}>Меню</a></li>
            <li><a href="#booking" style={navLinkStyle}>Бронювання</a></li>
          </ul>
        </nav>

        {/* Кнопка Гамбургер (справа) */}
        <button className="hamburger" onClick={toggleMenu} style={{
          display: 'none',
          flexDirection: 'column',
          gap: '6px',
          zIndex: 1100,
          flex: 1,
          alignItems: 'flex-end'
        }}>
          <span style={{ ...lineStyle, width: '30px' }}></span>
          <span style={{ ...lineStyle, width: '20px' }}></span>
          <span style={{ ...lineStyle, width: '30px' }}></span>
        </button>

        {/* Мобільне меню (Overlay) */}
        <div className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} style={{
          position: 'fixed',
          top: 0,
          right: isMenuOpen ? 0 : '-100%',
          width: '100%',
          height: '100vh',
          backgroundColor: '#0A0A0A',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          transition: '0.4s ease-in-out',
          zIndex: 1050
        }}>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'center' }}>
            <li><a href="#hero" onClick={toggleMenu} style={mobileNavLinkStyle}>Головна</a></li>
            <li><a href="#menu" onClick={toggleMenu} style={mobileNavLinkStyle}>Меню</a></li>
            <li><a href="#booking" onClick={toggleMenu} style={mobileNavLinkStyle}>Бронювання</a></li>
          </ul>
          <button onClick={toggleMenu} style={{
            marginTop: '50px',
            color: '#D4AF37',
            fontSize: '1rem',
            letterSpacing: '2px'
          }}>ЗАКРИТИ</button>
        </div>
      </div>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  letterSpacing: '1px',
  transition: '0.3s'
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '2rem',
  letterSpacing: '4px',
  color: 'white',
  fontWeight: '300'
};

const lineStyle: React.CSSProperties = {
  height: '2px',
  backgroundColor: '#D4AF37',
  display: 'block',
  transition: '0.3s'
};

export default Header;
