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
        padding: scrolled ? '10px 0' : '20px 0',
        position: 'fixed',
        width: '100%',
        top: 0,
        backgroundColor: scrolled
          ? 'rgba(10, 10, 10, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(212, 175, 55, 0.2)'
          : '1px solid transparent',
        transition: 'all 0.4s ease-in-out',
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 30px',
        }}
      >
        {/* Логотип зліва */}
        <div
          className="header-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img
            src="/logo.jpg"
            alt="NOIR"
            style={{
              height: scrolled ? '45px' : '65px',
              width: scrolled ? '45px' : '65px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '1px solid rgba(212, 175, 55, 0.5)',
              transition: 'all 0.4s ease',
            }}
          />

          <span
            style={{
              marginLeft: '15px',
              fontSize: '1.2rem',
              letterSpacing: '4px',
              color: '#D4AF37',
              fontWeight: '300',
              display: scrolled ? 'none' : 'block',
            }}
          >
            NOIR
          </span>
        </div>

        {/* Десктопне меню */}
        <nav className="desktop-nav">
          <ul
            style={{
              display: 'flex',
              gap: '40px',
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

            <li>
              <a
                href="https://www.instagram.com/noir.loungebar?igsh=MmZjcHB4OGNtZXoy"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...navLinkStyle,
                  color: '#D4AF37',
                }}
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </nav>

        {/* Кнопка Гамбургер */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          style={{
            display: 'none',
            flexDirection: 'column',
            gap: '7px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <span style={{ ...lineStyle, width: '30px' }} />
          <span style={{ ...lineStyle, width: '20px' }} />
          <span style={{ ...lineStyle, width: '30px' }} />
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

            <li>
              <a
                href="https://www.instagram.com/noir.loungebar?igsh=MmZjcHB4OGNtZXoy"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  ...mobileNavLinkStyle,
                  color: '#D4AF37',
                }}
              >
                INSTAGRAM
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
  fontSize: '0.8rem',
  letterSpacing: '3px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '400',
  transition: '0.3s ease',
  position: 'relative',
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  letterSpacing: '5px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '300',
  transition: '0.3s',
};

const lineStyle: React.CSSProperties = {
  height: '1px',
  backgroundColor: '#D4AF37',
  display: 'block',
  transition: '0.3s',
};

export default Header;
