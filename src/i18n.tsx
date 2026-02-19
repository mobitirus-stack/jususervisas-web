import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'lt' | 'ru';

interface I18nContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    lt: {
        // Navigation
        'nav.home': 'Pradžia',
        'nav.about': 'Apie mus',
        'nav.services': 'Paslaugos',
        'nav.contacts': 'Kontaktai',

        // Hero
        'hero.title': 'Profesionalus autoservisas ir padangų centras Vilniuje',
        'hero.subtitle': 'Profesionalus padangų montavimas, ratlankių lyginimas ir kondicionierių pildymas Vilniuje. Daugiau nei 8 metų patirtis – patikimas rezultatas.',
        'hero.cta.contact': 'Susisiekite dabar',
        'hero.cta.services': 'Mūsų paslaugos',
        'hero.stat.years': 'metų patirties',
        'hero.stat.clients': 'patenkintų klientų',
        'hero.stat.quality': 'kokybės garantija',

        // About
        'about.title': 'Apie mus',
        'about.subtitle': 'Patikimas partneris automobilių priežiūros srityje',
        'about.text1': 'Okra1 – tai patikimas partneris automobilių priežiūros srityje. Sukaupėme daugiau nei 8 metų patirtį padangų montavimo, ratlankių lyginimo ir kondicionierių pildymo srityse.',
        'about.text2': 'Naudojame moderniausią įrangą ir dirbame su kvalifikuotų specialistų komanda. Mūsų tikslas – suteikti aukščiausios kokybės paslaugas ir užtikrinti jūsų saugumą kelyje.',
        'about.fact1': 'Daugiau nei 8 metų patirtis',
        'about.fact2': 'Kvalifikuoti specialistai',
        'about.fact3': 'Profesionali komanda',
        'about.fact4': 'Šiuolaikiška įranga',
        'about.fact5': 'Nuosavas autoparkas',
        'about.fact6': 'GPS stebėjimo sistema',

        // Services
        'services.title': 'Mūsų paslaugos',
        'services.subtitle': 'Visapusiškas automobilių aptarnavimas vienoje vietoje',
        'services.intro': 'Siūlome platų paslaugų spektrą – nuo padangų montavimo iki sudėtingo važiuoklės remonto ir krovinių pervežimo visoje Europoje.',
        'services.viewAll': 'Visos paslaugos',
        'services.learnMore': 'Sužinoti daugiau',
        'services.backToServices': '← Grįžti į paslaugas',

        // Service: Mounting
        'service.mounting.title': 'Padangų montavimas',
        'service.mounting.short': 'Greitas Padangų montavimas, keitimas | Ratų balansavimas',
        'service.mounting.desc': 'Atliekame profesionalų ratų montavimą ir padangų montavimą Vilniuje jau daugiau nei 8 metus. Per šį laiką aptarnavome šimtus klientų ir sukaupėme patirtį, leidžiančią darbus atlikti greitai, tiksliai ir saugiai.',
        'service.mounting.features': 'Tikslus montavimas|Preciziškas balansavimas|Minimali rizika|Ilgesnis tarnavimas',


        // Service: Rim Straightening
        'service.rim_straightening.title': 'Ratlankių lyginimas',
        'service.rim_straightening.short': 'Ratlankių lyginimas Vilniuje – JūsųServisas.lt',
        'service.rim_straightening.desc': 'Kartais netikėtas susidūrimas su duobe ar kliūtimi kelyje gali sugadinti Jūsų automobilio ratlankį. Nesutvarkytas ratlankis ne tik sumažina komfortą, bet ir kelia pavojų Jūsų saugumui bei gali pakenkti pakabai.',
        'service.rim_straightening.features': 'Formos atstatymas|Moderni įranga|Patyrę meistrai|Greitas aptarnavimas',

        // Service: Tire Repair
        'service.tire_repair.title': 'Padangų remontas',
        'service.tire_repair.short': 'Padangų ir ratų remontas Vilniuje – JūsųServisas.lt',
        'service.tire_repair.desc': 'Padangų remontas, montavimas, ratų balansavimas ir vulkanizavimas Vilniuje. Profesionalūs meistrai, greitas aptarnavimas ir konkurencingos kainos.',
        'service.tire_repair.features': 'Padangų remontas|Ratų balansavimas|Vulkanizavimas|Hermetizavimas',

