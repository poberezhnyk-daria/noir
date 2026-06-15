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
                    <div style={itemConnectorStyle}></div>
                    <span style={itemPriceStyle}>{item.price}</span>
                  </div>
                  {item.description && (
                    <div style={itemSubRowStyle}>
                      <span style={itemDescStyle}>{item.description}</span>
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
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}
      >
        <h2 style={titleStyle}>Меню</h2>

        <div style={tabsContainerStyle}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                ...tabButtonStyle,
                color: activeCategory === cat ? '#D4AF37' : 'rgba(255, 255, 255, 0.5)',
                borderBottom:
                  activeCategory === cat
                    ? '1px solid #D4AF37'
                    : '1px solid transparent',
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
  padding: '120px 0',
  backgroundColor: '#050505',
  color: '#FFFFFF',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '60px',
  letterSpacing: '10px',
  textTransform: 'uppercase',
  fontWeight: '200',
  color: '#D4AF37',
};

const tabsContainerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  gap: '30px',
  marginBottom: '70px',
};

const tabButtonStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  padding: '10px 5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  outline: 'none',
};

// Text Menu Styles
const menuGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
  columnGap: '80px',
  rowGap: '40px',
  textAlign: 'left',
};

const categorySectionStyle: React.CSSProperties = {
  marginBottom: '30px',
};

const categoryTitleStyle: React.CSSProperties = {
  fontSize: '1.4rem',
  color: '#D4AF37',
  borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
  paddingBottom: '12px',
  marginBottom: '30px',
  textTransform: 'uppercase',
  letterSpacing: '4px',
  fontWeight: '300',
};

const itemsListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
};

const menuItemStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
};

const itemMainRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '10px',
};

const itemNameStyle: React.CSSProperties = {
  fontSize: '1rem',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  letterSpacing: '2px',
  fontWeight: '400',
  whiteSpace: 'nowrap',
};

const itemConnectorStyle: React.CSSProperties = {
  flex: 1,
  borderBottom: '1px dotted rgba(212, 175, 55, 0.2)',
  height: '1px',
  marginBottom: '4px',
};

const itemPriceStyle: React.CSSProperties = {
  fontSize: '1rem',
  color: '#D4AF37',
  fontWeight: '500',
  whiteSpace: 'nowrap',
  letterSpacing: '1px',
};

const itemSubRowStyle: React.CSSProperties = {
  display: 'flex',
  fontSize: '0.85rem',
  color: 'rgba(255, 255, 255, 0.4)',
  lineHeight: '1.4',
  maxWidth: '90%',
};

const itemDescStyle: React.CSSProperties = {
  fontStyle: 'italic',
  textTransform: 'lowercase',
};


export default Menu;
