import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Catalog.css'

export function Catalog() {
    const { t } = useI18n()

    const tireTypes = [
        {
            type: 'summer',
            icon: '☀️',
            titleKey: 'catalog.summer.title',
            descKey: 'catalog.summer.desc',
            color: '#ff9800',
        },
        {
            type: 'winter',
            icon: '❄️',
            titleKey: 'catalog.winter.title',
            descKey: 'catalog.winter.desc',
            color: '#00bcd4',
        },
        {
            type: 'allseason',
            icon: '🌤️',
            titleKey: 'catalog.allseason.title',
            descKey: 'catalog.allseason.desc',
            color: '#4caf50',
        },
    ]

    return (
        <section id="catalog" className="catalog">
            <div className="container">
                <div className="section-header centered">
                    <span className="section-tag">{t('tag.catalog')}</span>
                    <h2 className="section-title">{t('catalog.title')}</h2>
                    <p className="section-subtitle">{t('catalog.subtitle')}</p>
                </div>

                <div className="catalog-grid">
                    {tireTypes.map((tire) => (
                        <Link
                            key={tire.type}
                            to="/tires"
                            className={`catalog-card ${tire.type}`}
                            style={{ '--accent': tire.color } as React.CSSProperties}
                        >
                            <div className="catalog-icon">{tire.icon}</div>
                            <h3>{t(tire.titleKey)}</h3>
                            <p>{t(tire.descKey)}</p>
                            <span className="catalog-btn">Peržiūrėti →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

