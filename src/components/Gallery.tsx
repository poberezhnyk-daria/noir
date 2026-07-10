import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: '/photo_2026-07-10_13-17-32.jpg', alt: 'Gallery 1' },
    { src: '/photo_2026-07-10_13-17-35.jpg', alt: 'Gallery 2' },
    { src: '/photo_2026-07-10_13-17-38.jpg', alt: 'Gallery 3' },
    { src: '/photo_2026-07-10_13-17-43.jpg', alt: 'Gallery 4' },
    { src: '/photo_2026-07-10_13-17-46.jpg', alt: 'Gallery 5' },
    { src: '/photo_2026-07-10_13-17-52.jpg', alt: 'Gallery 6' },
  ];

  return (
    <section id="gallery" style={sectionStyle}>
      <div className="container" style={containerStyle}>
        <h2 style={titleStyle}>Галерея</h2>
        <div style={gridStyle}>
          {images.map((img, index) => (
            <div key={index} style={imageContainerStyle}>
              <img src={img.src} alt={img.alt} style={imageStyle} />
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

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px',
};

const imageContainerStyle: React.CSSProperties = {
  overflow: 'hidden',
  borderRadius: '4px',
};

const imageStyle: React.CSSProperties = {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  transition: 'transform 0.5s ease',
};

export default Gallery;
