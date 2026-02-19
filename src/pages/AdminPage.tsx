import React, { useState, useEffect } from 'react';
import { useI18n, services as defaultServices } from '../i18n';
import './AdminPage.css';

interface Service {
    id: string;
    icon: string;
    image: string;
    titleKey: string;
    shortKey: string;
    descKey: string;
    featuresKey: string;
    isDynamic?: boolean;
    title?: string;
    short?: string;
}

export function AdminPage() {
    const { t } = useI18n();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState('');

    const [heroData, setHeroData] = useState({
        title: localStorage.getItem('hero_title') || t('hero.title'),
        subtitle: localStorage.getItem('hero_subtitle') || t('hero.subtitle'),
    });

    const [aboutData, setAboutData] = useState({
        title: localStorage.getItem('about_title') || t('about.title'),
        subtitle: localStorage.getItem('about_subtitle') || t('about.subtitle'),
        text1: localStorage.getItem('about_text1') || t('about.text1'),
        text2: localStorage.getItem('about_text2') || t('about.text2'),
    });

    const [services, setServices] = useState<Service[]>([]);
    const [newService, setNewService] = useState({
        title: '',
        short: '',
        image: '/service_placeholder.png',
        icon: '🔧'
    });

    useEffect(() => {
        const savedServices = localStorage.getItem('custom_services');
        if (savedServices) {
            setServices(JSON.parse(savedServices));
        } else {
            setServices(defaultServices);
        }
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin') {
            setIsLoggedIn(true);
        } else {
            alert('Neteisingas slaptažodis!');
        }
    };

    if (!isLoggedIn) {
        return (
            <div className="admin-login-page">
                <form className="login-card" onSubmit={handleLogin}>
                    <h2>Prisijungimas</h2>
                    <div className="form-group">
                        <label>Slaptažodis</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Įveskite slaptažodį"
                            autoFocus
                        />
                    </div>
                    <button type="submit" className="save-btn">Prisijungti</button>
                </form>
            </div>
        );
    }

    const saveHero = () => {
        localStorage.setItem('hero_title', heroData.title);
        localStorage.setItem('hero_subtitle', heroData.subtitle);
        alert('Hero sekcija išsaugota!');
    };

    const saveAbout = () => {
        localStorage.setItem('about_title', aboutData.title);
        localStorage.setItem('about_subtitle', aboutData.subtitle);
        localStorage.setItem('about_text1', aboutData.text1);
        localStorage.setItem('about_text2', aboutData.text2);
        alert('Apie mus sekcija išsaugota!');
    };

    const saveServices = (newServices: Service[]) => {
        setServices(newServices);
        localStorage.setItem('custom_services', JSON.stringify(newServices));
    };

    const handleDeleteService = (id: string) => {
        if (window.confirm('Ar tikrai norite ištrinti šią paslaugą?')) {
            const updated = services.filter(s => s.id !== id);
            saveServices(updated);
        }
    };


    const handleAddService = (e: React.FormEvent) => {
        e.preventDefault();
        const id = 'custom_' + Date.now();
        const serviceToAdd: Service = {
            id,
            icon: newService.icon,
            image: newService.image,
            titleKey: id + '_title',
            shortKey: id + '_short',
            descKey: id + '_desc',
            featuresKey: id + '_features',
            isDynamic: true,
            title: newService.title,
            short: newService.short
        };

        saveServices([...services, serviceToAdd]);
        setNewService({ title: '', short: '', image: '/service_placeholder.png', icon: '🔧' });
    };

    const resetDefaults = () => {
        if (window.confirm('Ar tikrai norite atstatyti visus pradinius nustatymus?')) {
            localStorage.clear();
            window.location.reload();
        }
    };

    return (
        <div className="admin-page page-transition">
            <div className="admin-hero">
                <div className="container">
                    <h1>Svetainės valdymas</h1>
                    <p>Redaguokite svetainės turinį realiu laiku (duomenys saugomi lokaliai naršyklėje).</p>
                    <button className="reset-btn" onClick={resetDefaults}>Atstatyti į pradinę būseną</button>
                </div>
            </div>

            <div className="admin-content container">
                {/* Hero Management */}
                <section className="admin-section">
                    <h2>Hero sekcija</h2>
                    <div className="form-group">
                        <label>Antraštė (Hero Title)</label>
                        <input
                            type="text"
                            value={heroData.title}
                            onChange={(e) => setHeroData({ ...heroData, title: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Paantraštė (Hero Subtitle)</label>
                        <textarea
                            value={heroData.subtitle}
                            onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                        />
                    </div>
                    <button className="save-btn" onClick={saveHero}>Išsaugoti Hero</button>
                </section>

                {/* About Management */}
                <section className="admin-section">
                    <h2>Apie mus sekcija</h2>
                    <div className="form-group">
                        <label>Pavadinimas</label>
                        <input
                            type="text"
                            value={aboutData.title}
                            onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Trumpas šūkis</label>
                        <input
                            type="text"
                            value={aboutData.subtitle}
                            onChange={(e) => setAboutData({ ...aboutData, subtitle: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tekstas 1</label>
                        <textarea
                            value={aboutData.text1}
                            onChange={(e) => setAboutData({ ...aboutData, text1: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>Tekstas 2</label>
                        <textarea
                            value={aboutData.text2}
                            onChange={(e) => setAboutData({ ...aboutData, text2: e.target.value })}
                        />
                    </div>
                    <button className="save-btn" onClick={saveAbout}>Išsaugoti Apie mus</button>
                </section>

                {/* Services Management */}
                <section className="admin-section">
                    <h2>Paslaugų valdymas</h2>

                    <div className="services-list-admin">
                        {services.map(service => (
                            <div key={service.id} className="service-item-admin">
                                <span>{service.icon} {service.title || t(service.titleKey)}</span>
                                <button className="delete-btn-small" onClick={() => handleDeleteService(service.id)}>Trinti</button>
                            </div>
                        ))}
                    </div>

                    <form className="add-service-form" onSubmit={handleAddService}>
                        <h3>Pridėti naują paslaugą</h3>
                        <div className="form-group">
                            <label>Pavadinimas</label>
                            <input
                                type="text"
                                required
                                value={newService.title}
                                onChange={(e) => setNewService({ ...newService, title: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trumpas aprašymas</label>
                            <input
                                type="text"
                                required
                                value={newService.short}
                                onChange={(e) => setNewService({ ...newService, short: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nuotraukos URL (pvz: /service_ac_premium.png)</label>
                            <input
                                type="text"
                                value={newService.image}
                                onChange={(e) => setNewService({ ...newService, image: e.target.value })}
                            />
                        </div>
                        <button type="submit" className="add-btn">Pridėti paslaugą</button>
                    </form>
                </section>
            </div>
        </div>
    );
}
