import { useI18n } from '../i18n'
import './ContactPage.css'

export function ContactPage() {
    const { t } = useI18n()

    const locations = [
        {
            city: 'VILNIUS',
            address: 'Žirmūnų g. 54A, Vilnius, 09100 Vilniaus m. sav.',
            phones: ['+370 678 41599'],
            mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.1173408533355!2d25.30121111319265!3d54.70755867260151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd96bb29b1a6d7%3A0x99d45b9f8a7763c4!2sOkra1!5e0!3m2!1ses-419!2slt!4v1771517475998!5m2!1ses-419!2slt',
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
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2304.219602278376!2d25.2611!3d54.7214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd93fb5c6408f5%3A0x400d18c70e9dd60!2sUkmerg%C4%97s%20g.%20283b%2C%2006313%20Vilnius!5e0!3m2!1sen!2slt!4v1700000000000!5m2!1sen!2slt"
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
                                                <p>Ukmergės 283b</p>
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
                                                <p>okraautoservisas@gmail.com</p>
                                            </div>
                                        </div>

                                        <div className="info-item">
                                            <span className="info-icon">🕐</span>
                                            <div className="info-text">
                                                <h3>Darbo laikas</h3>
                                                <p>I-V: 08:00 - 18:00</p>
                                                <p>VI-VII: Nedirbame</p>
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
