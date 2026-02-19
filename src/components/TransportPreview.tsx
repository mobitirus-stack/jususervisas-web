import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './TransportPreview.css'

export function TransportPreview() {
    const { t } = useI18n()

    return (
        <section className="transport-preview">
            <div className="transport-preview-bg">
                <img src="/cargo_transport_1769891547909.png" alt="Transport" />
            </div>
            <div className="transport-preview-overlay">
                <div className="container">
                    <div className="transport-preview-content">
                        <span className="section-tag">{t('tag.transport')}</span>
                        <h2>{t('transport.title')}</h2>
                        <p>{t('transport.subtitle')}</p>

                        <div className="transport-features-row">
                            <div className="feature-pill">
                                <span>🚛</span> Mercedes EURO 5
                            </div>
                            <div className="feature-pill">
                                <span>📦</span> 82-92 M³
                            </div>
                            <div className="feature-pill">
                                <span>⚖️</span> 24 T
                            </div>
                            <div className="feature-pill">
                                <span>📍</span> GPS
                            </div>
                        </div>

                        <div className="transport-cta-row">
                            <Link to="/transport" className="transport-btn primary">
                                Sužinoti daugiau →
                            </Link>
                            <a href="tel:+37067841599" className="transport-btn secondary">
                                📞 Skambinti dabar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
