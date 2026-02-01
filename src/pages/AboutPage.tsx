import { useI18n } from '../i18n'
import './AboutPage.css'

export function AboutPage() {
    const { t } = useI18n()

    const facts = [
        { icon: '📅', key: 'about.fact1' },
        { icon: '📋', key: 'about.fact2' },
        { icon: '👥', key: 'about.fact3' },
        { icon: '🔧', key: 'about.fact4' },
        { icon: '🚚', key: 'about.fact5' },
        { icon: '📡', key: 'about.fact6' },
    ]

    return (
        <div className="about-page page-transition">
            <div className="about-hero">
                <img src="/hero_autoservice.png" alt="Autoservisas" className="about-hero-bg" />
                <div className="about-hero-overlay">
                    <div className="container">
                        <span className="section-tag">{t('tag.about')}</span>
                        <h1>{t('about.title')}</h1>
                        <p>{t('about.subtitle')}</p>
                    </div>
                </div>
            </div>

            <div className="about-content">
                <div className="container">
                    <div className="about-story">
                        <div className="story-text">
                            <h2>Mūsų istorija</h2>
                            <p>{t('about.text1')}</p>
                            <p>{t('about.text2')}</p>
                            <p>{t('about.text3')}</p>
                        </div>
                        <div className="story-timeline">
                            <div className="timeline-item">
                                <span className="year">1996</span>
                                <span className="event">Įmonės įkūrimas</span>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2000</span>
                                <span className="event">Autoserviso plėtra</span>
                            </div>
                            <div className="timeline-item">
                                <span className="year">2010</span>
                                <span className="event">Krovinių pervežimai</span>
                            </div>
                            <div className="timeline-item current">
                                <span className="year">2024</span>
                                <span className="event">28+ metų patirtis</span>
                            </div>
                        </div>
                    </div>

                    <div className="facts-section">
                        <h2>Kodėl mes?</h2>
                        <div className="facts-grid">
                            {facts.map((fact, idx) => (
                                <div key={idx} className="fact-card">
                                    <span className="fact-icon">{fact.icon}</span>
                                    <span className="fact-text">{t(fact.key)}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="company-info">
                        <h2>Įmonės informacija</h2>
                        <div className="company-grid">
                            <div className="company-card">
                                <h4>Juridinis pavadinimas</h4>
                                <p>UAB „Vegesta"</p>
                            </div>
                            <div className="company-card">
                                <h4>Prekės ženklas</h4>
                                <p>Europadangos</p>
                            </div>
                            <div className="company-card">
                                <h4>Įmonės kodas</h4>
                                <p>123639588</p>
                            </div>
                            <div className="company-card">
                                <h4>Įkurta</h4>
                                <p>1996,06,28</p>
                            </div>
                            <div className="company-card">
                                <h4>Adresas</h4>
                                <p>Kirtimų g. 59C, Vilnius</p>
                            </div>
                            <div className="company-card">
                                <h4>Veikla</h4>
                                <p>Automobilių padangos, dalys, krovinių pervežimas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
