import { useI18n } from '../i18n'
import './AboutPage.css'

export function AboutPage() {
    const { t } = useI18n()

    return (
        <div className="about-page page-transition">
            {/* Hero */}
            <div className="about-hero">
                <img src="/hero_autoservice.png" alt="Autoservisas" className="about-hero-bg" />
                <div className="about-hero-overlay">
                    <div className="container">
                        <span className="section-tag">{t('tag.about')}</span>
                        <h1>Apie mus</h1>
                        <p>Patikimas partneris automobilių priežiūros srityje</p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="about-main">
                {/* History - NOW VERTICAL LAYOUT */}
                <div className="history-block">
                    <h2>Mūsų istorija</h2>
                    <div className="history-text">
                        <p>{t('about.text1')}</p>
                        <p>{t('about.text2')}</p>
                        <p>{t('about.text3')}</p>
                    </div>
                </div>

                {/* Timeline - SEPARATE BLOCK */}
                <div className="timeline-block">
                    <div className="timeline-grid">
                        <div className="timeline-item">
                            <div className="timeline-year">1996</div>
                            <div className="timeline-desc">Įmonės įkūrimas</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2000</div>
                            <div className="timeline-desc">Autoserviso plėtra</div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-year">2010</div>
                            <div className="timeline-desc">Krovinių pervežimai</div>
                        </div>
                        <div className="timeline-item active">
                            <div className="timeline-year">2024</div>
                            <div className="timeline-desc">28+ metų patirtis</div>
                        </div>
                    </div>
                </div>

                {/* Why Us */}
                <div className="why-block">
                    <h2>Kodėl mes?</h2>
                    <div className="why-grid">
                        <div className="why-card">
                            <span>📅</span>
                            <p>{t('about.fact1')}</p>
                        </div>
                        <div className="why-card">
                            <span>📋</span>
                            <p>{t('about.fact2')}</p>
                        </div>
                        <div className="why-card">
                            <span>👥</span>
                            <p>{t('about.fact3')}</p>
                        </div>
                        <div className="why-card">
                            <span>🔧</span>
                            <p>{t('about.fact4')}</p>
                        </div>
                        <div className="why-card">
                            <span>🚚</span>
                            <p>{t('about.fact5')}</p>
                        </div>
                        <div className="why-card">
                            <span>📡</span>
                            <p>{t('about.fact6')}</p>
                        </div>
                    </div>
                </div>

                {/* Company Info */}
                <div className="info-block">
                    <h2>Įmonės informacija</h2>
                    <div className="info-grid">
                        <div className="info-card">
                            <h4>Juridinis pavadinimas</h4>
                            <p>UAB „Vegesta"</p>
                        </div>
                        <div className="info-card">
                            <h4>Prekės ženklas</h4>
                            <p>Europadangos</p>
                        </div>
                        <div className="info-card">
                            <h4>Įmonės kodas</h4>
                            <p>123639588</p>
                        </div>
                        <div className="info-card">
                            <h4>Įkurta</h4>
                            <p>1996.06.28</p>
                        </div>
                        <div className="info-card">
                            <h4>Adresas</h4>
                            <p>Kirtimų g. 59C, Vilnius</p>
                        </div>
                        <div className="info-card">
                            <h4>Veikla</h4>
                            <p>Padangos, dalys, pervežimas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
