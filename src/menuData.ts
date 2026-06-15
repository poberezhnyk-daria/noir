export interface MenuItem {
  name: string;
  weight?: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  [key: string]: MenuCategory[];
}

export const menuData: MenuData = {
  'Їжа': [
    {
      title: 'СНІДАНКИ',
      items: [
        { 
          name: 'бенедикт з лососем', 
          description: 'Бріош, слабосолений лосось, авокадо, яйця пашот, соус голландез, пармезан, зелена цибуля',
          weight: '300 г', 
          price: '325 грн' 
        },
        { 
          name: 'бенедикт з беконом', 
          description: 'Бріош, обсмажений бекон, авокадо, яйця пашот, соус голландез, пармезан, зелена цибуля',
          weight: '300 г', 
          price: '265 грн' 
        },
      ]
    },
    {
      title: 'Салати',
      items: [
        { 
          name: 'цезар з куркою', 
          description: 'Куряче стегно гриль, листя романо, соус цезар, пармезан, томати чері, часникові крутони',
          weight: '320 г', 
          price: '255 грн' 
        },
        { 
          name: 'цезар з лососем', 
          description: 'Слабосолений лосось, мікс салатів, соус цезар, крем-сир, томати чері, крутони, пармезан',
          weight: '320 г', 
          price: '355 грн' 
        },
        { 
          name: 'салат з чері та буратою', 
          description: 'Сир бурата, томати чері, рукола, соус бальзамік, зелена цибуля',
          weight: '300 г', 
          price: '295 грн' 
        },
        { 
          name: 'салат з козячим сиром та ягодами', 
          description: 'Обсмажений козячий сир, малина, лохина, мікс салатів, томати чері, рукола, шпинат, медово-гірчичний соус',
          weight: '280 г', 
          price: '295 грн' 
        },
      ]
    },
    {
      title: 'БУРГЕРИ ТА РОЛИ',
      items: [
        { 
          name: 'бургер Біф', 
          description: 'Яловича котлета, сир, томати, салат рамен, фірмовий соус, булка бріош',
          weight: '450 г', 
          price: '320 грн' 
        },
        { 
          name: 'бургер з куркою', 
          description: 'Куряче стегно у клярі, томати, салат рамен, фірмовий соус, булка бріош, подається з картоплею фрі та айолі',
          weight: '420 г', 
          price: '285 грн' 
        },
        { 
          name: 'бургер тофу', 
          description: 'Тофу у соєвому маринаді, томати, салат рамен, грибний соус, булка бріош, подається з бататом фрі та айолі',
          weight: '380 г', 
          price: '245 грн' 
        },
        { 
          name: 'рол з куркою', 
          description: 'Куряче стегно гриль, пекінська капуста, томати, фірмовий соус, пшеничний лаваш',
          weight: '350 г', 
          price: '245 грн' 
        },
        { 
          name: 'рол з яловичиною', 
          description: 'Телятина гриль, пекінська капуста, томати, фірмовий соус, пшеничний лаваш',
          weight: '350 г', 
          price: '295 грн' 
        },
        { 
          name: 'веган рол', 
          description: 'Тофу, пекінська капуста, томати, грибний соус, пшеничний лаваш',
          weight: '320 г', 
          price: '220 грн' 
        },
        { 
          name: 'картопля фрі', 
          description: 'Подається з соусом айолі',
          weight: '200 г', 
          price: '115 грн' 
        },
        { 
          name: 'картопля батат', 
          description: 'Подається з медово-гірчичним соусом',
          weight: '200 г', 
          price: '155 грн' 
        },
        { 
          name: 'смажені баклажани у світ чілі', 
          description: 'Баклажани, соус світ чілі',
          weight: '250 г', 
          price: '195 грн' 
        },
        { 
          name: 'курячі нагетси', 
          weight: '220 г', 
          price: '185 грн' 
        },
        { 
          name: 'кільця кальмара', 
          description: 'Подаються з соусом тартар',
          weight: '220 г', 
          price: '245 грн' 
        },
      ]
    },
    {
      title: 'закуски',
      items: [
        { 
          name: 'тартар з яловичини', 
          description: 'Рублена телятина, каперси, зелена цибуля, яєчний жовток, соєвий соус, лимонний фреш',
          weight: '180 г', 
          price: '345 грн' 
        },
        { 
          name: 'тартар з лосося', 
          description: 'Рублений лосось, авокадо, зелена цибуля, лимонний фреш',
          weight: '180 г', 
          price: '365 грн' 
        },
        { 
          name: 'тартар з тунця', 
          description: 'Рублений тунець, авокадо, зелена цибуля, соус чілі-майо, лимонний фреш',
          weight: '180 г', 
          price: '375 грн' 
        },
        { 
          name: 'брускети (порція 2 шт)', 
          description: 'Хрустка чіабата, крем-сир, рукола, оливкова олія. Начинка на вибір.',
          weight: '180 г', 
          price: '245 грн' 
        },
      ]
    },
    {
      title: 'Основні страви',
      items: [
        { 
          name: 'курячий шашлик', 
          description: 'Куряче стегно гриль, соус барбекю, рукола, томати чері',
          weight: '350 г', 
          price: '315 грн' 
        },
        { 
          name: 'яловичий шашлик', 
          description: 'Телятина гриль, соус барбекю, рукола, томати чері',
          weight: '350 г', 
          price: '395 грн' 
        },
      ]
    },
    {
      title: 'нарізки та плато',
      items: [
        { 
          name: 'сирна дошка', 
          description: 'Сир Шавре, пармезан, Брі, трюфельний мед, свіжі ягоди, печиво',
          weight: '350 г', 
          price: '565 грн' 
        },
        { 
          name: 'м’ясна дошка', 
          description: 'Прошуто, салямі (2 види), сир Шавре, Брі, оливки, томати чері, рукола',
          weight: '300 г', 
          price: '495 грн' 
        },
        { 
          name: 'пивна тарілка XXL', 
          description: 'Нагетси, картопля фрі, кільця кальмара, цибулеві кільця, часникові грінки, батат фрі, сир косичка, соуси тартар та айолі', 
          weight: '1100 г', 
          price: '695 грн' 
        },
        { 
          name: 'пивна тарілка XL', 
          description: 'Картопля фрі, нагетси, цибулеві кільця, сир косичка, часникові грінки, соус айолі', 
          weight: '750 г', 
          price: '325 грн' 
        },
      ]
    },
    {
      title: 'десерти',
      items: [
        { 
          name: 'Полуниця з маскарпоне', 
          description: 'Свіжа полуниця, крем маскарпоне, м’ята, карамелізована бріош',
          weight: '180 г', 
          price: '175 грн' 
        },
        { 
          name: 'канолі', 
          description: 'Хрусткі трубочки з мусом із рікоти та маскарпоне, малиновий соус, лохина, фісташка',
          weight: '150 г', 
          price: '195 грн' 
        },
      ]
    }
  ],
  'Бар': [
    {
      title: 'ШОТИ',
      items: [
        { name: 'б - 52', description: '(кавовий лікер, baileys, triple sec)', price: '150 грн' },
        { name: 'electrolit', description: '(самбука, Jägermeister)', price: '150 грн' },
        { name: 'б - 53', description: '(кавовий лікер, baileys, абсент)', price: '160 грн' },
        { name: 'б - 56', description: '(кавовий лікер, baileys, Jägermeister)', price: '150 грн' },
        { name: 'дядя ваня по - херсонськи', description: '(рожевий джин, лимонний фреш, гренадин)', price: '150 грн' },
        { name: 'зелений мексиканець', description: '(pisang, текіла, лимонний фреш)', price: '160 грн' },
        { name: 'постріл у голову', description: '(baileys, віскі)', price: '160 грн' },
        { name: 'хіросіма', description: '(baileys, самбука, абсент)', price: '170 грн' },
      ]
    },
    {
      title: 'LONG DRINKS',
      items: [
        { name: 'long island', description: '(ром, текіла, джин, горілка, triple sec, кола)', price: '250 грн' },
        { name: 'tropical bibi', description: '(ром, pisang, маракуя, персик)', price: '220 грн' },
        { name: 'схована загроза', description: '(текіла, кокосовий лікер, ананас)', price: '240 грн' },
        { name: 'fruit island', description: '(ром, текіла, джин, горілка, маракуя)', price: '250 грн' },
        { name: 'огірковий джин-тонік', description: '(джин, тонік, лайм, огірок)', price: '200 грн' },
      ]
    },
    {
      title: 'SOUR',
      items: [
        { name: 'clover club', description: '(джим, малина, лайм)', price: '220 грн' },
        { name: 'whiskey sour', description: '(бурбон, лайм, цукровий сироп)', price: '220 грн' },
        { name: 'noir sour', description: '(рожевий джин, pisang, малина, ананас)', price: '240 грн' },
        { name: 'new york sour', description: '(віскі, мед, червоне вино)', price: '250 грн' },
        { name: 'passion sour', description: '(віскі, маракуя, лимон)', price: '230 грн' },
        { name: 'cherry sour', description: '(віскі, вишня, лимон)', price: '230 грн' },
        { name: 'aperol sour', description: '(aperol. джин, лимон)', price: '220 грн' },
        { name: 'peach sour', description: '(джин, персик, triple sec)', price: '220 грн' },
        { name: 'porn star martini', description: '(ванільна горілка, маракуя, prosecco)', price: '280 грн' },
      ]
    },
    {
      title: 'SPRITZ & CLASSICS',
      items: [
        { name: 'aperol spritz', description: '(aperol, prosecco, содова)', price: '200 грн' },
        { name: 'aperol spritz bunny', description: '(aperol, prosecco, морквяний фреш)', price: '210 грн' },
        { name: 'hugo', description: '(prosecco, бузина, лайм, м’ята)', price: '210 грн' },
        { name: 'bellini', description: '(prosecco, персикове пюре)', price: '210 грн' },
      ]
    },
    {
      title: 'БЕЗАЛКОГОЛЬНІ КОКТЕЙЛІ',
      items: [
        { name: 'мохіто б/а', price: '125 грн' },
        { name: 'апероль б/а', price: '130 грн' },
        { name: 'hugo б/а', price: '130 грн' },
        { name: 'морквяний hugo б/а', price: '150 грн' },
      ]
    },
    {
      title: 'ХОЛОДНІ НАПОЇ',
      items: [
        { name: 'холодний чай з гренадином', price: '95 грн' },
        { name: 'холодний чай каркаде', price: '90 грн' },
        { name: 'холодний чай mona', description: '(бергамот, персик, базилік)', price: '115 грн' },
      ]
    },
    {
      title: 'ЛИМОНАДИ',
      items: [
        { name: 'класичний лимонад', description: '(лимон, м’ята)', price: '120 грн' },
        { name: 'полуничний лимонад', description: '(полуниця, лимон, м’ята)', price: '130 грн' },
        { name: 'полуничний - базиліковий лимонад', description: '(полуниця, лимон, базилік)', price: '135 грн' },
        { name: 'малиновий лимонад', description: '(малина, лимон, м’ята)', price: '130 грн' },
        { name: 'тропічний лимонад', description: '(манго, маракуя, лимон)', price: '120 грн' },
        { name: 'ягідний лимонад', description: '(полуниця, малина, лимон)', price: '120 грн' },
        { name: 'ананасово - базиліковий лимонад', description: '(ананас, базилік, кокос)', price: '135 грн' },
      ]
    },
    {
      title: 'СОКИ',
      items: [
        { name: 'сік granini мультифрукт', weight: '0,25л', price: '75 грн' },
        { name: 'сік granini яблучний', weight: '0,25л', price: '75 грн' },
        { name: 'сік granini томатний', weight: '0,25л', price: '75 грн' },
      ]
    },
    {
      title: 'ВІСКІ (50 МЛ)',
      items: [
        { name: 'Ballantine’s Finest', price: '180 грн' },
        { name: 'Jameson', price: '160 грн' },
        { name: 'Jack Daniel’s', price: '150 грн' },
        { name: 'Jack Daniel’s apple', price: '140 грн' },
        { name: 'Chivas Regal 12', price: '250 грн' },
      ]
    },
    {
      title: 'РОМ (50 МЛ)',
      items: [
        { name: 'Bacardi Carta Blanca', price: '130 грн' },
        { name: 'Bacardi black', price: '130 грн' },
        { name: 'Bacardi Superior Carta', price: '130 грн' },
        { name: 'Pirat XO 40%', price: '205 грн' },
        { name: 'Bumbu original', price: '250 грн' },
      ]
    },
    {
      title: 'ДЖИН (50 МЛ)',
      items: [
        { name: 'Beefeater blood', price: '130 грн' },
        { name: 'Beefeater Blood orange', price: '150 грн' },
        { name: 'Bombay Sapphire', price: '130 грн' },
      ]
    },
    {
      title: 'ТЕКІЛА (50 МЛ)',
      items: [
        { name: 'Olmeca Silver', price: '130 грн' },
        { name: 'Olmeca ALTOS REPOSADO', price: '210 грн' },
        { name: 'Patron silver', price: '280 грн' },
      ]
    },
    {
      title: 'ГОРІЛКА (50 МЛ)',
      items: [
        { name: 'Finlandia', price: '140 грн' },
        { name: 'Absolut mango', price: '100 грн' },
        { name: 'Grey Goose', price: '150 грн' },
      ]
    }
  ],
  'Кальяни': [
    {
      title: 'КАЛЬЯНИ',
      items: [
        { name: 'Light', price: '350 грн' },
        { name: 'Premium', price: '450 грн' },
        { name: 'Hard', price: '500 грн' },
      ]
    },
    {
      title: 'ФРУКТОВІ ЧАШІ',
      items: [
        { name: 'Апельсин', price: '+100 грн' },
        { name: 'Грейпфрут', price: '+150 грн' },
        { name: 'Ананас', price: '+250 грн' },
      ]
    },
    {
      title: 'КОМПЛЕКТИ',
      items: [
        { name: '🍊 Апельсинова чаша + фруктова колба', price: '+200 грн' },
        { name: '🍈 Грейпфрутова чаша + фруктова колба', price: '+250 грн' },
        { name: '🍍 Ананасова чаша + фруктова колба', price: '+400 грн' },
      ]
    }
  ]
};
