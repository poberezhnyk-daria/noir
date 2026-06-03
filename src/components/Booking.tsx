import React, { useState } from 'react';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleTelegramOrder = (e: React.FormEvent) => {
    e.preventDefault();

    const message =
      `🌟 *Нове бронювання Noir Lounge*\n\n` +
      `👤 Ім'я: ${formData.name}\n` +
      `📞 Тел: ${formData.phone}\n` +
      `📅 Дата: ${formData.date}\n` +
      `⏰ Час: ${formData.time}\n` +
      `👥 Гостей: ${formData.guests}`;

    const telegramUrl = `https://t.me/share/url?url=&text=${encodeURIComponent(
      message
    )}`;

    window.open(telegramUrl, '_blank');
  };

  return (
    <section
      id="booking"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--bg-secondary)',
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: '600px',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '40px',
          }}
        >
          Бронювання <span className="gold-text">Столу</span>
        </h2>

        <p
          style={{
            textAlign: 'center',
            color: 'var(--text-muted)',
            marginBottom: '30px',
          }}
        >
          Заповніть дані та оберіть контакт (093 723 46 62) для миттєвої
          відправки.
        </p>

        <form
          onSubmit={handleTelegramOrder}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Ваше ім'я"
            required
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
            value={formData.phone}
            onChange={handleChange}
            style={inputStyle}
          />

          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              style={{
                ...inputStyle,
                flex: 1,
              }}
            />

            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              style={{
                ...inputStyle,
                flex: 1,
              }}
            />
          </div>

          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="2">2 особи</option>
            <option value="4">4 особи</option>
            <option value="6">6 осіб</option>
            <option value="more">Більше</option>
          </select>

          <button
            type="submit"
            className="gold-border"
            style={{
              padding: '15px',
              color: 'var(--accent-gold)',
              fontSize: '1.1rem',
              letterSpacing: '2px',
              marginTop: '10px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
          >
            ВІДПРАВИТИ БРОНЮВАННЯ В TELEGRAM
          </button>
        </form>
      </div>
    </section>
  );
};

const inputStyle: React.CSSProperties = {
  padding: '12px',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(212, 175, 55, 0.3)',
  color: 'white',
  fontSize: '1rem',
  outline: 'none',
  borderRadius: '4px',
};

export default Booking;