        // Service: AC
        'service.ac.title': 'Kondicionierių pildymas',
        'service.ac.short': 'Greitai ir kokybiškai pildome kondicionierius!',
        'service.ac.desc': 'Automobilio kondicionieriaus pildymas, diagnostika ir remontas. Pasiruoškite vasaros sezonui su pilnai veikiančia klimato sistema. Naudojame tik kokybiškus šaldiklius ir atliekame nuotėkio patikrinimą.',
        'service.ac.features': 'Greitas pildymas|Nuotėkio patikra|Kokybiškas šaldiklis|Pilna diagnostika',







        // Why Us
        'whyus.title': 'Kodėl klientai renkasi mus',
        'whyus.subtitle': 'Patikimumas, kokybė ir profesionalumas',
        'whyus.experience.title': 'Virš 8 metų patirties',
        'whyus.experience.desc': 'Ilgametė patirtis garantuoja profesionalumą ir kokybę kiekviename žingsnyje.',
        'whyus.equipment.title': 'Šiuolaikiška įranga',
        'whyus.equipment.desc': 'Naudojame pažangią diagnostikos ir remonto įrangą. Tikslumas ir efektyvumas – mūsų prioritetai.',
        'whyus.team.title': 'Kvalifikuota komanda',
        'whyus.team.desc': 'Mūsų specialistai nuolat tobulina savo įgūdžius ir seka naujausias automobilių technologijas.',
        'whyus.trucks.title': 'Krovininis transportas',
        'whyus.trucks.desc': 'Aptarnaujame ne tik lengvuosius automobilius, bet ir mikroautobusus bei krovininį transportą.',
        'whyus.storage.title': 'Nemokamas saugojimas',
        'whyus.storage.desc': 'Nuolatiniams klientams – nemokamas sezoninių padangų saugojimas saugiose patalpose.',
        'whyus.location.title': 'Patogi lokacija',
        'whyus.location.desc': 'Esame Vilniuje, Žirmūnų g. 54A – lengvai pasiekiama vieta su patogia prieiga.',

        // Testimonials
        'testimonials.title': 'Ką sako mūsų klientai',
        'testimonials.subtitle': 'Atsiliepimai ir rekomendacijos',
        'testimonials.1.text': 'Naudojuosi Okra1 paslaugomis jau keletą metų. Visada profesionalus aptarnavimas, greitas darbas ir sąžiningos kainos. Rekomenduoju visiems, kas ieško patikimo autoserviso Vilniuje.',
        'testimonials.1.author': 'Nuolatinis klientas',
        'testimonials.2.text': 'Atvežiau automobilį ratų suvedimui – viskas atlikta greitai ir kokybiškai. Malonūs darbuotojai, aiškiai paaiškino, ką reikia daryti. Tikrai grįšiu.',
        'testimonials.2.author': 'Patenkinta klientė',
        'testimonials.3.text': 'Puikus padangų pasirinkimas ir profesionalus montavimas. Ypač vertinu, kad siūlo nemokamą sezoninį saugojimą – labai patogu.',
        'testimonials.3.author': 'Įmonės klientas',

        // Contact
        'contact.title': 'Susisiekite su mumis',
        'contact.subtitle': 'Esame pasiruošę padėti',
        'contact.company': 'Įmonė',
        'contact.address': 'Adresas',
        'contact.phone': 'Telefonai',
        'contact.fax': 'Faksas',
        'contact.email': 'El. paštas',
        'contact.hours': 'Darbo laikas',
        'contact.weekdays': 'Pirmadienį – Penktadienį',
        'contact.saturday': 'Šeštadienį',
        'contact.sunday': 'Sekmadienį',
        'contact.closed': 'Nedirbame',
        'contact.cta.call': 'Skambinkite dabar',
        'contact.cta.email': 'Rašykite mums',
        'contact.cta.map': 'Raskite mus žemėlapyje',

        // Footer
        'footer.rights': 'Visos teisės saugomos.',
        'footer.company': 'Okra1',

        // Section tags
        'tag.services': 'PASLAUGOS',
        'tag.about': 'APIE MUS',
        'tag.whyus': 'KODĖL MES',
        'tag.testimonials': 'ATSILIEPIMAI',
        'tag.contact': 'KONTAKTAI',

    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.about': 'О нас',
        'nav.services': 'Услуги',
        'nav.contacts': 'Контакты',

