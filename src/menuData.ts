export interface MenuItem {
  name: string;
  weight?: string;
  description?: string;
  price?: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface MenuData {
  [key: string]: MenuCategory[];
}
export const menuData: MenuData = {
  'Бар': [
    {
      title: 'КОКТЕЙЛІ',
      items: [
        { 
          name: 'Elderflower Gin Garden', 
          description: 'джин, сироп бузини, огірок, яблучний сік, лимонний фреш', 
          price: '250 грн'
        },
        { 
          name: 'Don\'t touch me, Rosie', 
          description: 'золотий ром, амарето, гренадин, вершки, пудра малини', 
          price: '250 грн',
          image: '/dont.PNG'
        },
        { 
          name: 'Май Тай', 
          description: 'золотий ром, темний ром, трипл сек, амарето, апельсиновий сік, ананасовий сік, лимонний фреш, гренадин', 
          price: '260 грн',
          image: '/maytay.PNG' 
        },
        { 
          name: 'Sangrita Spice', 
          description: 'текіла, томатний сік, сицилійський сік, табаско, ворчестерський соус, чорний перець', 
          price: '220 грн' 
        },
        { 
          name: 'Hawaii', 
          description: 'золотий ром, кокосовий лікер, блю курасао, кокосове пюре, вершки, ананасовий сік', 
          price: '300 грн',
          image: '/hawai.PNG' 
        },
        { 
          name: 'Pina Colada', 
          description: 'золотий ром, кокосовий лікер, вершки, ананасове пюре, ананасовий сік', 
          price: '260 грн',
          image: '/pina.PNG' 
        },
        { 
          name: 'Negroni', 
          price: '270 грн'
        },
        { 
          name: 'Margarita', 
          price: '270 грн'
        },
      ]
    },
    {
      title: 'ШОТИ',
      items: [
        { name: 'б - 52', description: 'кавовий лікер, baileys, triple sec', price: '210 грн' },
        { name: 'electrolit', description: 'самбука, Jägermeister', price: '195 грн' },
        { name: 'б - 53', description: 'кавовий лікер, baileys, абсент', price: '210 грн' },
        { name: 'б - 56', description: 'кавовий лікер, baileys, Jägermeister', price: '210 грн' },
        { name: 'дядя ваня по - херсонськи', description: 'рожевий джин, лимонний фреш, гренадин', price: '210 грн', image: '/dada-vana.PNG'},
        { name: 'зелений мексиканець', description: 'pisang, текіла, лимонний фреш', price: '210 грн' },
        { name: 'постріл у голову', description: 'baileys, віскі', price: '210 грн' },
        { name: 'хіросіма', description: 'baileys, самбука, абсент', price: '210 грн' },
      ]
    },
    {
      title: 'LONG DRINKS',
      items: [
        { name: 'long island', description: 'ром, текіла, джин, горілка, triple sec, кола', price: '250 грн', image: '/longisland.PNG'},
        { name: 'tropical bibi', description: 'ром, pisang, маракуя, персик', price: '220 грн', image: '/bibi.PNG'},
        { name: 'схована загроза', description: 'текіла, кокосовий лікер, ананас', price: '240 грн', image: '/skritaya.PNG'},
        { name: 'fruit island', description: 'ром, текіла, джин, горілка, маракуя', price: '250 грн', image: '/fruitisland.PNG'},
        { name: 'огірковий джин-тонік', description: 'джин, тонік, лайм, огірок', price: '200 грн' },
      ]
    },
    {
      title: 'SOUR',
      items: [
        { name: 'clover club', description: 'джим, малина, лайм', price: '220 грн', image: '/clover.PNG'},
        { name: 'whiskey sour', description: 'бурбон, лайм, цукровий сироп', price: '220 грн', image: '/wiski.PNG'},
        { name: 'noir sour', description: 'рожевий джин, pisang, малина, ананас', price: '240 грн', image: '/clover.PNG'},
        { name: 'new york sour', description: 'віскі, мед, червоне вино', price: '250 грн', image: '/newyork.PNG'},
        { name: 'passion sour', description: 'віскі, маракуя, лимон', price: '230 грн', image: '/passion.PNG'},
        { name: 'cherry sour', description: 'віскі, вишня, лимон', price: '230 грн', image: '/cherry.PNG'},
        { name: 'aperol sour', description: 'aperol, джин, лимон', price: '220 грн'},
        { name: 'peach sour', description: 'джин, персик, triple sec', price: '220 грн'},
        { name: 'porn star martini', description: 'ванільна горілка, маракуя, prosecco', price: '280 грн', image: '/porn.PNG'},
      ]
    },
    {
      title: 'SPRITZ & CLASSICS',
      items: [
        { name: 'aperol spritz', description: 'aperol, prosecco, содова', price: '200 грн', image: '/aperol.PNG'},
        { name: 'aperol spritz bunny', description: 'aperol, prosecco, морквяний фреш', price: '210 грн'},
        { name: 'hugo', description: 'prosecco, бузина, лайм, м’ята', price: '210 грн', image: '/hugo.PNG'},
        { name: 'bellini', description: 'prosecco, персикове пюре', price: '210 грн', image: '/bellini.jpg'},
      ]
    },
    {
      title: 'БЕЗАЛКОГОЛЬНІ КОКТЕЙЛІ',
      items: [
        { name: 'мохіто б/а', price: '125 грн', image: '/mohito.PNG' },
        { name: 'апероль б/а', price: '130 грн', image: '/aperol.PNG' },
        { name: 'hugo б/а', price: '130 грн', image: '/hugo.PNG' },
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
        { name: 'класичний лимонад', description: 'лимон, м’ята', price: '120 грн', image: '/clasic.PNG'},
        { name: 'полуничний лимонад', description: 'полуниця, лимон, м’ята', price: '130 грн', image: '/malin-cludnika.PNG' },
        { name: 'полуничний - базиліковий лимонад', description: 'полуниця, лимон, базилік', price: '135 грн' },
        { name: 'малиновий лимонад', description: 'малина, лимон, м’ята', price: '130 грн', image: '/malin-cludnika.PNG' },
        { name: 'тропічний лимонад', description: 'манго, маракуя, лимон', price: '120 грн', image: '/tropic.PNG' },
        { name: 'ягідний лимонад', description: 'полуниця, малина, лимон', price: '120 грн' },
        { name: 'ананасово - базиліковий лимонад', description: 'ананас, базилік, кокос', price: '135 грн', image: '/ananas-basil.PNG'},
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
