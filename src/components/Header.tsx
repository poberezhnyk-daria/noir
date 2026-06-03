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
      {/* CSS для мобільної версії */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }

        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>

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
          minHeight: '60px',
        }}
      >
        {/* Меню для ПК */}
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

        {/* Кнопка-Гамбургер для телефону */}
        <button
          className="hamburger"
          onClick={toggleMenu}
          style={{
            display: 'none',
            position: 'absolute',
            right: '20px',
            flexDirection: 'column',
            gap: '6px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '10px',
            zIndex: 1100,
          }}
        >
          <span
            style={{
              ...lineStyle,
              width: '25px',
              transform: isMenuOpen
                ? 'rotate(45deg) translate(5px, 5px)'
                : 'none',
            }}
          />

          <span
            style={{
              ...lineStyle,
              width: '25px',
              opacity: isMenuOpen ? 0 : 1,
            }}
          />

          <span
            style={{
              ...lineStyle,
              width: '25px',
              transform: isMenuOpen
                ? 'rotate(-45deg) translate(4px, -5px)'
                : 'none',
            }}
          />
        </button>

        {/* Мобільне меню (виїжджає) */}
        <div
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
            visibility: isMenuOpen ? 'visible' : 'hidden',
          }}
        >
          <ul
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              textAlign: 'center',
              listStyle: 'none',
              padding: 0,
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
                  fontSize: '1.4rem',
                }}
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const navLinkStyle: React.CSSProperties = {
  fontSize: '0.85rem',
  letterSpacing: '4px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '400',
  transition: '0.3s ease',
};

const mobileNavLinkStyle: React.CSSProperties = {
  fontSize: '2rem',
  letterSpacing: '6px',
  color: 'white',
  textDecoration: 'none',
  fontWeight: '300',
  transition: '0.3s',
};

const lineStyle: React.CSSProperties = {
  height: '2px',
  backgroundColor: '#D4AF37',
  display: 'block',
  transition: '0.3s ease-in-out',
};

export default Header;
