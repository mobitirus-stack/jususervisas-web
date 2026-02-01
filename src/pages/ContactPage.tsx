import { useI18n } from '../i18n'
import './ContactPage.css'

export function ContactPage() {
    const { t } = useI18n()

    const locations = [
        {
            city: 'VILNIUS',
            address: 'Kirtimų g. 59C',
            phones: ['+370 699 30214', '+370 699 17189'],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2310.2591926751925!2d25.153709376671518!3d54.617042078893874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ddecbc0350a433%3A0x7121d19d8bf022fc!2sVegesta!5e0!3m2!1sen!2slt!4v1769947540892!5m2!1sen!2slt',
            isPrimary: true,
        },
        {
            city: 'KAUNAS',
            address: 'Žemaičių pl. 66',
            phones: ['+370 671 31987'],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2293.5!2d23.9!3d54.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zWmVtYWnEjWnFsyBwbC4gNjYsIEthdW5hcw!5e0!3m2!1slt!2slt!4v1234567890123',
            isPrimary: false,
        },
    ]

    return (
        <div className="contact-page page-transition">
            <div className="contact-hero">
                <div className="container">
                    <span className="section-tag">{t('tag.contact')}</span>
                    <h1>{t('contact.title')}</h1>
                    <p>{t('contact.subtitle')}</p>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    {/* Locations */}
                    <div className="locations-section">
                        <h2>Mūsų filialai</h2>
                        <div className="locations-grid">
                            {locations.map((loc, idx) => (
                                <div key={idx} className={`location-card ${loc.isPrimary ? 'primary' : ''}`}>
                                    <div className="location-header">
                                        <span className="location-badge">{loc.city}</span>
                                        {loc.isPrimary && <span className="primary-badge">Pagrindinis</span>}
                                    </div>

                                    <div className="location-info">
                                        <div className="location-item">
                                            <span className="location-icon">📍</span>
                                            <strong>{loc.address}</strong>
                                        </div>

                                        <div className="location-item">
                                            <span className="location-icon">📞</span>
                                            <div className="phones">
                                                {loc.phones.map((phone, pIdx) => (
                                                    <a key={pIdx} href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="location-map">
                                        <iframe
                                            src={loc.mapUrl}
                                            width="100%"
                                            height="250"
                                            style={{ border: 0, borderRadius: '12px' }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`${loc.city} Location`}
                                        />
                                    </div>

                                    <a href={`tel:${loc.phones[0].replace(/\s/g, '')}`} className="location-cta">
                                        📞 Skambinti
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="contact-info-section">
                        <div className="info-grid">
                            <div className="info-card">
                                <div className="info-icon">🏢</div>
                                <div className="info-content">
                                    <h3>{t('contact.company')}</h3>
                                    <p>UAB „Vegesta"</p>
                                    <p className="secondary">Įmonės kodas: 123639588</p>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">✉️</div>
                                <div className="info-content">
                                    <h3>{t('contact.email')}</h3>
                                    <a href="mailto:europadangos1@gmail.com">europadangos1@gmail.com</a>
                                </div>
                            </div>

                            <div className="info-card">
                                <div className="info-icon">🕐</div>
                                <div className="info-content">
                                    <h3>{t('contact.hours')}</h3>
                                    <div className="hours-list">
                                        <div className="hours-row">
                                            <span>{t('contact.weekdays')}</span>
                                            <span>8:00 – 18:00</span>
                                        </div>
                                        <div className="hours-row">
                                            <span>{t('contact.saturday')}</span>
                                            <span>9:00 – 15:00</span>
                                        </div>
                                        <div className="hours-row">
                                            <span>{t('contact.sunday')}</span>
                                            <span>{t('contact.closed')}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
