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
        'nav.transport': 'Krovinių pervežimas',
        'nav.catalog': 'Katalogas',
        'nav.gallery': 'Galerija',
        'nav.promotions': 'Akcijos',
        'nav.contacts': 'Kontaktai',
        'nav.cooperation': 'Bendradarbiavimas',

        // Hero
        'hero.title': 'Profesionalus autoservisas ir padangų centras Vilniuje',
        'hero.subtitle': 'Nuo 1996 metų teikiame aukščiausios kokybės automobilių aptarnavimo, padangų prekybos ir krovinių pervežimo paslaugas. Patikima patirtis – patikimas rezultatas.',
        'hero.cta.contact': 'Susisiekite dabar',
        'hero.cta.services': 'Mūsų paslaugos',
        'hero.stat.years': 'metų patirties',
        'hero.stat.clients': 'patenkintų klientų',
        'hero.stat.quality': 'kokybės garantija',

        // About
        'about.title': 'Apie mus',
        'about.subtitle': 'Patikimas partneris automobilių priežiūros srityje',
        'about.text1': 'UAB „Europadangos" – tai patikimas partneris automobilių priežiūros srityje, veikiantis nuo 1996 metų. Per beveik tris dešimtmečius sukaupėme išskirtinę patirtį padangų prekybos, montavimo ir visapusiško transporto priemonių aptarnavimo srityse.',
        'about.text2': 'Mūsų bendrovė nuolat investuoja į moderniausią įrangą ir kvalifikuotų specialistų komandą. Ieškome naujausių sprendimų automobilių diagnostikos, aptarnavimo ir remonto srityse, kad galėtume pasiūlyti klientams aukščiausio lygio paslaugas.',
        'about.text3': 'Šiuo metu įmonė plečia savo veiklą, didina ir modernizuoja savo autoparką, platina pervežimų geografiją.',
        'about.fact1': 'Daugiau nei 28 metų patirtis',
        'about.fact2': 'Krovinių vežimo licencija (EBKR)',
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
        'service.mounting.short': 'Padangų montavimas, balansavimas!',
        'service.mounting.desc': 'Profesionalus vasarinių, žieminių ir universalių padangų montavimas bei balansavimas lengviesiams automobiliams, mikroautobusams ir krovininiam transportui. Naudojame šiuolaikišką įrangą tiksliam balansavimui.',
        'service.mounting.features': 'Greitas aptarnavimas|Tikslus balansavimas|Visos padangų rūšys|Krovininis transportas',

        // Service: Alignment
        'service.alignment.title': 'Ratų suvedimas',
        'service.alignment.short': 'Kokybiškas aptarnavimas ir visada laiku!',
        'service.alignment.desc': 'Kompiuterinis 3D ratų suvedimas užtikrina optimalų padangų susidėvėjimą, stabilų vairavimą ir ekonomišką kuro sąnaudą. Naudojame pažangią diagnostikos įrangą tiksliam matavimui.',
        'service.alignment.features': '3D diagnostika|Tikslus matavimas|Optimali geometrija|Mažesnės išlaidos',

        // Service: Suspension
        'service.suspension.title': 'Važiuoklės remontas',
        'service.suspension.short': 'Mes atliekame įvairių markių lengvųjų automobilių važiuoklės patikrinimą.',
        'service.suspension.desc': 'Pilna važiuoklės diagnostika ir remontas: amortizatoriai, svirtelės, ašys, guoliai ir kiti komponentai. Dirbame su visų markių lengvaisiais automobiliais ir užtikriname saugų bei komfortišką važiavimą.',
        'service.suspension.features': 'Pilna diagnostika|Visų markių auto|Amortizatoriai|Svirtelės ir ašys',

        // Service: Diagnostics
        'service.diagnostics.title': 'Kompiuterinė diagnostika',
        'service.diagnostics.short': 'Mūsų autoservisas teikia auto diagnostikos paslaugas su naujausia šiuolaikine įranga.',
        'service.diagnostics.desc': 'Šiuolaikinė kompiuterinė diagnostika leidžia tiksliai nustatyti gedimus ir sutaupyti laiką bei pinigus. Diagnostuojame visų markių automobilius, naudodami naujausią diagnostikos įrangą.',
        'service.diagnostics.features': 'Naujausia įranga|Visos markės|Tikslus rezultatas|Greita diagnostika',

        // Service: AC
        'service.ac.title': 'Kondicionieriai',
        'service.ac.short': 'Greitai ir kokybiškai pildome kondicionierius!',
        'service.ac.desc': 'Automobilio kondicionieriaus pildymas, diagnostika ir remontas. Pasiruoškite vasaros sezonui su pilnai veikiančia klimato sistema. Naudojame tik kokybiškus šaldiklius ir atliekame nuotėkio patikrinimą.',
        'service.ac.features': 'Greitas pildymas|Nuotėkio patikra|Kokybiškas šaldiklis|Pilna diagnostika',

        // Service: Welding
        'service.welding.title': 'Suvirinimas',
        'service.welding.short': 'Profesionalūs suvirinimo darbai.',
        'service.welding.desc': 'Profesionalūs suvirinimo darbai – nuo smulkių taisymų iki sudėtingų konstrukcijų. Dirbame su įvairiais metalais ir atliekame kėbulo bei važiuoklės suvirinimo darbus.',
        'service.welding.features': 'Kėbulo darbai|Važiuoklės suvirinimas|Įvairūs metalai|Sudėtingos konstrukcijos',

        // Service: Trucks
        'service.trucks.title': 'Krovininių mašinų remontas',
        'service.trucks.short': 'Krovininių mašinų ir mikroautobusų remontas.',
        'service.trucks.desc': 'Specializuotas krovininių mašinų ir mikroautobusų aptarnavimas. Turime patirtį ir įrangą didelių transporto priemonių remontui, įskaitant važiuoklės, stabdžių ir variklio darbus.',
        'service.trucks.features': 'Sunkvežimiai|Mikroautobusai|Specializuota įranga|Pilnas aptarnavimas',

        // Service: Fuel System
        'service.fuel.title': 'Kuro sistemos remontas',
        'service.fuel.short': 'Kuro remonto sistemos remontas ir techninis aptarnavimas!',
        'service.fuel.desc': 'Specializuotas kuro sistemos aptarnavimas: purkštukai, kuro siurbliai, filtrai. Užtikriname optimalų variklio darbą ir ekonomišką eksploataciją. Dirbame su dyzelinėmis ir benzininėmis sistemomis.',
        'service.fuel.features': 'Purkštukai|Kuro siurbliai|Filtrai|Dyzelis ir benzinas',

        // Cargo Transport
        'transport.title': 'Krovinių pervežimas',
        'transport.subtitle': 'Profesionalios logistikos paslaugos visoje Europoje',
        'transport.intro': 'UAB «VEGESTA» – stipri kvalifikuota komanda. Krovinius pervežame nuo 1996 metų, daugiametė kokybiškų darbų patirtis. Mūsų įmonė turi savo nuosavą autoparką.',
        'transport.feature1': 'Pilnai aptarnaujame krovinių srautus ES kryptimis (Lenkija, Estija, Latvija, Čekija, Slovakija)',
        'transport.feature2': 'Ilgalaikės sutartys su didžiausiais europietiškais gamintojais',
        'transport.feature3': 'EURO 3 ir EURO 5 standartų Mercedes automobiliai, tentas 82-92 M³, 24 T',
        'transport.feature4': 'Garantija krovinio saugumui – aukšti reikalavimai dirbant su brangiais kroviniais',
        'transport.feature5': 'Greitas reagavimas ir prisitaikymas prie klientų poreikių',
        'transport.feature6': 'GPS navigatoriai ir signalizacija visuose automobiliuose',
        'transport.cta': 'Užsakyti pervežimą',

        // Catalog
        'catalog.title': 'Padangų katalogas',
        'catalog.subtitle': 'Platus vasarinių, žieminių ir universalių padangų pasirinkimas',
        'catalog.summer.title': 'Vasarinės padangos',
        'catalog.summer.desc': 'Optimalios šiltojo sezono sąlygoms. Puikus sukibimas su sausa ir šlapia danga, mažesnis triukšmas ir ekonomiška eksploatacija.',
        'catalog.winter.title': 'Žieminės padangos',
        'catalog.winter.desc': 'Skirtos šalčiui, sniegui ir ledui. Saugus vairavimas ekstremaliomis žiemos sąlygomis su specialia gumos mišinio sudėtimi.',
        'catalog.allseason.title': 'Universalios padangos',
        'catalog.allseason.desc': 'Visų sezonų sprendimas. Tinka tiems, kas važinėja nedideliais atstumais mieste ir nori sutaupyti.',

        // Gallery
        'gallery.title': 'Galerija',
        'gallery.subtitle': 'Mūsų autoserviso aplinka ir darbai',
        'gallery.album': 'Mūsų autoservisas',

        // Promotions
        'promotions.title': 'Akcijos',
        'promotions.subtitle': 'Specialūs pasiūlymai mūsų klientams',
        'promo.storage.title': 'Nemokamas padangų saugojimas',
        'promo.storage.desc': 'Nuolatiniams klientams siūlome nemokamą sezoninių padangų saugojimą saugiose, tinkamai įrengtose patalpose. Sutaupykite vietos ir laiko!',
        'promo.winter.title': 'Žieminės padangos akcija',
        'promo.winter.desc': 'Žieminės, universalios padangos iš Ispanijos ir Vokietijos. Prekiaujame naujomis, restauruotomis ir naudotomis padangomis geriausiais įkainiais.',
        'promo.business.title': 'Verslo klientams',
        'promo.business.desc': 'Specialios sąlygos įmonėms ir autoparko valdytojams. Ilgalaikio bendradarbiavimo nuolaidos ir prioritetinis aptarnavimas.',
        'tag.promotions': 'AKCIJOS',
        'tag.cooperation': 'BENDRADARBIAVIMAS',

        // Cooperation
        'cooperation.title': 'Bendradarbiavimas',
        'cooperation.subtitle': 'Partnerystės galimybės verslui',
        'cooperation.text': 'Kviečiame verslo klientus bendradarbiauti autoserviso aptarnavime. Siūlome specialias sąlygas įmonėms ir autoparko valdytojams.',

        // Why Us
        'whyus.title': 'Kodėl klientai renkasi mus',
        'whyus.subtitle': 'Patikimumas, kokybė ir profesionalumas',
        'whyus.experience.title': 'Virš 28 metų patirties',
        'whyus.experience.desc': 'Veikiame nuo 1996 m. Ilgametė patirtis garantuoja profesionalumą ir kokybę kiekviename žingsnyje.',
        'whyus.equipment.title': 'Šiuolaikiška įranga',
        'whyus.equipment.desc': 'Naudojame pažangią diagnostikos ir remonto įrangą. Tikslumas ir efektyvumas – mūsų prioritetai.',
        'whyus.team.title': 'Kvalifikuota komanda',
        'whyus.team.desc': 'Mūsų specialistai nuolat tobulina savo įgūdžius ir seka naujausias automobilių technologijas.',
        'whyus.trucks.title': 'Krovininis transportas',
        'whyus.trucks.desc': 'Aptarnaujame ne tik lengvuosius automobilius, bet ir mikroautobusus bei krovininį transportą.',
        'whyus.storage.title': 'Nemokamas saugojimas',
        'whyus.storage.desc': 'Nuolatiniams klientams – nemokamas sezoninių padangų saugojimas saugiose patalpose.',
        'whyus.location.title': 'Patogi lokacija',
        'whyus.location.desc': 'Esame Vilniuje, Kirtimų g. 59C – lengvai pasiekiama vieta su patogia prieiga.',

        // Testimonials
        'testimonials.title': 'Ką sako mūsų klientai',
        'testimonials.subtitle': 'Atsiliepimai ir rekomendacijos',
        'testimonials.1.text': 'Naudojuosi Europadangos paslaugomis jau keletą metų. Visada profesionalus aptarnavimas, greitas darbas ir sąžiningos kainos. Rekomenduoju visiems, kas ieško patikimo autoserviso Vilniuje.',
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
        'footer.company': 'UAB „Vegesta" | Įmonės kodas: 123639588',

        // Section tags
        'tag.services': 'PASLAUGOS',
        'tag.about': 'APIE MUS',
        'tag.transport': 'KROVINIŲ PERVEŽIMAS',
        'tag.catalog': 'PADANGŲ KATALOGAS',
        'tag.whyus': 'KODĖL MES',
        'tag.testimonials': 'ATSILIEPIMAI',
        'tag.contact': 'KONTAKTAI',
        'tag.gallery': 'GALERIJA',
    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.about': 'О нас',
        'nav.services': 'Услуги',
        'nav.transport': 'Грузоперевозки',
        'nav.catalog': 'Каталог',
        'nav.gallery': 'Галерея',
        'nav.promotions': 'Акции',
        'nav.contacts': 'Контакты',
        'nav.cooperation': 'Сотрудничество',

        // Hero
        'hero.title': 'Профессиональный автосервис и шинный центр в Вильнюсе',
        'hero.subtitle': 'С 1996 года мы предоставляем услуги высочайшего качества по обслуживанию автомобилей, продаже шин и грузоперевозкам. Проверенный опыт – надёжный результат.',
        'hero.cta.contact': 'Свяжитесь с нами',
        'hero.cta.services': 'Наши услуги',
        'hero.stat.years': 'лет опыта',
        'hero.stat.clients': 'довольных клиентов',
        'hero.stat.quality': 'гарантия качества',

        // About
        'about.title': 'О компании',
        'about.subtitle': 'Надёжный партнёр в сфере обслуживания автомобилей',
        'about.text1': 'UAB «Europadangos» – это надёжный партнёр в сфере обслуживания автомобилей, работающий с 1996 года. За почти три десятилетия мы накопили уникальный опыт в области продажи шин, их монтажа и комплексного обслуживания транспортных средств.',
        'about.text2': 'Наша компания постоянно инвестирует в современнейшее оборудование и команду квалифицированных специалистов. Мы ищем новейшие решения в области диагностики, обслуживания и ремонта автомобилей, чтобы предложить клиентам услуги высочайшего уровня.',
        'about.text3': 'В настоящее время компания расширяет свою деятельность, увеличивает и модернизирует свой автопарк, расширяет географию перевозок.',
        'about.fact1': 'Более 28 лет опыта',
        'about.fact2': 'Лицензия на грузоперевозки (EBKR)',
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

        // Service: Alignment
        'service.alignment.title': 'Сход-развал',
        'service.alignment.short': 'Качественное обслуживание и всегда вовремя!',
        'service.alignment.desc': 'Компьютерная 3D регулировка углов установки колёс обеспечивает оптимальный износ шин, стабильное управление и экономичный расход топлива. Используем передовое диагностическое оборудование.',
        'service.alignment.features': '3D диагностика|Точные измерения|Оптимальная геометрия|Экономия средств',

        // Service: Suspension
        'service.suspension.title': 'Ремонт подвески',
        'service.suspension.short': 'Мы выполняем проверку подвески легковых автомобилей различных марок.',
        'service.suspension.desc': 'Полная диагностика и ремонт подвески: амортизаторы, рычаги, оси, подшипники и другие компоненты. Работаем с легковыми автомобилями всех марок и обеспечиваем безопасную и комфортную езду.',
        'service.suspension.features': 'Полная диагностика|Все марки авто|Амортизаторы|Рычаги и оси',

        // Service: Diagnostics
        'service.diagnostics.title': 'Компьютерная диагностика',
        'service.diagnostics.short': 'Наш автосервис оказывает услуги диагностики с новейшим современным оборудованием.',
        'service.diagnostics.desc': 'Современная компьютерная диагностика позволяет точно определить неисправности и сэкономить время и деньги. Диагностируем автомобили всех марок, используя новейшее диагностическое оборудование.',
        'service.diagnostics.features': 'Новейшее оборудование|Все марки|Точный результат|Быстрая диагностика',

        // Service: AC
        'service.ac.title': 'Кондиционеры',
        'service.ac.short': 'Быстро и качественно заправляем кондиционеры!',
        'service.ac.desc': 'Заправка, диагностика и ремонт автомобильного кондиционера. Подготовьтесь к летнему сезону с полностью работающей климатической системой. Используем только качественные хладагенты и проверяем на утечки.',
        'service.ac.features': 'Быстрая заправка|Проверка утечек|Качественный хладагент|Полная диагностика',

        // Service: Welding
        'service.welding.title': 'Сварка',
        'service.welding.short': 'Профессиональные сварочные работы.',
        'service.welding.desc': 'Профессиональные сварочные работы – от мелкого ремонта до сложных конструкций. Работаем с различными металлами и выполняем сварочные работы кузова и подвески.',
        'service.welding.features': 'Работы с кузовом|Сварка подвески|Различные металлы|Сложные конструкции',

        // Service: Trucks
        'service.trucks.title': 'Ремонт грузовых машин',
        'service.trucks.short': 'Ремонт грузовых машин и микроавтобусов.',
        'service.trucks.desc': 'Специализированное обслуживание грузовых машин и микроавтобусов. У нас есть опыт и оборудование для ремонта крупных транспортных средств, включая работы с подвеской, тормозами и двигателем.',
        'service.trucks.features': 'Грузовики|Микроавтобусы|Специализированное оборудование|Полное обслуживание',

        // Service: Fuel System
        'service.fuel.title': 'Ремонт топливной системы',
        'service.fuel.short': 'Ремонт и техническое обслуживание топливной системы!',
        'service.fuel.desc': 'Специализированное обслуживание топливной системы: форсунки, топливные насосы, фильтры. Обеспечиваем оптимальную работу двигателя и экономичную эксплуатацию. Работаем с дизельными и бензиновыми системами.',
        'service.fuel.features': 'Форсунки|Топливные насосы|Фильтры|Дизель и бензин',

        // Cargo Transport
        'transport.title': 'Грузоперевозки',
        'transport.subtitle': 'Профессиональные логистические услуги по всей Европе',
        'transport.intro': 'UAB «VEGESTA» – сильная квалифицированная команда. Перевозим грузы с 1996 года, многолетний опыт качественной работы. Наша компания имеет собственный автопарк.',
        'transport.feature1': 'Полное обслуживание грузопотоков по направлениям ЕС (Польша, Эстония, Латвия, Чехия, Словакия)',
        'transport.feature2': 'Долгосрочные контракты с крупнейшими европейскими производителями',
        'transport.feature3': 'Автомобили Mercedes стандартов EURO 3 и EURO 5, тент 82-92 м³, 24 т',
        'transport.feature4': 'Гарантия сохранности груза – высокие требования при работе с ценными грузами',
        'transport.feature5': 'Быстрое реагирование и адаптация к потребностям клиентов',
        'transport.feature6': 'GPS-навигаторы и сигнализация во всех автомобилях',
        'transport.cta': 'Заказать перевозку',

        // Catalog
        'catalog.title': 'Каталог шин',
        'catalog.subtitle': 'Широкий выбор летних, зимних и всесезонных шин',
        'catalog.summer.title': 'Летние шины',
        'catalog.summer.desc': 'Оптимальны для тёплого сезона. Отличное сцепление с сухим и мокрым покрытием, низкий уровень шума и экономичная эксплуатация.',
        'catalog.winter.title': 'Зимние шины',
        'catalog.winter.desc': 'Предназначены для холода, снега и льда. Безопасное вождение в экстремальных зимних условиях благодаря специальному составу резиновой смеси.',
        'catalog.allseason.title': 'Всесезонные шины',
        'catalog.allseason.desc': 'Решение на все сезоны. Подходят для тех, кто ездит на небольшие расстояния в городе и хочет сэкономить.',

        // Gallery
        'gallery.title': 'Галерея',
        'gallery.subtitle': 'Наш автосервис и наша работа',
        'gallery.album': 'Наш автосервис',

        // Promotions
        'promotions.title': 'Акции',
        'promotions.subtitle': 'Специальные предложения для наших клиентов',
        'promo.storage.title': 'Бесплатное хранение шин',
        'promo.storage.desc': 'Постоянным клиентам предлагаем бесплатное сезонное хранение шин в безопасных, правильно оборудованных помещениях. Экономьте место и время!',
        'promo.winter.title': 'Акция на зимние шины',
        'promo.winter.desc': 'Зимние, всесезонные шины из Испании и Германии. Торгуем новыми, восстановленными и б/у шинами по лучшим ценам.',
        'promo.business.title': 'Для бизнес-клиентов',
        'promo.business.desc': 'Специальные условия для компаний и владельцев автопарков. Скидки на долгосрочное сотрудничество и приоритетное обслуживание.',
        'tag.promotions': 'АКЦИИ',
        'tag.cooperation': 'СОТРУДНИЧЕСТВО',

        // Cooperation
        'cooperation.title': 'Сотрудничество',
        'cooperation.subtitle': 'Партнёрские возможности для бизнеса',
        'cooperation.text': 'Приглашаем бизнес-клиентов к сотрудничеству в сфере автосервисного обслуживания. Предлагаем специальные условия для компаний и владельцев автопарков.',

        // Why Us
        'whyus.title': 'Почему выбирают нас',
        'whyus.subtitle': 'Надёжность, качество и профессионализм',
        'whyus.experience.title': 'Более 28 лет опыта',
        'whyus.experience.desc': 'Работаем с 1996 года. Многолетний опыт гарантирует профессионализм и качество на каждом этапе.',
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
        'testimonials.1.text': 'Пользуюсь услугами Europadangos уже несколько лет. Всегда профессиональное обслуживание, быстрая работа и честные цены. Рекомендую всем, кто ищет надёжный автосервис в Вильнюсе.',
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
        'footer.company': 'UAB «Vegesta» | Код предприятия: 123639588',

        // Section tags
        'tag.services': 'УСЛУГИ',
        'tag.about': 'О НАС',
        'tag.transport': 'ГРУЗОПЕРЕВОЗКИ',
        'tag.catalog': 'КАТАЛОГ ШИН',
        'tag.whyus': 'ПОЧЕМУ МЫ',
        'tag.testimonials': 'ОТЗЫВЫ',
        'tag.contact': 'КОНТАКТЫ',
        'tag.gallery': 'ГАЛЕРЕЯ',
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
        image: '/tire_mounting_1769891435815.png',
        titleKey: 'service.mounting.title',
        shortKey: 'service.mounting.short',
        descKey: 'service.mounting.desc',
        featuresKey: 'service.mounting.features',
    },
    {
        id: 'alignment',
        icon: '⚙️',
        image: '/wheel_alignment_1769891452236.png',
        titleKey: 'service.alignment.title',
        shortKey: 'service.alignment.short',
        descKey: 'service.alignment.desc',
        featuresKey: 'service.alignment.features',
    },
    {
        id: 'suspension',
        icon: '🔧',
        image: '/suspension_repair_1769891464961.png',
        titleKey: 'service.suspension.title',
        shortKey: 'service.suspension.short',
        descKey: 'service.suspension.desc',
        featuresKey: 'service.suspension.features',
    },
    {
        id: 'diagnostics',
        icon: '💻',
        image: '/computer_diagnostics_1769891478282.png',
        titleKey: 'service.diagnostics.title',
        shortKey: 'service.diagnostics.short',
        descKey: 'service.diagnostics.desc',
        featuresKey: 'service.diagnostics.features',
    },
    {
        id: 'ac',
        icon: '❄️',
        image: '/ac_service_1769891493068.png',
        titleKey: 'service.ac.title',
        shortKey: 'service.ac.short',
        descKey: 'service.ac.desc',
        featuresKey: 'service.ac.features',
    },
    {
        id: 'welding',
        icon: '🔥',
        image: '/welding_service_1769891507065.png',
        titleKey: 'service.welding.title',
        shortKey: 'service.welding.short',
        descKey: 'service.welding.desc',
        featuresKey: 'service.welding.features',
    },
    {
        id: 'trucks',
        icon: '🚚',
        image: '/truck_repair_1769891521750.png',
        titleKey: 'service.trucks.title',
        shortKey: 'service.trucks.short',
        descKey: 'service.trucks.desc',
        featuresKey: 'service.trucks.features',
    },
    {
        id: 'fuel',
        icon: '⛽',
        image: '/fuel_system_1769891534805.png',
        titleKey: 'service.fuel.title',
        shortKey: 'service.fuel.short',
        descKey: 'service.fuel.desc',
        featuresKey: 'service.fuel.features',
    },
];
