import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: '/p1.jpg', title: 'Атмосфера' },
    { src: '/zagalna.jpg', title: 'Атмосфера' },
    { src: '/p2.jpg', title: 'Інтер\'єр' },
    { src: '/p3.jpg', title: 'Затишок' },
    { src: '/p4.jpg', title: 'Деталі' },
    { src: '/p5.jpg', title: 'Бар' },
    { src: '/p6.jpg', title: 'Вечір' },
  ];

  return (
    <section id="gallery" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 style={titleStyle}>Галерея</h2>

        <style>{`
          .gallery-item:hover img { transform: scale(1.1); }
          .gallery-item:hover .overlay { opacity: 1; }
        `}</style>
        <div style={masonryGridStyle}>
          {images.map((img, index) => (
            <div key={index} style={imageWrapperStyle} className="gallery-item">
              <img src={img.src} alt={img.title} style={imageStyle} />
              <div style={overlayStyle} className="overlay">
                <span style={overlayTextStyle}>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const sectionStyle: React.CSSProperties = {
  padding: '120px 0',
  backgroundColor: '#050505',
  color: '#FFFFFF',
  textAlign: 'center',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '60px',
  letterSpacing: '10px',
  textTransform: 'uppercase',
  fontWeight: '200',
  color: '#D4AF37',
};

const masonryGridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridAutoRows: '300px',
  gridAutoFlow: 'dense',
  gap: '15px',
};

const imageWrapperStyle: React.CSSProperties = {
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '8px',
  cursor: 'pointer',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
};

const overlayStyle: React.CSSProperties = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  opacity: 0,
  transition: 'opacity 0.4s ease',
};

const overlayTextStyle: React.CSSProperties = {
  color: '#D4AF37',
  fontSize: '1.2rem',
  letterSpacing: '3px',
  textTransform: 'uppercase',
  fontWeight: '300',
};

export default Gallery;
