import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Footer.css'

export function Footer() {
    const { t } = useI18n()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-main">
                    <div className="footer-brand">
                        <span className="footer-logo">OKRA1</span>
                        <p className="footer-tagline">
                            Profesionalus autoservisas ir padangų centras Vilniuje.
                        </p>
                        <div className="footer-contact-quick">
                            <a href="tel:+37067841599">📞 +370 678 41599</a>
                            <a href="mailto:info@okra1.lt">✉️ info@okra1.lt</a>
                            <a href="https://www.facebook.com/okra1servisas/?locale=lt_LT" target="_blank" rel="noopener noreferrer">Facebook</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4 className="footer-title">Navigacija</h4>
                            <Link to="/">{t('nav.home')}</Link>
                            <Link to="/about">{t('nav.about')}</Link>
                            <Link to="/services">{t('nav.services')}</Link>
                            <Link to="/contact">{t('nav.contacts')}</Link>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Paslaugos</h4>
                            <Link to="/services/mounting">{t('service.mounting.title')}</Link>
                            <Link to="/services/rim_straightening">{t('service.rim_straightening.title')}</Link>
                            <Link to="/services/tire_repair">{t('service.tire_repair.title')}</Link>
                            <Link to="/services/ac">{t('service.ac.title')}</Link>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Darbo laikas</h4>
                            <span>Pirmadienis – Sekmadienis</span>
                            <span className="hours">9:00 – 20:00</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>© 2024 Okra1. {t('footer.rights')}</p>
                        <p className="footer-company">
                            {t('footer.company')} | Žirmūnų g. 54A, Vilniaus m. sav.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
