import { useI18n } from '../i18n'
import './Testimonials.css'

export function Testimonials() {
    const { t } = useI18n()

    const testimonials = [
        { textKey: 'testimonials.1.text', authorKey: 'testimonials.1.author', rating: 5 },
        { textKey: 'testimonials.2.text', authorKey: 'testimonials.2.author', rating: 5 },
        { textKey: 'testimonials.3.text', authorKey: 'testimonials.3.author', rating: 5 },
    ]

    return (
        <section id="testimonials" className="testimonials">
            <div className="container">
                <div className="section-header centered">
                    <span className="section-tag">{t('tag.testimonials')}</span>
                    <h2 className="section-title">{t('testimonials.title')}</h2>
                    <p className="section-subtitle">{t('testimonials.subtitle')}</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((test, idx) => (
                        <div key={idx} className="testimonial-card">
                            <div className="testimonial-rating">
                                {'★'.repeat(test.rating)}
                            </div>
                            <blockquote className="testimonial-text">
                                "{t(test.textKey)}"
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {t(test.authorKey).charAt(0)}
                                </div>
                                <span className="author-name">{t(test.authorKey)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
