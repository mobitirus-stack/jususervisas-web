import { useParams, Link } from 'react-router-dom'
import { useI18n, services } from '../i18n'
import { MountingContent } from '../components/services/MountingContent'
import { RimStraighteningContent } from '../components/services/RimStraighteningContent'
import { TireRepairContent } from '../components/services/TireRepairContent'
import './ServiceDetailPage.css'

export function ServiceDetailPage() {
    const { serviceId } = useParams()
    const { t } = useI18n()

    const service = services.find(s => s.id === serviceId)

    if (!service) {
        return (
            <div className="service-detail-page">
                <div className="container">
                    <h1>Service not found</h1>
                    <Link to="/services">{t('services.backToServices')}</Link>
                </div>
            </div>
        )
    }

    const features = t(service.featuresKey).split('|')

    return (
        <div className="service-detail-page">
            <div className="service-detail-hero">
                <img src={service.image} alt={t(service.titleKey)} className="service-hero-bg" />
                <div className="service-hero-overlay">
                    <div className="container">
                        <Link to="/services" className="back-link">{t('services.backToServices')}</Link>
                        <span className="service-icon-hero">{service.icon}</span>
                        <h1>{t(service.titleKey)}</h1>
                    </div>
                </div>
            </div>

            <div className="service-detail-content">
                <div className="container">
                    <div className="service-detail-grid">
                        <div className="service-main">
                            {service.id === 'mounting' ? (
                                <MountingContent />
                            ) : service.id === 'rim_straightening' ? (
                                <RimStraighteningContent />
                            ) : service.id === 'tire_repair' ? (
                                <TireRepairContent />
                            ) : (
                                <>
                                    <div className="service-description">
                                        <h2>Aprašymas</h2>
                                        <p>{t(service.descKey)}</p>
                                    </div>

                                    <div className="service-features">
                                        <h2>Privalumai</h2>
                                        <div className="features-grid">
                                            {features.map((feature, index) => (
                                                <div key={index} className="feature-item">
                                                    <span className="feature-icon">✓</span>
                                                    <span>{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="service-sidebar">
                            <div className="cta-box">
                                <h3>Reikia šios paslaugos?</h3>
                                <p>Susisiekite su mumis ir mes jums padėsime.</p>
                                <a href="tel:+37067841599" className="cta-btn primary">
                                    📞 +370 678 41599
                                </a>
                                <a
                                    href="mailto:info@okra1.lt"
                                    className="cta-btn secondary"
                                >
                                    ✉️ info@okra1.lt
                                </a>
                            </div>

                            <div className="hours-box">
                                <h4>Darbo laikas</h4>
                                <ul>
                                    <li><span>I-VII:</span> 9:00 – 20:00</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="related-services">
                        <h2>Kitos paslaugos</h2>
                        <div className="related-grid">
                            {services.filter(s => s.id !== serviceId).slice(0, 4).map(s => (
                                <Link key={s.id} to={`/services/${s.id}`} className="related-card">
                                    <img src={s.image} alt={t(s.titleKey)} />
                                    <div className="related-info">
                                        <h4>{t(s.titleKey)}</h4>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
