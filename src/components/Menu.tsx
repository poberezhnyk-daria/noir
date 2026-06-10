import React, { useState } from 'react';

// Тип для сторінки меню
interface MenuPage {
  src: string;
  category: string;
}

const Menu: React.FC = () => {
  // Список ваших 7 сторінок.
  const menuPages: MenuPage[] = [
    { src: '/m1.jpg', category: 'Їжа' },
    { src: '/m2.jpg', category: 'Їжа' },
    { src: '/m3.jpg', category: 'Їжа' },
    { src: '/m4.jpg', category: 'Кальяни' },
    { src: '/m5.jpg', category: 'Бар' },
    { src: '/m6.jpg', category: 'Бар' },
    { src: '/m7.jpg', category: 'Бар' },
  ];

  // Список категорій для кнопок
  const categories = ['Усе', 'Їжа', 'Кальяни', 'Бар'];

  const [activeCategory, setActiveCategory] = useState('Усе');

  // Фільтрація сторінок залежно від обраної категорії
  const filteredPages =
    activeCategory === 'Усе'
      ? menuPages
      : menuPages.filter(page => page.category === activeCategory);

  return (
    <section id="menu" style={sectionStyle}>
      <div
        className="container"
        style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}
      >
        <h2 style={titleStyle}>Меню</h2>

        {/* Кнопки категорій */}
        <div style={tabsContainerStyle}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...tabButtonStyle,
                color: activeCategory === cat ? '#D4AF37' : '#FFFFFF',
                borderBottom:
                  activeCategory === cat
                    ? '2px solid #D4AF37'
                    : '2px solid transparent',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Список зображень */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {filteredPages.map((page, index) => (
            <div key={index} style={imageWrapperStyle}>
              <img
                src={page.src}
                alt={`Меню сторінка ${index + 1}`}
                style={imageStyle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Стилі
const sectionStyle: React.CSSProperties = {
  padding: '100px 0',
  backgroundColor: '#0A0A0A',
  color: '#FFFFFF',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3rem',
  marginBottom: '40px',
  letterSpacing: '6px',
  textTransform: 'uppercase',
  fontWeight: '300',
  color: '#D4AF37',
};

const tabsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '15px',
  marginBottom: '50px',
};

const tabButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '1rem',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  transition: '0.3s',
  outline: 'none',
};

const imageWrapperStyle: React.CSSProperties = {
  width: '100%',
  boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
  borderRadius: '4px',
  overflow: 'hidden',
  border: '1px solid rgba(212, 175, 55, 0.1)',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: 'auto',
  display: 'block',
};

export default Menu;
