import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Header.css'

export function Header() {
    const { language, setLanguage, t } = useI18n()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const location = useLocation()

    const navItems = [
        { path: '/', label: 'nav.home' },
        { path: '/about', label: 'nav.about' },
        { path: '/services', label: 'nav.services' },
        { path: '/tires', label: 'nav.catalog' },
        { path: '/transport', label: 'nav.transport' },
        { path: '/promotions', label: 'nav.promotions' },
        { path: '/contact', label: 'nav.contacts' },
    ]

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">EUROPADANGOS</span>
                    <span className="logo-sub">Autoservisas | 1996</span>
                </Link>

                <nav className={`nav ${mobileMenuOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                </nav>

                <div className="header-right">
                    <a href="tel:+37069930214" className="header-phone">
                        <span className="phone-icon">📞</span>
                        <span className="phone-number">+370 699 30214</span>
                    </a>

                    <div className="lang-switcher">
                        <button
                            onClick={() => setLanguage('lt')}
                            className={`lang-btn ${language === 'lt' ? 'active' : ''}`}
                        >
                            LT
                        </button>
                        <button
                            onClick={() => setLanguage('ru')}
                            className={`lang-btn ${language === 'ru' ? 'active' : ''}`}
                        >
                            RU
                        </button>
                    </div>

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
