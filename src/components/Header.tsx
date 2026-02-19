import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../i18n'
import './Header.css'

export function Header() {
    const { t } = useI18n()
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false)
    }, [location.pathname])

    // Prevent body scroll when menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [menuOpen])

    const navItems = [
        { path: '/', label: 'nav.home' },
        { path: '/about', label: 'nav.about' },
        { path: '/services', label: 'nav.services' },
        { path: '/contact', label: 'nav.contacts' },
    ]

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/" className="logo">
                    <span className="logo-text">OKRA1</span>
                    <span className="logo-sub">Autoservisas</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                        >
                            {t(item.label)}
                        </Link>
                    ))}
                </nav>

                <div className="header-right">
                    <a href="tel:+37067841599" className="header-phone">
                        <span className="phone-icon">📞</span>
                        <span className="phone-number">+370 678 41599</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        type="button"
                    >
                        <span className={`menu-icon ${menuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}>
                    <nav className="mobile-nav" onClick={(e) => e.stopPropagation()}>
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {t(item.label)}
                            </Link>
                        ))}
                        <a href="tel:+37067841599" className="mobile-phone-btn">
                            📞 +370 678 41599
                        </a>
                    </nav>
                </div>
            )}
        </header>
    )
}
