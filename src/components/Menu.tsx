import React from 'react';

const Menu: React.FC = () => {
  return (
    <section id="menu" style={{ padding: '100px 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', letterSpacing: '4px' }}>
          Наше <span className="gold-text">Меню</span>
        </h2>
        
        <div style={{
          width: '100%',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative',
          borderRadius: '8px',
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
        }}>
          {/* Фото меню */}
          <img 
            src="/menu.jpg" 
            alt="Меню NOIR Lounge Bar" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              minHeight: '400px',
              backgroundColor: 'var(--bg-secondary)', // Фон поки немає фото
              objectFit: 'contain'
            }}
            // Якщо фото ще немає, покажемо гарний напис
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const placeholder = document.createElement('div');
                placeholder.style.height = '500px';
                placeholder.style.display = 'flex';
                placeholder.style.alignItems = 'center';
                placeholder.style.justifyContent = 'center';
                placeholder.style.color = 'var(--text-muted)';
                placeholder.innerText = 'Фото меню завантажується...';
                parent.appendChild(placeholder);
              }
            }}
          />
        </div>

        <p style={{ 
          textAlign: 'center', 
          marginTop: '30px', 
          color: 'var(--text-muted)', 
          fontSize: '0.9rem',
          letterSpacing: '1px' 
        }}>
          *Натисніть на зображення, щоб збільшити (незабаром)
        </p>
      </div>
    </section>
  );
};

export default Menu;
