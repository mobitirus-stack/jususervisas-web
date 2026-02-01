import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { Catalog } from '../components/Catalog'
import { WhyUs } from '../components/WhyUs'
import { Testimonials } from '../components/Testimonials'
import { TransportPreview } from '../components/TransportPreview'
import { Cooperation } from '../components/Cooperation'
import { Contact } from '../components/Contact'

export function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <TransportPreview />
            <Catalog />
            <WhyUs />
            <Cooperation />
            <Testimonials />
            <Contact />
        </>
    )
}

