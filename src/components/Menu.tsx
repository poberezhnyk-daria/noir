import React from 'react';

interface MenuItem {
  name: string;
  weight: string;
  price: string;
  description?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Сніданки',
    items: [
      { name: 'Бенедикт з лососем', weight: '300 г', price: '325 грн' },
      { name: 'Бенедикт з беконом', weight: '300 г', price: '265 грн' },
    ]
  },
  {
    title: 'Салати',
    items: [
      { name: 'Цезар з куркою', weight: '320 г', price: '255 грн' },
      { name: 'Цезар з креветками', weight: '320 г', price: '325 грн' },
      { name: 'Цезар з лососем', weight: '320 г', price: '355 грн' },
      { name: 'Салат з чері та буратою', weight: '300 г', price: '295 грн' },
      { name: 'Салат з козячим сиром та ягодами', weight: '280 г', price: '295 грн' },
    ]
  },
  {
    title: 'Бургери та Роли',
    items: [
      { name: 'Бургер Тофу', weight: '380 г', price: '245 грн' },
      { name: 'Бургер Біф', weight: '450 г', price: '320 грн' },
      { name: 'Бургер з куркою', weight: '420 г', price: '285 грн' },
      { name: 'Рол з куркою', weight: '350 г', price: '245 грн' },
      { name: 'Рол з яловичиною', weight: '350 г', price: '295 грн' },
      { name: 'Веган рол', weight: '320 г', price: '220 грн' },
      { name: 'Картопля фрі', weight: '200 г', price: '115 грн' },
      { name: 'Картопля батат', weight: '200 г', price: '155 грн' },
      { name: 'Смажені баклажани у світ чилі', weight: '250 г', price: '195 грн' },
      { name: 'Курячі нагетси', weight: '220 г', price: '185 грн' },
      { name: 'Кільця кальмарів', weight: '220 г', price: '245 грн' },
    ]
  },
  {
    title: 'Закуски',
    items: [
      { name: 'Тартар з яловичини', weight: '180 г', price: '345 грн' },
      { name: 'Тартар з тунця', weight: '180 г', price: '375 грн' },
      { name: 'Тартар з лососем', weight: '180 г', price: '365 грн' },
      { name: 'Брускета з тунцем у чилі майо', weight: '180 г', price: '235 грн' },
      { name: 'Брускета з буратою та базиліком', weight: '180 г', price: '215 грн' },
      { name: 'Брускета лосось та свіжий огірок', weight: '180 г', price: '245 грн' },
      { name: 'Брускета з хамоном та крем-сиром', weight: '180 г', price: '275 грн' },
    ]
  },
  {
    title: 'Основні страви',
    items: [
      { name: 'Стейк біф з томатом та соусом беарнез', weight: '350 г', price: '595 грн' },
      { name: 'Філе лосося на грилі з пюре батату', weight: '350 г', price: '545 грн' },
      { name: 'Курячі шашличок з томатами', weight: '350 г', price: '315 грн' },
      { name: 'Яловичий шашличок з томатами', weight: '350 г', price: '395 грн' },
      { name: 'Різотто з грибами, буратою та томатом', weight: '350 г', price: '325 грн' },
      { name: 'Паста з гремолатою та буратою', weight: '350 г', price: '315 грн' },
      { name: 'Паста з лососем та цукіні', weight: '350 г', price: '395 грн' },
      { name: 'Паста з куркою та грибами', weight: '350 г', price: '285 грн' },
      { name: 'Паста Карбонара', weight: '350 г', price: '295 грн' },
      { name: 'Паста 4 сири', weight: '350 г', price: '315 грн' },
    ]
  },
  {
    title: 'Нарізки та Плато',
    items: [
      { name: 'Італійська м\'ясна нарізка', weight: '300 г', price: '495 грн' },
      { name: 'Сирна дошка з інжирним джемом', weight: '350 г', price: '565 грн' },
      {
        name: 'Пивна тарілка XXL',
        weight: '1100 г',
        price: '695 грн',
        description: 'нагетси, грінки, кільця кальмара, ковбаски, сир косичка, фрі'
      },
      {
        name: 'Пивна тарілка XL',
        weight: '750 г',
        price: '325 грн',
        description: 'фрі, батат фрі, цибулеві кільця, сир косичка'
      },
    ]
  },
  {
    title: 'Десерти',
    items: [
      { name: 'Канолі з фісташковим кремом', weight: '150 г', price: '195 грн' },
      { name: 'Полуниця з маскарпоне', weight: '180 г', price: '175 грн' },
      { name: 'Наполеон', weight: '180 г', price: '175 грн' },
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <section
      id="menu"
      style={{
        padding: '100px 0',
        backgroundColor: '#0F0F0F',
        backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 80%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.03,
          pointerEvents: 'none',
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/black-linen.png")'
        }}
      ></div>

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
            gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))',
            gap: '40px 60px',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {menuData.map((category, idx) => (
            <div key={idx} style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--accent-gold)',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.3)',
                  paddingBottom: '8px',
                  marginBottom: '20px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase'
                }}
              >
                {category.title}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} style={{ marginBottom: '18px' }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline'
                      }}
                    >
                      <span
                        style={{
                          color: 'var(--text-main)',
                          fontSize: '1.05rem',
                          fontWeight: '400',
                          flex: '1'
                        }}
                      >
                        {item.name}
                      </span>

                      <span
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.85rem',
                          margin: '0 10px',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        {item.weight}
                      </span>

                      <span
                        style={{
                          color: 'var(--accent-gold)',
                          fontWeight: '600',
                          minWidth: '70px',
                          textAlign: 'right'
                        }}
                      >
                        {item.price}
                      </span>
                    </div>

                    {item.description && (
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.8rem',
                          marginTop: '4px',
                          fontStyle: 'italic'
                        }}
                      >
                        {item.description}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Menu;
