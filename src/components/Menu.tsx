import React from 'react';

const menuData = [
  { title: 'Сніданки', items: [{ name: 'Бенедикт з лососем' }, { name: 'Бенедикт з беконом' }] },
  {
    title: 'Салати',
    items: [
      { name: 'Цезар з куркою' },
      { name: 'Цезар з креветками' },
      { name: 'Салат з чері та буратою' },
      { name: 'Салат з козячим сиром та ягодами' }
    ]
  },
  {
    title: 'Бургери та Роли',
    items: [
      { name: 'Бургер Тофу' },
      { name: 'Бургер Біф' },
      { name: 'Рол з куркою' },
      { name: 'Рол з яловичиною' },
      { name: 'Рол з ягням' },
      { name: 'Веган рол' },
      { name: 'Картопля фрі' },
      { name: 'Картопля батат' },
      { name: 'Смажені баклажани у світ чилі' },
      { name: 'Курячі нагетси' }
    ]
  },
  { title: 'Закуски', items: [{ name: 'Тартар з яловичини' }, { name: 'Тартар з тунця' }] },
  {
    title: 'Брускети',
    items: [
      { name: 'Брускета з крабом' },
      { name: 'Брускета з томатами та куркою' },
      { name: 'Брускета з буратою та базиліком' },
      { name: 'Брускета з маслинами та анчоусом' }
    ]
  },
  {
    title: 'Основні страви',
    items: [
      { name: 'Тріска' },
      { name: 'Ягня з гремолатою та томатами' },
      { name: 'Різотто з грибами, буратою та томатом' },
      { name: 'Паста з гремолатою та буратою' }
    ]
  },
  {
    title: 'Італійські нарізки',
    items: [
      { name: "Італійська м'ясна нарізка" },
      { name: 'Сирна дошка з інжирним джемом та трюфельним медом' }
    ]
  },
  {
    title: 'Десерти',
    items: [
      { name: 'Канолі з фісташкою та малиною' },
      { name: 'Шоколадний террин з морозивом' },
      { name: 'Наполеон' },
      { name: 'Чизкейк' }
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <section
      id="menu"
      style={{
        padding: '100px 0',
        backgroundColor: 'var(--bg-primary)'
      }}
    >
      <div className="container">
        <h2
          style={{
            textAlign: 'center',
            fontSize: '3rem',
            marginBottom: '60px',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontWeight: '300'
          }}
        >
          Наше <span className="gold-text">Меню</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
            gap: '60px 80px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {menuData.map((category, idx) => (
            <div key={idx}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: 'var(--accent-gold)',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
                  paddingBottom: '10px',
                  marginBottom: '25px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  display: 'inline-block'
                }}
              >
                {category.title}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    style={{
                      marginBottom: '15px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      fontSize: '1.1rem'
                    }}
                  >
                    <span style={{ color: 'var(--text-main)' }}>
                      {item.name}
                    </span>

                    <span
                      style={{
                        flex: 1,
                        borderBottom: '1px dotted rgba(255, 255, 255, 0.1)',
                        margin: '0 10px'
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
