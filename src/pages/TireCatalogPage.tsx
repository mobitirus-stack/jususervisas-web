import { Link } from 'react-router-dom'
import { useI18n } from '../i18n'
import './TireCatalogPage.css'

interface TireSize {
    size: string
    price: number
    note?: string
}

// Vasarinės padangos - platus asortimentas
const summerTires: TireSize[] = [
    { size: '175/65-R14', price: 35 },
    { size: '185/60-R14', price: 35 },
    { size: '185/65-R14', price: 35 },
    { size: '185/65-R15', price: 38 },
    { size: '195/50-R15', price: 40 },
    { size: '195/55-R15', price: 40 },
    { size: '195/60-R15', price: 38 },
    { size: '195/65-R15', price: 39 },
    { size: '205/55-R16', price: 45 },
    { size: '205/60-R15', price: 42 },
    { size: '205/60-R16', price: 48 },
    { size: '205/65-R15', price: 45 },
    { size: '215/55-R16', price: 51 },
    { size: '215/55-R17', price: 58 },
    { size: '215/60-R16', price: 52 },
    { size: '215/65-R16', price: 55 },
    { size: '225/45-R17', price: 55 },
    { size: '225/50-R17', price: 60 },
    { size: '225/55-R17', price: 62 },
    { size: '235/45-R17', price: 58 },
    { size: '235/55-R17', price: 65 },
    { size: '245/40-R18', price: 75 },
    { size: '245/45-R18', price: 78 },
    { size: '255/35-R19', price: 95 },
    { size: '255/40-R19', price: 98 },
    { size: '275/35-R20', price: 120 },
]

// Žieminės padangos iš Ispanijos (atnaujintos) - pilnas sąrašas
const winterTires: TireSize[] = [
    { size: '175/70-R13', price: 29 },
    { size: '175/65-R14', price: 32 },
    { size: '175/70-R14', price: 35 },
    { size: '185/60-R14', price: 32 },
    { size: '185/65-R14', price: 32 },
    { size: '185/70-R14', price: 35 },
    { size: '185/65-R15', price: 35 },
    { size: '195/50-R15', price: 29 },
    { size: '195/55-R15', price: 29 },
    { size: '195/60-R15', price: 35 },
    { size: '195/65-R15', price: 35 },
    { size: '205/60-R15', price: 35 },
    { size: '205/65-R15', price: 39 },
    { size: '205/70-R15', price: 51 },
    { size: '205/55-R16', price: 40 },
    { size: '215/55-R16', price: 51 },
    { size: '225/45-R17', price: 55 },
    { size: '215/75-R15', price: 58, note: '4X4' },
    { size: '225/70-R15', price: 61, note: 'Salvaje' },
    { size: '215/75-R15', price: 90, note: 'Sachara' },
    { size: '235/75-R15', price: 92, note: 'Sachara' },
    { size: '235/75-R15', price: 87, note: 'Salvaje' },
    { size: '265/70-R15', price: 93, note: 'Sagra' },
    { size: '265/70-R15', price: 105, note: 'Sahara' },
    { size: '31/10.5-R15', price: 128, note: 'Spe/Track' },
    { size: '31/10.5-R15', price: 110, note: 'Salvaje/Renger' },
    { size: '31/10.5-R15', price: 115, note: 'Sahara' },
    { size: '235/70-R16', price: 81, note: 'Salvaje' },
    { size: '235/70-R16', price: 87, note: 'Sahara' },
    { size: '245/70-R16', price: 99, note: 'Salvaje' },
    { size: '265/70-R16', price: 99, note: 'Salvaje/Renger' },
    { size: '265/75-R16', price: 115, note: 'Spec/Track' },
    { size: '285/75-R16', price: 145, note: 'Spec/Track' },
    { size: '265/65-R17', price: 99, note: 'Renger' },
    { size: '255/55-R18', price: 100, note: 'Renger' },
    { size: '215/75-R17.5', price: 115 },
    { size: '235/75-R17.5', price: 145 },
    { size: '315/70-R22.5', price: 274 },
    { size: '385/65-R22.5', price: 283 },
    // Komercinės
    { size: '185/R-14C', price: 45 },
    { size: '195/70-R15C', price: 50 },
    { size: '225/70-R15C', price: 54 },
    { size: '195/75-R16C', price: 58 },
    { size: '215/75-R16C', price: 55 },
]

