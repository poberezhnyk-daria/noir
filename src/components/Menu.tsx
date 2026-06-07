import React from 'react';

const Menu: React.FC = () => {
  const menuImages = ['/mebu1.JPG', '/menu2.JPG', '/menu3-1.jpg'];

  return (
    <section
      id="menu"
      style={{
        padding: '100px 0',
        backgroundColor: '#0A0A0A',
        color: '#FFFFFF',
        textAlign: 'center'
      }}
    >
      <div
        className="container"
        style={{ maxWidth: '900px' }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {menuImages.map((src, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                borderRadius: '4px',
                overflow: 'hidden',
                border: '1px solid rgba(212, 175, 55, 0.1)'
              }}
            >
              <img
                src={src}
                alt={`Меню Noir Lounge Bar сторінка ${index + 1}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
