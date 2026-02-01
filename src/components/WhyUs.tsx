import { useI18n } from '../i18n'
import './WhyUs.css'

export function WhyUs() {
    const { t } = useI18n()

    const advantages = [
        { icon: '📅', titleKey: 'whyus.experience.title', descKey: 'whyus.experience.desc' },
        { icon: '🔧', titleKey: 'whyus.equipment.title', descKey: 'whyus.equipment.desc' },
        { icon: '👥', titleKey: 'whyus.team.title', descKey: 'whyus.team.desc' },
        { icon: '🚚', titleKey: 'whyus.trucks.title', descKey: 'whyus.trucks.desc' },
        { icon: '📦', titleKey: 'whyus.storage.title', descKey: 'whyus.storage.desc' },
        { icon: '📍', titleKey: 'whyus.location.title', descKey: 'whyus.location.desc' },
    ]

    return (
        <section id="whyus" className="whyus">
            <div className="container">
                <div className="section-header centered">
                    <span className="section-tag">{t('tag.whyus')}</span>
                    <h2 className="section-title">{t('whyus.title')}</h2>
                    <p className="section-subtitle">{t('whyus.subtitle')}</p>
                </div>

                <div className="advantages-grid">
                    {advantages.map((adv, idx) => (
                        <div key={idx} className="advantage-card">
                            <span className="advantage-icon">{adv.icon}</span>
                            <h3>{t(adv.titleKey)}</h3>
                            <p>{t(adv.descKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
