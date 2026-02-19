import { useI18n } from '../i18n'
import './Contact.css'

export function Contact() {
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
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-header">
                    <span className="section-tag">{t('tag.contact')}</span>
                    <h2 className="section-title">{t('contact.title')}</h2>
                    <p className="contact-lead">{t('contact.subtitle')}</p>
                </div>

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
                                    height="200"
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
        </section>
    )
}
