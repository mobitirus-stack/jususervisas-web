import { Hero } from '../components/Hero'
import { About } from '../components/About'
import { Services } from '../components/Services'
import { WhyUs } from '../components/WhyUs'
import { Testimonials } from '../components/Testimonials'
import { Cooperation } from '../components/Cooperation'
import { Contact } from '../components/Contact'

export function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />

            <WhyUs />
            <Cooperation />
            <Testimonials />
            <Contact />
        </>
    )
}

