import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Cooperation.css'

export function Cooperation() {
    const { t } = useI18n()

    const benefits = [
        {
            icon: '💰',
            title: 'Specialios kainos',
            desc: 'Nuolaidos nuolatiniams verslo klientams',
        },
        {
            icon: '⏰',
            title: 'Prioritetinis aptarnavimas',
            desc: 'Greitas ir be eilių aptarnavimas',
        },
        {
            icon: '📋',
            title: 'Sąskaitos faktūros',
            desc: 'Oficialūs dokumentai buhalterinei apskaitai',
        },
        {
            icon: '🚗',
            title: 'Autoparko priežiūra',
            desc: 'Visų įmonės automobilių aptarnavimas',
        },
    ]

    return (
        <section id="cooperation" className="cooperation">
            <div className="container">
                <div className="cooperation-content">
                    <div className="cooperation-info">
                        <span className="section-tag">{t('tag.cooperation') || 'BENDRADARBIAVIMAS'}</span>
                        <h2>{t('cooperation.title')}</h2>
                        <p className="cooperation-lead">{t('cooperation.subtitle')}</p>
                        <p className="cooperation-text">{t('cooperation.text')}</p>

                        <div className="benefits-grid">
                            {benefits.map((benefit, idx) => (
                                <div key={idx} className="benefit-item">
                                    <span className="benefit-icon">{benefit.icon}</span>
                                    <div>
                                        <h4>{benefit.title}</h4>
                                        <p>{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="cooperation-cta">
                            <Link to="/contact" className="coop-btn primary">
                                Susisiekti dėl bendradarbiavimo
                            </Link>
                            <a href="tel:+37067841599" className="coop-btn secondary">
                                📞 +370 678 41599
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
