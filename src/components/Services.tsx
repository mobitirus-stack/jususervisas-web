import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useI18n, services as defaultServices } from '../i18n'
import './Services.css'

export function Services() {
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
        <section id="services" className="services">
            <div className="container">
                <div className="section-header centered">
                    <span className="section-tag">{t('tag.services')}</span>
                    <h2 className="section-title">{t('services.title')}</h2>
                    <p className="section-subtitle">{t('services.intro')}</p>
                </div>

                <div className="services-grid">
                    {displayServices.slice(0, 8).map((service) => (
                        <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="service-card"
                        >
                            <div className="service-image">
                                <img src={service.image} alt={service.title || t(service.titleKey)} />
                            </div>
                            <div className="service-info">
                                <h3>{service.title || t(service.titleKey)}</h3>
                                <p>{service.short || t(service.shortKey)}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="services-footer">
                    <Link to="/services" className="view-all-btn">
                        {t('services.viewAll')} →
                    </Link>
                </div>
            </div>
        </section>
    )
}
