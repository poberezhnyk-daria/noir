import React from 'react';

const Footer: React.FC = () => {
  // Google Maps Embed URL for Sobranetska St, 146b, Uzhhorod
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2631.545736737277!2d22.2741982!3d48.6315554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739185633400001%3A0x7d0a2f7f9c8f8b8a!2z0LLRg9C7LiDQodC-0LHRgNCw0L3QtdGG0YzQutCwLCAxNDZiLCDQo9C20LPQvtGA0L7QtCwg0JfQsNC60LDRgNC_0LDRgtGB0YzQutCwINC-0LHQuy4sIDg4MDAw!5e0!3m2!1suk!2sua!4v1716395000000!5m2!1suk!2sua";

  return (
    <footer style={{ padding: '60px 0', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px'
      }}>
        {/* Map Widget */}
        <div style={{ 
          width: '100%', 
          maxWidth: '800px', 
          height: '300px', 
          borderRadius: '12px', 
          overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
        }}>
          <iframe 
            src={mapSrc}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '2px' }}>
            <span className="gold-text">NOIR</span> LOUNGE
          </div>
          
          <div style={{ textAlign: 'center', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            <p>м. Ужгород, вул. Собранецька, 146б</p>
            
            <div style={{ marginTop: '20px' }}>
              <p style={{ color: 'var(--text-main)', fontWeight: 'bold' }}>Графік роботи:</p>
              <p>Пн-Чт: 13:00 — 00:00</p>
              <p>Пт-Нд: 12:00 — 02:00</p>
            </div>

            <p style={{ marginTop: '20px', fontSize: '1.1rem' }}>
              Резервування: <a href="tel:+380963635324" className="gold-text" style={{ fontWeight: 'bold' }}>+380 96 363 5324</a>
            </p>
          </div>

          <div style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
            <a href="#" className="gold-text">Instagram</a>
            <a href="#" className="gold-text">Facebook</a>
          </div>
          
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.3)', marginTop: '20px' }}>
            © 2026 NOIR Lounge Bar. Всі права захищено.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
