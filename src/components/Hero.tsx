import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Hero.css'

export function Hero() {
    const { t } = useI18n()

    return (
        <section id="hero" className="hero">
            <div className="hero-bg">
                <img src="/hero_autoservice_premium.png" alt="Okra1 Autoservisas" />
            </div>
            <div className="hero-overlay">
                <div className="hero-content">
                    <div className="hero-text">
                        <span className="hero-tag">{t('tag.services')}</span>
                        <h1>{t('hero.title')}</h1>
                        <p className="hero-subtitle">{t('hero.subtitle')}</p>

                        <div className="hero-cta">
                            <Link to="/contact" className="btn btn-primary">
                                {t('hero.cta.contact')}
                            </Link>
                            <Link to="/services" className="btn btn-secondary">
                                {t('hero.cta.services')}
                            </Link>
                        </div>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">8+</span>
                            <span className="stat-label">{t('hero.stat.years')}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5000+</span>
                            <span className="stat-label">{t('hero.stat.clients')}</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">{t('hero.stat.quality')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-scroll">
                <span>Slinkite žemyn</span>
                <div className="scroll-indicator"></div>
            </div>
        </section>
    )
}
