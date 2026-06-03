import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.4s ease-in-out',
      }}
    >
      {/* Основна навігація (тільки меню посередині) */}
      <div
        style={{
          padding: scrolled ? '15px 30px' : '30px 30px',
          backgroundColor: scrolled
            ? 'rgba(10, 10, 10, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(212, 175, 55, 0.2)'
            : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.4s ease',
          position: 'relative',
        }}
      >
        {/* Десктопне меню */}
        <nav className="desktop-nav">
          <ul
            style={{
              display: 'flex',
              gap: '60px',
              listStyle: 'none',
              margin: 0,
              padding: 0,
            }}
          >
            <li>
              <a href="#hero" style={navLinkStyle}>
                ГОЛОВНА
              </a>
            </li>

            <li>
              <a href="#menu" style={navLinkStyle}>
                МЕНЮ
              </a>
            </li>

            <li>
              <a href="#booking" style={navLinkStyle}>
                БРОНЮВАННЯ
              </a>
            </li>
          </ul>
        </nav>

        {/* Гамбургер для мобілок */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          style={{
            display: 'none',
            position: 'absolute',
            right: '30px',
            flexDirection: 'column',
            gap: '7px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <span style={{ ...lineStyle, width: '30px' }}></span>
          <span style={{ ...lineStyle, width: '20px' }}></span>
        </button>

        {/* Мобільне меню */}
        <div
          className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
          style={{
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
            transition: '0.5s cubic-bezier(0.77, 0, 0.175, 1)',
            zIndex: 1050,
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '35px',
              textAlign: 'center',
              listStyle: 'none',
            }}
          >
            <li>
              <a
                href="#hero"
                onClick={toggleMenu}
                style={mobileNavLinkStyle}
              >
                ГОЛОВНА
              </a>
            </li>

            <li>
              <a
                href="#menu"
                onClick={toggleMenu}
                style={mobileNavLinkStyle}
              >
                МЕНЮ
              </a>
            </li>

            <li>
              <a
                href="#booking"
                onClick={toggleMenu}
                style={mobileNavLinkStyle}
              >
                БРОНЮВАННЯ
              </a>
            </li>
          </ul>

          <button
            onClick={toggleMenu}
            style={{
              marginTop: '60px',
              color: 'white',
              background: 'none',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '10px 30px',
              fontSize: '0.8rem',
              letterSpacing: '3px',
              cursor: 'pointer',
            }}
          >
            ЗАКРИТИ
          </button>
        </div>
      </div>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  letterSpacing: '5px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '400',
  transition: '0.3s ease',
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  letterSpacing: '5px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '300',
};

const lineStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: '#D4AF37',
  display: 'block',
};

export default Header;
