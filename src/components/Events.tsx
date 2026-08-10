import React from 'react';

interface EventItem {
  title: string;
  description: string;
  poster: string;
  photos?: string[];
  date?: string;
  accentColor?: string;
}

const events: EventItem[] = [
  {
    title: 'STAND UP NIGHT',
    description: 'Вечір відбірного гумору та непідробних емоцій. Наші коміки розкажуть свої найкращі жарти, а затишна атмосфера Noir Lounge допоможе вам повністю розслабитись та зарядитись позитивом на весь тиждень. Тільки живий звук, тільки щирі посмішки.',
    poster: '/events/standup-poster.jpg',
    date: 'Щотижня',
    accentColor: '#D4AF37'
  },
  {
    title: 'MAFIA GAME',
    description: 'Легендарна психологічна гра, де маски стають реальністю. Випробуйте свою інтуїцію, логіку та акторську майстерність у боротьбі за мирне місто або станьте на бік таємничої мафії. Вечір інтриг, стратегій та незабутніх знайомств.',
    poster: '/events/mafia-poster.jpg',
    photos: ['/events/mafia-1.jpg', '/events/mafia-2.jpg', '/events/mafia-3.jpg'],
    date: 'Кожну п’ятницю',
    accentColor: '#A02C3D'
  }
];

const Events: React.FC = () => {
  return (
    <section id="events" style={sectionStyle}>
      <style>{`
        .event-card {
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .event-card:hover {
          transform: translateY(-10px);
        }
        .photo-mini {
          transition: transform 0.3s ease;
        }
        .photo-mini:hover {
          transform: scale(1.1) rotate(2deg);
          z-index: 5;
        }
        @media (max-width: 992px) {
          .event-content {
            flex-direction: column !important;
            text-align: center;
          }
          .event-poster-container {
            width: 100% !important;
            max-width: 400px;
            margin: 0 auto 30px !important;
          }
          .event-photos {
            justify-content: center !important;
          }
        }
      `}</style>

      <div className="container" style={containerStyle}>
        <h2 style={titleStyle}>Події</h2>
        
        <div style={eventsListStyle}>
          {events.map((event, index) => (
            <div key={index} className="event-card" style={{
              ...eventCardStyle,
              border: `1px solid ${event.accentColor}20`
            }}>
              <div className="event-content" style={eventContentStyle}>
                {/* Афіша */}
                <div className="event-poster-container" style={posterContainerStyle}>
                  <img 
                    src={event.poster} 
                    alt={event.title} 
                    style={{ ...posterStyle, borderColor: event.accentColor }} 
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>

                {/* Текст та міні-фото */}
                <div style={infoContainerStyle}>
                  <div style={headerRowStyle}>
                    <h3 style={{ ...eventTitleStyle, color: event.accentColor }}>{event.title}</h3>
                    {event.date && <span style={dateStyle}>{event.date}</span>}
                  </div>
                  
                  <p style={descriptionStyle}>{event.description}</p>

                  {event.photos && event.photos.length > 0 && (
                    <div className="event-photos" style={photosContainerStyle}>
                      {event.photos.map((photo, pIdx) => (
                        <img 
                          key={pIdx}
                          src={photo}
                          alt={`${event.title} mini ${pIdx}`}
                          className="photo-mini"
                          style={miniPhotoStyle}
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Styles
const sectionStyle: React.CSSProperties = {
  padding: '120px 0',
  backgroundColor: '#050505',
  color: '#FFFFFF',
};

const containerStyle: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '3.5rem',
  marginBottom: '80px',
  letterSpacing: '10px',
  textTransform: 'uppercase',
  fontWeight: '200',
  color: '#D4AF37',
};

const eventsListStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
};

const eventCardStyle: React.CSSProperties = {
  backgroundColor: '#0A0A0A',
  borderRadius: '30px',
  padding: '40px',
  textAlign: 'left',
  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
};

const eventContentStyle: React.CSSProperties = {
  display: 'flex',
  gap: '50px',
  alignItems: 'flex-start',
};

const posterContainerStyle: React.CSSProperties = {
  width: '350px',
  flexShrink: 0,
};

const posterStyle: React.CSSProperties = {
  width: '100%',
  borderRadius: '20px',
  border: '1px solid transparent',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
};

const infoContainerStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
};

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  flexWrap: 'wrap',
  gap: '15px',
};

const eventTitleStyle: React.CSSProperties = {
  fontSize: '2.2rem',
  margin: 0,
  letterSpacing: '5px',
  textTransform: 'uppercase',
  fontWeight: '300',
};

const dateStyle: React.CSSProperties = {
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.5)',
  letterSpacing: '3px',
  textTransform: 'uppercase',
};

const descriptionStyle: React.CSSProperties = {
  fontSize: '1.05rem',
  lineHeight: '1.8',
  color: 'rgba(255, 255, 255, 0.7)',
  margin: 0,
  fontWeight: '300',
};

const photosContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: '15px',
  marginTop: '10px',
  flexWrap: 'wrap',
};

const miniPhotoStyle: React.CSSProperties = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '15px',
  border: '1px solid rgba(255, 255, 255, 0.1)',
};

export default Events;
