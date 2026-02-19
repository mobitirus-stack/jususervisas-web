import { useI18n } from '../i18n'
import './Testimonials.css'

export function Testimonials() {
    const { t } = useI18n()

    const testimonials = [
        { text: 'fast, reliable, cordial. thank you', author: 'Robert Stabile', rating: 5 },
        { text: 'Good place to fix your wheels quickly', author: 'Juozapas Bernatavicius', rating: 5 },
        { text: 'Very good prices, friendly personnel', author: 'Povilas Jurčys', rating: 5 },
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
                                "{test.text}"
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">
                                    {test.author.charAt(0)}
                                </div>
                                <span className="author-name">{test.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
