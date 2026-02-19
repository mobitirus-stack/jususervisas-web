import { useI18n } from '../i18n'
import './ContactPage.css'

export function ContactPage() {
    const { t } = useI18n()

    const locations = [
        {
            city: 'VILNIUS',
            address: 'Žirmūnų g. 54A, Vilnius, 09100 Vilniaus m. sav.',
            phones: ['+370 678 41599'],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.1173392960754!2d25.303791399999998!3d54.7075587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96bb29b1a6d7%3A0x99d45b9f8a7763c4!2sOkra1!5e0!3m2!1sen!2slt!4v1771539395310!5m2!1sen!2slt',
            isPrimary: true,
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

                                    <div className="map-container">
                                        {/* Add your iframe map here */}
                                        <div className="map-placeholder">
                                            <iframe
                                                src={loc.mapUrl}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 0 }}
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            ></iframe>
                                        </div>
                                    </div>

                                    <div className="contact-info">
                                        <h2>Kontaktinė informacija</h2>

                                        <div className="info-item">
                                            <span className="info-icon">📍</span>
                                            <div className="info-text">
                                                <h3>Adresas</h3>
                                                <p>Žirmūnų g. 54A, Vilnius</p>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <span className="info-icon">📞</span>
                                            <div className="info-text">
                                                <h3>Telefonas</h3>
                                                <p>+370 678 41599</p>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <span className="info-icon">✉️</span>
                                            <div className="info-text">
                                                <h3>El. paštas</h3>
                                                <p>info@okra1.lt</p>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <span className="info-icon">🕐</span>
                                            <div className="info-text">
                                                <h3>Darbo laikas</h3>
                                                <p>I-VII: 09:00 - 20:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
