import React from 'react';

const Menu: React.FC = () => {
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
        <div
          style={{
            width: '100%',
            boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
            borderRadius: '4px',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.1)'
          }}
        >
          <img
            src="/menuj.jpg"
            alt="Меню Noir Lounge Bar"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
