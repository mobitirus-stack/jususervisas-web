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
                        <span className="footer-logo">EUROPADANGOS</span>
                        <p className="footer-tagline">
                            Profesionalus autoservisas ir padangų centras Vilniuje nuo 1996 metų.
                        </p>
                        <div className="footer-contact-quick">
                            <a href="tel:+37069930214">📞 +370 699 30214</a>
                            <a href="mailto:europadangos1@gmail.com">✉️ europadangos1@gmail.com</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <div className="footer-col">
                            <h4 className="footer-title">Navigacija</h4>
                            <Link to="/">{t('nav.home')}</Link>
                            <Link to="/about">{t('nav.about')}</Link>
                            <Link to="/services">{t('nav.services')}</Link>
                            <Link to="/transport">{t('nav.transport')}</Link>
                            <Link to="/gallery">{t('nav.gallery')}</Link>
                            <Link to="/contact">{t('nav.contacts')}</Link>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Paslaugos</h4>
                            <Link to="/services/mounting">Padangų montavimas</Link>
                            <Link to="/services/alignment">Ratų suvedimas</Link>
                            <Link to="/services/diagnostics">Kompiuterinė diagnostika</Link>
                            <Link to="/services/suspension">Važiuoklės remontas</Link>
                            <Link to="/services/trucks">Krovininių mašinų remontas</Link>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-title">Darbo laikas</h4>
                            <span>Pirmadienis – Penktadienis</span>
                            <span className="hours">8:00 – 18:00</span>
                            <span>Šeštadienis</span>
                            <span className="hours">9:00 – 15:00</span>
                            <span>Sekmadienis</span>
                            <span className="hours closed">Nedirbame</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-legal">
                        <p>© 2024 UAB „Europadangos". {t('footer.rights')}</p>
                        <p className="footer-company">
                            {t('footer.company')} | Kirtimų g. 59C, Vilnius
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