// Universalios padangos
const allSeasonTires: TireSize[] = [
    { size: '175/65-R14', price: 40 },
    { size: '185/60-R15', price: 45 },
    { size: '185/65-R15', price: 45 },
    { size: '195/55-R15', price: 48 },
    { size: '195/60-R15', price: 48 },
    { size: '195/65-R15', price: 50 },
    { size: '205/55-R16', price: 55 },
    { size: '205/60-R16', price: 58 },
    { size: '215/55-R16', price: 60 },
    { size: '215/60-R16', price: 62 },
    { size: '225/45-R17', price: 68 },
    { size: '225/50-R17', price: 72 },
    { size: '235/55-R17', price: 78 },
]

export function TireCatalogPage() {
    const { t } = useI18n()

    const renderTireTable = (tires: TireSize[], title: string, icon: string, image: string) => (
        <div className="tire-category fade-in">
            <div className="tire-category-header">
                <img src={image} alt={title} className="tire-category-image" />
                <div className="tire-category-info">
                    <span className="tire-icon">{icon}</span>
                    <h2>{title}</h2>
                    <p className="tire-count">{tires.length} išmerų sandėlyje</p>
                </div>
            </div>
            <div className="tire-table-wrapper">
                <table className="tire-table">
                    <thead>
                        <tr>
                            <th>Išmeras</th>
                            <th>Pastaba</th>
                            <th>Kaina nuo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tires.map((tire, idx) => (
                            <tr key={idx} className="fade-in-row" style={{ animationDelay: `${idx * 0.02}s` }}>
                                <td className="size-cell">{tire.size}</td>
                                <td className="note-cell">{tire.note || '—'}</td>
                                <td className="price-cell">{tire.price} €</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

    return (
        <div className="tire-catalog-page page-transition">
            <div className="tire-catalog-hero">
                <div className="container">
                    <span className="section-tag">{t('tag.catalog')}</span>
                    <h1>{t('catalog.title')}</h1>
                    <p>{t('catalog.subtitle')}</p>
                </div>
            </div>

            <div className="tire-catalog-content">
                <div className="container">
                    <div className="tire-notice fade-in">
                        <span className="notice-icon">ℹ️</span>
                        <div>
                            <p><strong>Kainos nurodytos orientacinės, nuo nurodytų sumų.</strong></p>
                            <p>Tikslią kainą ir prieinamumą sužinosite susisiekę telefonu arba atvykę į vietą. Montavimo ir balansavimo paslaugos įskaičiuotos. Prekiaujame naujomis, restauruotomis ir naudotomis padangomis.</p>
                        </div>
                    </div>

                    {renderTireTable(summerTires, 'Vasarinės padangos', '☀️', '/summer_tires.png')}
                    {renderTireTable(winterTires, 'Žieminės padangos (Ispanija, atnaujintos)', '❄️', '/winter_tires.png')}
                    {renderTireTable(allSeasonTires, 'Universalios padangos', '🌤️', '/allseason_tires.png')}

                    <div className="tire-cta-section fade-in">
                        <h3>Neradote reikiamo išmero?</h3>
                        <p>Susisiekite su mumis ir mes surasime bei užsakysime jums reikiamas padangas!</p>
                        <div className="tire-cta-buttons">
                            <a href="tel:+37069930214" className="tire-cta primary">
                                📞 +370 699 30214
                            </a>
                            <Link to="/contact" className="tire-cta secondary">
                                Kontaktai →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