        // Hero
        'hero.title': 'Профессиональный автосервис и шинный центр в Вильнюсе',
        'hero.subtitle': 'Профессиональный монтаж шин, правка дисков и заправка кондиционеров в Вильнюсе. Более 8 лет опыта – надежный результат.',
        'hero.cta.contact': 'Свяжитесь с нами',
        'hero.cta.services': 'Наши услуги',
        'hero.stat.years': 'лет опыта',
        'hero.stat.clients': 'довольных клиентов',
        'hero.stat.quality': 'гарантия качества',

        // About
        'about.title': 'О компании',
        'about.subtitle': 'Надёжный партнёр в сфере обслуживания автомобилей',
        'about.text1': 'Okra1 – это надёжный партнёр в сфере обслуживания автомобилей. Мы накопили более 8 лет опыта в области монтажа шин, правки дисков и заправки кондиционеров.',
        'about.text2': 'Мы используем современное оборудование и работаем с командой квалифицированных специалистов. Наша цель – предоставлять услуги высочайшего качества.',
        'about.fact1': 'Более 8 лет опыта',
        'about.fact2': 'Квалифицированные специалисты',
        'about.fact3': 'Профессиональная команда',
        'about.fact4': 'Современное оборудование',
        'about.fact5': 'Собственный автопарк',
        'about.fact6': 'Система GPS-слежения',

        // Services
        'services.title': 'Наши услуги',
        'services.subtitle': 'Комплексное обслуживание автомобилей в одном месте',
        'services.intro': 'Мы предлагаем широкий спектр услуг – от монтажа шин до сложного ремонта подвески и грузоперевозок по всей Европе.',
        'services.viewAll': 'Все услуги',
        'services.learnMore': 'Узнать больше',
        'services.backToServices': '← Назад к услугам',

        // Service: Mounting
        'service.mounting.title': 'Монтаж шин',
        'service.mounting.short': 'Монтаж и балансировка шин!',
        'service.mounting.desc': 'Профессиональный монтаж и балансировка летних, зимних и всесезонных шин для легковых автомобилей, микроавтобусов и грузового транспорта. Используем современное оборудование для точной балансировки.',
        'service.mounting.features': 'Быстрое обслуживание|Точная балансировка|Все типы шин|Грузовой транспорт',


        // Service: Rim Straightening
        'service.rim_straightening.title': 'Правка дисков',
        'service.rim_straightening.short': 'Правка алюминиевых и стальных дисков.',
        'service.rim_straightening.desc': 'Профессиональная правка дисков с использованием современного оборудования. Восстанавливаем геометрию диска, завариваем трещины.',
        'service.rim_straightening.features': 'Восстановление геометрии|Сварка|Покраска|Правка',

        // Service: Tire Repair
        'service.tire_repair.title': 'Ремонт шин',
        'service.tire_repair.short': 'Качественный ремонт шин.',
        'service.tire_repair.desc': 'Ремонтируем проколотые, порезанные шины. Клеим холодным и горячим способом.',
        'service.tire_repair.features': 'Горячая вулканизация|Холодная склейка|Монтаж|Балансировка',

        // Service: AC
        'service.ac.title': 'Кондиционеры',
        'service.ac.short': 'Быстро и качественно заправляем кондиционеры!',
        'service.ac.desc': 'Заправка, диагностика и ремонт автомобильного кондиционера. Подготовьтесь к летнему сезону с полностью работающей климатической системой. Используем только качественные хладагенты и проверяем на утечки.',
        'service.ac.features': 'Быстрая заправка|Проверка утечек|Качественный хладагент|Полная диагностика',







