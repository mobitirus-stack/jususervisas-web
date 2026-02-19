import { useState, createContext, useContext } from 'react';
import type { ReactNode } from 'react';

type Language = 'lt';

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
        'hero.subtitle': 'Profesionalus padangų montavimas, ratlankių lyginimas ir kondicionierių pildymas Vilniuje. Daugiau nei 20 metų patirtis – patikimas rezultatas.',
        'hero.cta.contact': 'Susisiekite dabar',
        'hero.cta.services': 'Mūsų paslaugos',
        'hero.stat.years': 'metų patirties',
        'hero.stat.clients': 'patenkintų klientų',
        'hero.stat.quality': 'kokybės garantija',

        // About
        'about.title': 'Apie mus',
        'about.subtitle': 'Patikimas partneris automobilių priežiūros srityje',
        'about.text1': 'Okra1 – tai patikimas partneris automobilių priežiūros srityje. Sukaupėme daugiau nei 20 metų patirtį padangų montavimo, ratlankių lyginimo ir kondicionierių pildymo srityse.',
        'about.text2': 'Naudojame moderniausią įrangą ir dirbame su kvalifikuotų specialistų komanda. Mūsų tikslas – suteikti aukščiausios kokybės paslaugas ir užtikrinti jūsų saugumą kelyje.',
        'about.fact1': 'Daugiau nei 20 metų patirtis',
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
        'service.mounting.desc': 'Atliekame profesionalų ratų montavimą ir padangų montavimą Vilniuje jau daugiau nei 20 metų. Per šį laiką aptarnavome šimtus klientų ir sukaupėme patirtį, leidžiančią darbus atlikti greitai, tiksliai ir saugiai.',
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
        'whyus.experience.title': 'Virš 20 metų patirties',
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

    }
};

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>('lt');

    const t = (key: string): string => {
        return translations[language]?.[key as keyof typeof translations['lt']] || key;
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
