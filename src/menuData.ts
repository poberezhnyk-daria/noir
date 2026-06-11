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
        { name: 'бенедикт з лососем', weight: '300 г', price: '325 грн' },
        { name: 'бенедикт з беконом', weight: '300 г', price: '265 грн' },
      ]
    },
    {
      title: 'Салати',
      items: [
        { name: 'цезар з куркою', weight: '320 г', price: '255 грн' },
        { name: 'цезар з креветками', weight: '320 г', price: '325 грн' },
        { name: 'цезар з лососем', weight: '320 г', price: '355 грн' },
        { name: 'салат з чері та буратою', weight: '300 г', price: '295 грн' },
        { name: 'салат з козячим сиром та ягодами', weight: '280 г', price: '295 грн' },
      ]
    },
    {
      title: 'БУРГЕРИ ТА РОЛИ',
      items: [
        { name: 'бургер тофу', weight: '380 г', price: '245 грн' },
        { name: 'бургер БІФ', weight: '450 г', price: '320 грн' },
        { name: 'бургер з куркою', weight: '420 г', price: '285 грн' },
        { name: 'рол з куркою', weight: '350 г', price: '245 грн' },
        { name: 'рол з яловичиною', weight: '350 г', price: '295 грн' },
        { name: 'веган рол', weight: '320 г', price: '220 грн' },
        { name: 'картопля фрі', weight: '200 г', price: '115 грн' },
        { name: 'картопля батат', weight: '200 г', price: '155 грн' },
        { name: 'смажені баклажани у світ чилі', weight: '250 г', price: '195 грн' },
        { name: 'курячі нагетси', weight: '220 г', price: '185 грн' },
        { name: 'кільця кальмара', weight: '220 г', price: '245 грн' },
      ]
    },
    {
      title: 'закуски',
      items: [
        { name: 'тартар з яловичини', weight: '180 г', price: '345 грн' },
        { name: 'тартар з тунця', weight: '180 г', price: '375 грн' },
        { name: 'брускета з тунцем у чилі - майо', weight: '180 г', price: '235 грн' },
        { name: 'брускета з буратою та базиліком', weight: '180 г', price: '215 грн' },
        { name: 'брускета лосось та свіжий огірок', weight: '180 г', price: '245 грн' },
        { name: 'брускета з хамоном та крем-сиром', weight: '180 г', price: '275 грн' },
        { name: 'тартар з лосося', weight: '180 г', price: '365 грн' },
      ]
    },
    {
      title: 'Основні страви',
      items: [
        { name: 'Стейк біф з томатом та соусом беарнез', weight: '350 г', price: '595 грн' },
        { name: 'філе лосося на грилі з пюре батату', weight: '350 г', price: '545 грн' },
        { name: 'курячий шашлик з томатами', weight: '350 г', price: '315 грн' },
        { name: 'яловичий шашлик з томатами', weight: '350 г', price: '395 грн' },
        { name: 'різотто з грибами, буратою та томатом', weight: '350 г', price: '325 грн' },
        { name: 'паста з гремолатою та буратою', weight: '350 г', price: '315 грн' },
        { name: 'паста з лососем та цукіні', weight: '350 г', price: '395 грн' },
        { name: 'паста з куркою та грибами', weight: '350 г', price: '285 грн' },
        { name: 'паста Карбонара', weight: '350 г', price: '295 грн' },
        { name: 'паста 4 сири', weight: '350 г', price: '315 грн' },
      ]
    },
    {
      title: 'нарізки та плато',
      items: [
        { name: 'італійська м’ясна нарізка', weight: '300 г', price: '495 грн' },
        { name: 'сирна дошка з інжирним джемом та трюфельним медом', weight: '350 г', price: '565 грн' },
        { name: 'пивна тарілка xxl', description: '(нагетси, грінки, кільца кальмара, ковбаски, сир косичка, фрі)', weight: '1100 г', price: '695 грн' },
        { name: 'пивна тарілка xl', description: '(фрі, батат фрі, цибулеві кільця, сир косичка)', weight: '750 г', price: '325 грн' },
      ]
    },
    {
      title: 'десерти',
      items: [
        { name: 'канолі з фісташковим кремом та малиною', weight: '150 г', price: '195 грн' },
        { name: 'Полуниця з маскарпоне', weight: '180 г', price: '175 грн' },
        { name: 'наполеон', weight: '180 г', price: '175 грн' },
      ]
    }
  ],
  'Бар': [
    {
      title: 'шоти',
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
      title: 'long drinks',
      items: [
        { name: 'long island', description: '(ром, текіла, джин, горілка, triple sec, кола)', price: '250 грн' },
        { name: 'tropical bibi', description: '(ром, pisang, маракуя, персик)', price: '220 грн' },
        { name: 'схована загроза', description: '(текіла, кокосовий лікер, ананас)', price: '240 грн' },
        { name: 'fruit island', description: '(ром, текіла, джин, горілка, маракуя)', price: '250 грн' },
        { name: 'огірковий джин-тонік', description: '(джин, тонік, лайм, огірок)', price: '200 грн' },
      ]
    },
    {
      title: 'sour',
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
      title: 'spritz & classics',
      items: [
        { name: 'aperol spritz', description: '(aperol, prosecco, содова)', price: '200 грн' },
        { name: 'aperol spritz bunny', description: '(aperol, prosecco, морквяний фреш)', price: '210 грн' },
        { name: 'hugo', description: '(prosecco, бузина, лайм, м’ята)', price: '210 грн' },
        { name: 'bellini', description: '(prosecco, персикове пюре)', price: '210 грн' },
      ]
    },
    {
      title: 'безалкогольні коктейлі',
      items: [
        { name: 'мохіто б/а', price: '125 грн' },
        { name: 'апероль б/а', price: '130 грн' },
        { name: 'hugo б/а', price: '130 грн' },
        { name: 'морквяний hugo б/а', price: '150 грн' },
      ]
    },
    {
      title: 'холодні напої',
      items: [
        { name: 'холодний чай з гренадином', price: '95 грн' },
        { name: 'холодний чай каркаде', price: '90 грн' },
        { name: 'холодний чай mona', description: '(бергамот, персик, базилік)', price: '115 грн' },
      ]
    },
    {
      title: 'лимонади',
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
      title: 'соки',
      items: [
        { name: 'сік granini мультифрукт', weight: '0,25л', price: '75 грн' },
        { name: 'сік granini яблучний', weight: '0,25л', price: '75 грн' },
        { name: 'сік granini томатний', weight: '0,25л', price: '75 грн' },
      ]
    }
  ],
  'Кальяни': [
    {
      title: 'Кальяни',
      items: [
        { name: 'Light', price: '350 грн' },
        { name: 'Premium', price: '450 грн' },
        { name: 'Hard', price: '500 грн' },
      ]
    },
    {
      title: 'Фруктові чаші',
      items: [
        { name: 'Апельсин', price: '+100 грн' },
        { name: 'Грейпфрут', price: '+150 грн' },
        { name: 'Ананас', price: '+250 грн' },
      ]
    },
    {
      title: 'Комплекти',
      items: [
        { name: 'Апельсинова чаша + фруктова колба', price: '+200 грн' },
        { name: 'Грейпфрутова чаша + фруктова колба', price: '+250 грн' },
        { name: 'Ананасова чаша + фруктова колба', price: '+400 грн' },
      ]
    }
  ]
};
