import { useI18n } from '../i18n'
import './PromotionsPage.css'

interface Promotion {
    id: string
    icon: string
    titleKey: string
    descKey: string
    badge?: string
    active: boolean
}

const promotions: Promotion[] = [
    {
        id: 'storage',
        icon: '📦',
        titleKey: 'promo.storage.title',
        descKey: 'promo.storage.desc',
        badge: 'POPULIARU',
        active: true,
    },
    {
        id: 'winter',
        icon: '❄️',
        titleKey: 'promo.winter.title',
        descKey: 'promo.winter.desc',
        active: true,
    },
    {
        id: 'business',
        icon: '🏢',
        titleKey: 'promo.business.title',
        descKey: 'promo.business.desc',
        badge: 'VERSLUI',
        active: true,
    },
]

export function PromotionsPage() {
    const { t } = useI18n()

    return (
        <div className="promotions-page page-transition">
            <div className="promotions-hero">
                <div className="container">
                    <span className="section-tag">{t('tag.promotions')}</span>
                    <h1>{t('promotions.title')}</h1>
                    <p>{t('promotions.subtitle')}</p>
                </div>
            </div>

            <div className="promotions-content">
                <div className="container">
                    <div className="promotions-grid">
                        {promotions.map((promo) => (
                            <div key={promo.id} className={`promo-card ${promo.active ? 'active' : ''}`}>
                                {promo.badge && <span className="promo-badge">{promo.badge}</span>}
                                <div className="promo-icon">{promo.icon}</div>
                                <h3>{t(promo.titleKey)}</h3>
                                <p>{t(promo.descKey)}</p>
                                <div className="promo-status">
                                    <span className="status-dot"></span>
                                    <span>Akcija galioja</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="promo-info-section">
                        <h2>Kaip pasinaudoti akcijomis?</h2>
                        <div className="steps-grid">
                            <div className="step-card">
                                <span className="step-number">1</span>
                                <h4>Susisiekite</h4>
                                <p>Paskambinkite mums arba atvykite į autoservisą</p>
                            </div>
                            <div className="step-card">
                                <span className="step-number">2</span>
                                <h4>Paminėkite akciją</h4>
                                <p>Pasakykite, kad norite pasinaudoti akcija</p>
                            </div>
                            <div className="step-card">
                                <span className="step-number">3</span>
                                <h4>Mėgaukitės</h4>
                                <p>Gaukite nuolaidą ar papildomą paslaugą</p>
                            </div>
                        </div>
                    </div>

                    <div className="promo-cta">
                        <h3>Turite klausimų?</h3>
                        <p>Susisiekite su mumis ir sužinokite daugiau apie galiojančias akcijas!</p>
                        <a href="tel:+37069930214" className="promo-cta-btn">
                            📞 Skambinti dabar
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
