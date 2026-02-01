import { useI18n, services } from '../i18n'
import './GalleryPage.css'

export function GalleryPage() {
    const { t } = useI18n()

    // Include all service images plus hero for gallery
    const galleryImages = [
        { src: '/hero_autoservice_1769891422879.png', title: 'Mūsų autoservisas' },
        ...services.map(s => ({ src: s.image, title: t(s.titleKey) })),
        { src: '/cargo_transport_1769891547909.png', title: 'Krovinių pervežimas' },
    ]

    return (
        <div className="gallery-page page-transition">
            <div className="gallery-hero">
                <div className="container">
                    <span className="section-tag">{t('tag.gallery')}</span>
                    <h1>{t('gallery.title')}</h1>
                    <p>{t('gallery.subtitle')}</p>
                </div>
            </div>

            <div className="gallery-content">
                <div className="container">
                    <div className="gallery-grid">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className={`gallery-item ${idx === 0 ? 'large' : ''}`}>
                                <img src={img.src} alt={img.title} />
                                <div className="gallery-overlay">
                                    <span>{img.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
