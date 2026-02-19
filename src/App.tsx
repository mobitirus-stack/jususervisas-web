import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { I18nProvider } from './i18n'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { QuickContact } from './components/QuickContact'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { TransportPage } from './pages/TransportPage'
import { GalleryPage } from './pages/GalleryPage'
import { ContactPage } from './pages/ContactPage'
import { AboutPage } from './pages/AboutPage'
import { TireCatalogPage } from './pages/TireCatalogPage'
import { PromotionsPage } from './pages/PromotionsPage'
import { SiteInfoPage } from './pages/SiteInfoPage'
import { AdminPage } from './pages/AdminPage'
import './App.css'

// Scroll to top on route change
function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
              <Route path="/transport" element={<TransportPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/tires" element={<TireCatalogPage />} />
              <Route path="/promotions" element={<PromotionsPage />} />
              <Route path="/svetaines-informacija" element={<SiteInfoPage />} />
              <Route path="/admin" element={<AdminPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <QuickContact />
        </div>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App
