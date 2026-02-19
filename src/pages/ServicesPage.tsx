import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n, services as defaultServices } from '../i18n'
import './ServicesPage.css'

export function ServicesPage() {
    const { t } = useI18n()
    const [displayServices, setDisplayServices] = useState<any[]>([])

    useEffect(() => {
        const saved = localStorage.getItem('custom_services')
        if (saved) {
            setDisplayServices(JSON.parse(saved))
        } else {
            setDisplayServices(defaultServices)
        }
    }, [])

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
                        {displayServices.map((service) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="service-card-large"
                            >
                                <div className="service-card-image">
                                    <img src={service.image} alt={service.title || t(service.titleKey)} />
                                </div>
                                <div className="service-card-content">
                                    <h3>{service.title || t(service.titleKey)}</h3>
                                    <p>{service.short || t(service.shortKey)}</p>
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
