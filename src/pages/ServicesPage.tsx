import { Link } from 'react-router-dom'
import { useI18n, services } from '../i18n'
import './ServicesPage.css'

export function ServicesPage() {
    const { t } = useI18n()

    return (
        <div className="services-page page-transition">
            <div className="services-page-hero">
                <div className="container">
                    <span className="section-tag">{t('tag.services')}</span>
                    <h1>{t('services.title')}</h1>
                    <p>{t('services.intro')}</p>
                </div>
            </div>

            <div className="services-page-content">
                <div className="container">
                    <div className="services-grid-full">
                        {services.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="service-card-large"
                            >
                                <div className="service-card-image">
                                    <img src={service.image} alt={t(service.titleKey)} />
                                </div>
                                <div className="service-card-content">
                                    <h3>{t(service.titleKey)}</h3>
                                    <p>{t(service.shortKey)}</p>
                                    <span className="service-link">{t('services.learnMore')} →</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
