import { useI18n } from '../i18n'
import './About.css'

export function About() {
    const { t } = useI18n()

    const facts = [
        { icon: '📅', text: t('about.fact1') },
        { icon: '📋', text: t('about.fact2') },
        { icon: '👥', text: t('about.fact3') },
        { icon: '🔧', text: t('about.fact4') },
    ]

    return (
        <section id="about" className="about">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="section-tag">{t('tag.about')}</span>
                        <h2 className="section-title">{t('about.title')}</h2>
                        <p className="about-lead">{t('about.subtitle')}</p>
                        <p className="about-text">{t('about.text1')}</p>
                        <p className="about-text">{t('about.text2')}</p>
                    </div>

                    <div className="about-visual">
                        <div className="year-badge">
                            <span className="year-number">2006</span>
                            <span className="year-text">Nuo metų</span>
                        </div>

                        <div className="facts-list">
                            {facts.map((fact, idx) => (
                                <div key={idx} className="fact-item">
                                    <span className="fact-icon">{fact.icon}</span>
                                    <span className="fact-text">{fact.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
