import { useI18n } from '../i18n'
import './TransportPage.css'

export function TransportPage() {
    const { t } = useI18n()

    const features = [
        { icon: '🌍', key: 'transport.feature1' },
        { icon: '📝', key: 'transport.feature2' },
        { icon: '🚛', key: 'transport.feature3' },
        { icon: '🔒', key: 'transport.feature4' },
        { icon: '⚡', key: 'transport.feature5' },
        { icon: '📍', key: 'transport.feature6' },
    ]

    const routes = [
        { country: 'Lenkija', flag: '🇵🇱' },
        { country: 'Estija', flag: '🇪🇪' },
        { country: 'Latvija', flag: '🇱🇻' },
        { country: 'Čekija', flag: '🇨🇿' },
        { country: 'Slovakija', flag: '🇸🇰' },
    ]

    return (
        <div className="transport-page page-transition">
            <div className="transport-hero">
                <img
                    src="/cargo_transport_1769891547909.png"
                    alt="Cargo Transport Fleet"
                    className="transport-hero-bg"
                />
                <div className="transport-hero-overlay">
                    <div className="container">
                        <span className="section-tag">{t('tag.transport')}</span>
                        <h1>{t('transport.title')}</h1>
                        <p className="hero-subtitle">{t('transport.subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="transport-content">
                <div className="container">
                    <div className="transport-intro">
                        <div className="company-badge">
                            <span className="badge-icon">🏢</span>
                            <div className="badge-text">
                                <strong>UAB «VEGESTA»</strong>
                                <span>Stipri kvalifikuota komanda nuo 1996 m.</span>
                            </div>
                        </div>
                        <p className="intro-text">{t('transport.intro')}</p>
                    </div>

                    <div className="features-section">
                        <h2>Mūsų privalumai</h2>
                        <div className="transport-features-grid">
                            {features.map((feature, idx) => (
                                <div key={idx} className="transport-feature-card">
                                    <span className="feature-icon-large">{feature.icon}</span>
                                    <p>{t(feature.key)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="fleet-section">
                        <h2>Mūsų autoparkas</h2>
                        <div className="fleet-grid">
                            <div className="fleet-card">
                                <span className="fleet-icon">🚛</span>
                                <h3>Mercedes automobiliai</h3>
                                <p>EURO 3 ir EURO 5 standartų transportas</p>
                            </div>
                            <div className="fleet-card">
                                <span className="fleet-icon">📦</span>
                                <h3>Tentas 82-92 M³</h3>
                                <p>Didelės talpos tentai įvairiems kroviniams</p>
                            </div>
                            <div className="fleet-card">
                                <span className="fleet-icon">⚖️</span>
                                <h3>24 tonų keliamoji galia</h3>
                                <p>Sunkiems ir gabaritiškiems kroviniams</p>
                            </div>
                            <div className="fleet-card">
                                <span className="fleet-icon">📡</span>
                                <h3>GPS navigatoriai</h3>
                                <p>Visuose automobiliuose su stebėjimo sistema</p>
                            </div>
                        </div>
                    </div>

                    <div className="routes-section">
                        <h2>Pervežimų maršrutai</h2>
                        <p className="routes-intro">Pilnai aptarnaujame krovinių srautus ES trasos kryptimis</p>
                        <div className="routes-grid">
                            {routes.map((route) => (
                                <div key={route.country} className="route-card">
                                    <span className="route-flag">{route.flag}</span>
                                    <span className="route-name">{route.country}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="transport-cta">
                        <div className="cta-content">
                            <h2>Reikia krovinių pervežimo?</h2>
                            <p>Susisiekite su mumis ir mes surasime optimaliausią sprendimą Jūsų krovinio pervežimui!</p>
                            <div className="cta-buttons">
                                <a href="tel:+37067841599" className="cta-primary">
                                    📞 +370 678 41599
                                </a>
                                <a href="tel:+37069917189" className="cta-secondary">
                                    📞 +370 699 17189
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