        // Why Us
        'whyus.title': 'Почему выбирают нас',
        'whyus.subtitle': 'Надёжность, качество и профессионализм',
        'whyus.experience.title': 'Более 8 лет опыта',
        'whyus.experience.desc': 'Многолетний опыт гарантирует профессионализм и качество на каждом этапе.',
        'whyus.equipment.title': 'Современное оборудование',
        'whyus.equipment.desc': 'Используем передовое диагностическое и ремонтное оборудование. Точность и эффективность – наши приоритеты.',
        'whyus.team.title': 'Квалифицированная команда',
        'whyus.team.desc': 'Наши специалисты постоянно совершенствуют свои навыки и следят за новейшими автомобильными технологиями.',
        'whyus.trucks.title': 'Грузовой транспорт',
        'whyus.trucks.desc': 'Обслуживаем не только легковые автомобили, но и микроавтобусы, а также грузовой транспорт.',
        'whyus.storage.title': 'Бесплатное хранение',
        'whyus.storage.desc': 'Постоянным клиентам – бесплатное сезонное хранение шин в безопасных помещениях.',
        'whyus.location.title': 'Удобное расположение',
        'whyus.location.desc': 'Мы находимся в Вильнюсе, ул. Киртиму 59C – легко доступное место с удобным подъездом.',

        // Testimonials
        'testimonials.title': 'Отзывы клиентов',
        'testimonials.subtitle': 'Рекомендации и отзывы',
        'testimonials.1.text': 'Пользуюсь услугами Okra1 уже несколько лет. Всегда профессиональное обслуживание, быстрая работа и честные цены. Рекомендую всем, кто ищет надёжный автосервис в Вильнюсе.',
        'testimonials.1.author': 'Постоянный клиент',
        'testimonials.2.text': 'Привёз автомобиль на сход-развал – всё сделали быстро и качественно. Приятные сотрудники, чётко объяснили, что нужно делать. Обязательно вернусь.',
        'testimonials.2.author': 'Довольная клиентка',
        'testimonials.3.text': 'Отличный выбор шин и профессиональный монтаж. Особенно ценю бесплатное сезонное хранение – очень удобно.',
        'testimonials.3.author': 'Корпоративный клиент',

        // Contact
        'contact.title': 'Свяжитесь с нами',
        'contact.subtitle': 'Мы готовы помочь',
        'contact.company': 'Компания',
        'contact.address': 'Адрес',
        'contact.phone': 'Телефоны',
        'contact.fax': 'Факс',
        'contact.email': 'Эл. почта',
        'contact.hours': 'Часы работы',
        'contact.weekdays': 'Понедельник – Пятница',
        'contact.saturday': 'Суббота',
        'contact.sunday': 'Воскресенье',
        'contact.closed': 'Выходной',
        'contact.cta.call': 'Позвоните сейчас',
        'contact.cta.email': 'Напишите нам',
        'contact.cta.map': 'Найдите нас на карте',

        // Footer
        'footer.rights': 'Все права защищены.',
        'footer.company': 'Okra1',

        // Section tags
        'tag.services': 'УСЛУГИ',
        'tag.about': 'О НАС',
        'tag.whyus': 'ПОЧЕМУ МЫ',
        'tag.testimonials': 'ОТЗЫВЫ',
        'tag.contact': 'КОНТАКТЫ',

    }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('lt');

    const t = (key: string): string => {
        return translations[language][key as keyof typeof translations['lt']] || key;
    };

    return (
        <I18nContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </I18nContext.Provider>
    );
}

export function useI18n() {
    const context = useContext(I18nContext);
    if (!context) {
        throw new Error('useI18n must be used within I18nProvider');
    }
    return context;
}

export const services = [
    {
        id: 'mounting',
        icon: '🛞',
        image: '/service_mounting_premium.png',
        titleKey: 'service.mounting.title',
        shortKey: 'service.mounting.short',
        descKey: 'service.mounting.desc',
        featuresKey: 'service.mounting.features',
    },
    {
        id: 'rim_straightening',
        icon: '⭕',
        image: '/service_rim_straightening_premium.png',
        titleKey: 'service.rim_straightening.title',
        shortKey: 'service.rim_straightening.short',
        descKey: 'service.rim_straightening.desc',
        featuresKey: 'service.rim_straightening.features',
    },
    {
        id: 'tire_repair',
        icon: '🩹',
        image: '/service_tire_repair_premium.png',
        titleKey: 'service.tire_repair.title',
        shortKey: 'service.tire_repair.short',
        descKey: 'service.tire_repair.desc',
        featuresKey: 'service.tire_repair.features',
    },
    {
        id: 'ac',
        icon: '❄️',
        image: '/service_ac_premium.png',
        titleKey: 'service.ac.title',
        shortKey: 'service.ac.short',
        descKey: 'service.ac.desc',
        featuresKey: 'service.ac.features',
    },
];
