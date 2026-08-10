export interface MenuItem {
  name: string;
  weight?: string;
  description?: string;
  price?: string;
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
      title: 'Салати',
      items: [
        { 
          name: 'Салат Цезар з куркою', 
          description: 'Салат Ромен, куряче стегно гриль, пармезан, томати чері, грінки, соус Цезар',
          weight: '320 г', 
          price: '255 грн',
          image: '/jezar-kyrka.PNG'
        },
        { 
          name: 'Салат Цезар з лососем', 
          description: 'Лосось, крем-сир, мікс салатів, соус Цезар, томати чері, грінки, пармезан',
          weight: '320 г', 
          price: '355 грн',
          image: '/jezar-lococ.PNG'
        },
        { 
          name: 'Салат Цезар з тунцем', 
          description: '',
          weight: '', 
          price: '' 
        },
      ]
    },
    {
      title: 'БУРГЕРИ ТА РОЛИ',
      items: [
        { 
          name: 'Бургер Біф', 
          description: 'Булка бріош, яловича котлета, сир, фірмовий соус, томати, салат Ромен',
          weight: '450 г', 
          price: '320 грн',
          image: '/burg-yalov.JPG'
        },
        { 
          name: 'Бургер з куркою', 
          description: 'Куряче стегно гриль, булка бріош, фірмовий соус, томати, салат Ромен, подається з картоплею фрі та соусом айолі',
          weight: '420 г', 
          price: '285 грн' 
        },
        { 
          name: 'Бургер Тофу', 
          description: 'Тофу, салат Ромен, томати, грибний соус, подається з бататом фрі та соусом айолі',
          weight: '380 г', 
          price: '245 грн' 
        },
        { 
          name: 'Рол з куркою', 
          description: 'Пшеничний лаваш, куряче стегно гриль, пекінська капуста, томати, фірмовий соус',
          weight: '350 г', 
          price: '245 грн' 
        },
        { 
          name: 'Рол з телятиною', 
          description: 'Пшеничний лаваш, телятина гриль, пекінська капуста, томати, фірмовий соус',
          weight: '350 г', 
          price: '295 грн' 
        },
        { 
          name: 'Веган рол', 
          description: 'Пшеничний лаваш, тофу, пекінська капуста, томати, грибний соус',
          weight: '320 г', 
          price: '220 грн' 
        },
        { 
          name: 'Картопля фрі', 
          description: 'Картопля фрі, подається з соусом айолі',
          weight: '200 г', 
          price: '115 грн' 
        },
        { 
          name: 'Картопля батат', 
          description: 'Батат фрі, подається з медово-гірчичним соусом',
          weight: '200 г', 
          price: '155 грн' 
        },
        { 
          name: 'Курячі нагетси', 
          weight: '220 г', 
          price: '185 грн' 
        },
        { 
          name: 'Креветки гриль', 
          weight: '100 г', 
          price: '250 грн',
          image: '/krevetki.JPG'
        },
        { 
          name: 'Кільця кальмара', 
          description: 'Кільця кальмара у клярі, подаються з соусом тартар',
          weight: '220 г', 
          price: '245 грн' 
        },
      ]
    },
    {
      title: 'закуски',
      items: [
        { 
          name: 'Тартар з яловичини', 
          description: 'Телятина, каперси, зелена цибуля, яєчний жовток, соєвий соус, лимонний фреш, сіль, перець',
          weight: '180 г', 
          price: '345 грн' 
        },
        { 
          name: 'Тартар з лосося', 
          description: 'Лосось, авокадо, зелена цибуля, лимонний фреш, сіль, перець',
          weight: '180 г', 
          price: '365 грн',
          image: '/tartar-lococ.PNG'
        },
        { 
          name: 'Тартар з тунця', 
          description: 'Рублений тунець, соус чілі-майо, лимонний фреш, зелена цибуля',
          weight: '180 г', 
          price: '375 грн' 
        },
        { 
          name: 'Брускети (порція 2 шт)', 
          description: 'Хрустка чіабата, крем-сир, рукола, оливкова олія',
          weight: '180 г', 
          price: '245 грн' 
        },
        { 
          name: 'Брускета з хамоном', 
          price: '255 грн' 
        },
        { 
          name: 'Брускета з лососем', 
          price: '245 грн' 
        },
      ]
    },
    {
      title: 'Основні страви',
      items: [
        { 
          name: 'Шашлички з курки', 
          description: 'Куряче стегно гриль, соус барбекю, рукола, томати чері',
          weight: '350 г', 
          price: '315 грн' 
        },
        { 
          name: 'Шашлички з телятини', 
          description: 'Телятина гриль, соус барбекю, рукола, томати чері',
          weight: '350 г', 
          price: '395 грн' 
        },
        { 
          name: 'Сердечка в соєвому соусі', 
          description: 'Сердечка, соєвий соус, мед, ерош пішта', 
          price: '180 грн', 
          image: '/serdechka.JPG'
        },
        { 
          name: 'Сердечка фрі', 
          description: 'Сердечка, яйця, мука, сухарі, соус кетчуп, соус медово - гірчичний', 
          price: '180 грн',
          image: '/serd-fri.JPG'
        },
        { 
          name: 'Фетучіні з куркою', 
          description: 'Паста, курка, чері, пармезан, вершки, мікрогрін', 
          price: '250 грн',
          image: '/fetychunu.JPG'
        },
        { 
          name: 'Паста карбонара', 
          description: 'Бекон, чеснок, вершки, паста, пармезан, яйця', 
          price: '200 грн',
          image: '/karbonara.JPG'
        },
        { 
          name: 'Паста з лососем', 
          description: 'Лосось, вершки, лимонний сок, масло, пармезан, чері, мікрогрін', 
          price: '270 грн',
          image: '/lococ.JPG'
        }
      ]
    },
    {
      title: 'нарізки та плато',
      items: [
        { 
          name: 'Сирна дошка', 
          description: 'Сир Шавре, пармезан, Брі, трюфельний мед, свіжі ягоди, печиво',
          weight: '350 г', 
          price: '565 грн',
          image: '/curna-dochka.PNG'
        },
        { 
          name: 'М’ясна дошка', 
          description: 'Прошуто, два види салямі, сир Шавре, Брі, оливки, томати чері, рукола',
          weight: '300 г', 
          price: '495 грн',
          image: '/myasna-doshka.JPG'
        },
        { 
          name: 'Пивна дошка XXL', 
          description: 'Нагетси, картопля фрі, кільця кальмара, цибулеві кільця, часникові грінки, батат фрі, сир косичка, соуси тартар та айолі', 
          weight: '1100 г', 
          price: '695 грн' 
        },
        { 
          name: 'Пивна дошка XL', 
          description: 'Картопля фрі, нагетси, цибулеві кільця, сир косичка, часникові грінки, соус айолі', 
          weight: '750 г', 
          price: '325 грн',
          image: '/pivnaxl.JPG'
        },
      ]
    },
    {
      title: 'десерти',
      items: [
        { 
          name: 'Полуниця з маскарпоне', 
          description: 'Свіжа полуниця, крем маскарпоне, цукровий сироп, м’ята',
          weight: '180 г', 
          price: '175 грн' 
        },
        { 
          name: 'Канолі', 
          description: 'Хрусткі трубочки, мус канолі (рікота та маскарпоне), малиновий соус, лохина, фісташка',
          weight: '150 г', 
          price: '195 грн' 
        },
        { 
          name: 'Наполеон',
          weight: '180 г', 
          price: '135 грн',
          image: '/napoleon.PNG'
        },
         { 
          name: 'Чізкейк снікерс',
          weight: '180 г', 
          price: '145 грн',
          image: '/xizkeqk.PNG'
        },
      ]
    }
  ],
  'Бар': [
    {
      title: 'КОКТЕЙЛІ',
      items: [
        { 
          name: 'Elderflower Gin Garden', 
          description: 'джин, сироп бузини, огірок, яблучний сік, лимонний фреш', 
          price: '— грн' 
        },
        { 
          name: 'Don\'t touch me, Rosie', 
          description: 'золотий ром, амарето, гренадин, вершки, пудра малини', 
          price: '— грн' 
        },
        { 
          name: 'Май Тай', 
          description: 'золотий ром, темний ром, трипл сек, амарето, апельсиновий сік, ананасовий сік, лимонний фреш, гренадин', 
          price: '— грн' 
        },
        { 
          name: 'Sangrita Spice', 
          description: 'текіла, томатний сік, сицилійський сік, табаско, ворчестерський соус, чорний перець', 
          price: '— грн' 
        },
        { 
          name: 'Hawaii', 
          description: 'золотий ром, кокосовий лікер, блю курасао, кокосове пюре, вершки, ананасовий сік', 
          price: '— грн' 
        },
        { 
          name: 'Pina Colada', 
          description: 'золотий ром, кокосовий лікер, вершки, ананасове пюре, ананасовий сік', 
          price: '— грн' 
        },
      ]
    },
    {
      title: 'ШОТИ',
      items: [
        { name: 'б - 52', description: 'кавовий лікер, baileys, triple sec', price: '150 грн' },
        { name: 'electrolit', description: 'самбука, Jägermeister', price: '150 грн' },
        { name: 'б - 53', description: 'кавовий лікер, baileys, абсент', price: '160 грн' },
        { name: 'б - 56', description: 'кавовий лікер, baileys, Jägermeister', price: '150 грн' },
        { name: 'дядя ваня по - херсонськи', description: 'рожевий джин, лимонний фреш, гренадин', price: '150 грн' },
        { name: 'зелений мексиканець', description: 'pisang, текіла, лимонний фреш', price: '160 грн' },
        { name: 'постріл у голову', description: 'baileys, віскі', price: '160 грн' },
        { name: 'хіросіма', description: 'baileys, самбука, абсент', price: '170 грн' },
      ]
    },
    {
      title: 'LONG DRINKS',
      items: [
        { name: 'long island', description: 'ром, текіла, джин, горілка, triple sec, кола', price: '250 грн' },
        { name: 'tropical bibi', description: 'ром, pisang, маракуя, персик', price: '220 грн' },
        { name: 'схована загроза', description: 'текіла, кокосовий лікер, ананас', price: '240 грн' },
        { name: 'fruit island', description: 'ром, текіла, джин, горілка, маракуя', price: '250 грн' },
        { name: 'огірковий джин-тонік', description: 'джин, тонік, лайм, огірок', price: '200 грн' },
      ]
    },
    {
      title: 'SOUR',
      items: [
        { name: 'clover club', description: 'джим, малина, лайм', price: '220 грн' },
        { name: 'whiskey sour', description: 'бурбон, лайм, цукровий сироп', price: '220 грн' },
        { name: 'noir sour', description: 'рожевий джин, pisang, малина, ананас', price: '240 грн' },
        { name: 'new york sour', description: 'віскі, мед, червоне вино', price: '250 грн' },
        { name: 'passion sour', description: 'віскі, маракуя, лимон', price: '230 грн' },
        { name: 'cherry sour', description: 'віскі, вишня, лимон', price: '230 грн' },
        { name: 'aperol sour', description: 'aperol, джин, лимон', price: '220 грн' },
        { name: 'peach sour', description: 'джин, персик, triple sec', price: '220 грн' },
        { name: 'porn star martini', description: 'ванільна горілка, маракуя, prosecco', price: '280 грн' },
      ]
    },
    {
      title: 'SPRITZ & CLASSICS',
      items: [
        { name: 'aperol spritz', description: 'aperol, prosecco, содова', price: '200 грн' },
        { name: 'aperol spritz bunny', description: 'aperol, prosecco, морквяний фреш', price: '210 грн' },
        { name: 'hugo', description: 'prosecco, бузина, лайм, м’ята', price: '210 грн' },
        { name: 'bellini', description: 'prosecco, персикове пюре', price: '210 грн' },
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
        { name: 'холодний чай mona', description: 'бергамот, персик, базилік', price: '115 грн' },
      ]
    },
    {
      title: 'ЛИМОНАДИ',
      items: [
        { name: 'класичний лимонад', description: 'лимон, м’ята', price: '120 грн' },
        { name: 'полуничний лимонад', description: 'полуниця, лимон, м’ята', price: '130 грн' },
        { name: 'полуничний - базиліковий лимонад', description: 'полуниця, лимон, базилік', price: '135 грн' },
        { name: 'малиновий лимонад', description: 'малина, лимон, м’ята', price: '130 грн' },
        { name: 'тропічний лимонад', description: 'манго, маракуя, лимон', price: '120 грн' },
        { name: 'ягідний лимонад', description: 'полуниця, малина, лимон', price: '120 грн' },
        { name: 'ананасово - базиліковий лимонад', description: 'ананас, базилік, кокос', price: '135 грн' },
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
      title: 'ПИВО',
      items: [
        { name: 'Stella Artois', weight: '0,5 л', price: '80 грн' },
        { name: 'Stella Artois', weight: '0,3 л', price: '65 грн' },
        { name: 'Blanche', weight: '0,5 л', price: '90 грн' },
        { name: 'Blanche', weight: '0,3 л', price: '70 грн' },
        { name: 'Leffe Brune', weight: '0,5 л', price: '110 грн' },
        { name: 'Leffe Brune', weight: '0,3 л', price: '80 грн' },
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
  ],
  'Ігри': [
    {
      title: 'ІГРИ ДЛЯ КОМПАНІЇ',
      items: [
        {
          name: 'МАФІЯ',
          description: 'Інтриги, підозри та нічні голосування для компаній',
        },
        {
          name: 'НОРМ АБО СТРЕМ',
          description: 'Захоплива гра з вибором, що коштує уваги, а що викликає страх',
        },
        {
          name: 'РЕД ФЛАГ',
          description: 'Гуморні питання, що розкривають характер та створюють веселу атмосферу',
        },
        {
          name: 'КАРТИ',
          description: 'Класичні колоди для дурня, покеру та інших улюблених розваг',
        },
        {
          name: 'ШАХИ',
          description: 'Класична інтелектуальна дуель для тих, хто любить стратегічні виклики',
        },
        {
          name: 'ШАШКИ',
          description: 'Плавні ходи та гострі перемоги на вишуканому ігровому полі',
        }
      ]
    }
  ]
};
