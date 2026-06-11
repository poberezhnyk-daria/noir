import React, { useState } from 'react';
import { menuData } from '../menuData';
import type { MenuCategory } from '../menuData';

const Menu: React.FC = () => {
  const categories = ['Їжа', 'Кальяни', 'Бар'];
  const [activeCategory, setActiveCategory] = useState('Їжа');

  const renderContent = () => {
    const data = menuData[activeCategory] as MenuCategory[];

    return (
      <div style={menuGridStyle}>
        {data.map((cat, idx) => (
          <div key={idx} style={categorySectionStyle}>
            <h3 style={categoryTitleStyle}>{cat.title}</h3>
            <div style={itemsListStyle}>
              {cat.items.map((item, i) => (
                <div key={i} style={menuItemStyle}>
                  <div style={itemMainRowStyle}>
                    <span style={itemNameStyle}>{item.name}</span>
                    <span style={itemPriceStyle}>{item.price}</span>
                  </div>
                  {(item.weight || item.description) && (
                    <div style={itemSubRowStyle}>
                      {item.description && <span style={itemDescStyle}>{item.description}</span>}
                      {item.weight && <span style={itemWeightStyle}>{item.weight}</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="menu" style={sectionStyle}>
      <div
        className="container"
        style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}
      >
        <h2 style={titleStyle}>Меню</h2>

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

        {renderContent()}
      </div>
    </section>
  );
};

// Styles
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

// Text Menu Styles
const menuGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '50px',
  textAlign: 'left',
};

const categorySectionStyle: React.CSSProperties = {
  marginBottom: '20px',
};

const categoryTitleStyle: React.CSSProperties = {
  fontSize: '1.6rem',
  color: '#D4AF37',
  borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
  paddingBottom: '10px',
  marginBottom: '25px',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: '400',
};

const itemsListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const menuItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  paddingBottom: '10px',
};

const itemMainRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '15px',
};

const itemNameStyle: React.CSSProperties = {
  fontSize: '1.2rem',
  fontFamily: 'Georgia, serif',
  fontStyle: 'italic',
  color: '#FFFFFF',
  letterSpacing: '0.5px',
};

const itemPriceStyle: React.CSSProperties = {
  fontSize: '1.1rem',
  color: '#D4AF37',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
};

const itemSubRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.5)',
  marginTop: '5px',
};

const itemDescStyle: React.CSSProperties = {
  fontStyle: 'normal',
};

const itemWeightStyle: React.CSSProperties = {
  marginLeft: 'auto',
  color: 'rgba(212, 175, 55, 0.6)',
};

export default Menu;
