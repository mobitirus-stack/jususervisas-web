import './TireRepairContent.css'

export function TireRepairContent() {
    return (
        <div className="tire-repair-content">
            <section className="tire-repair-intro">
                <div className="tire-repair-hero-image">
                    <img src="/tire_repair_hero.png" alt="Padangų remontas" />
                </div>
                <h2>Padangų ir ratų remontas Vilniuje – JūsųServisas.lt</h2>
                <div className="highlight-text">
                    Ieškote patikimo padangų ir ratų remonto pasiūlymo?
                </div>
                <p>
                    Padangų remontas, montavimas, ratų balansavimas ir vulkanizavimas Vilniuje.
                    Profesionalūs meistrai, greitas aptarnavimas ir konkurencingos kainos.
                </p>
                <div className="cta-block">
                    <h3>Bendraukime ir susitarkime!</h3>
                    <p>Kreipkitės, ir stengsimės pateikti palankiausią sprendimą Jūsų automobilio padangų ar ratų remontui.</p>
                    <a href="tel:+37067841599" className="get-offer-btn">Gauti asmeninį pasiūlymą</a>
                </div>
            </section>

            <section className="tire-repair-services">
                <h3>Atliekamos padangų ir ratų remonto paslaugos</h3>
                <ul className="repair-services-list">
                    <li>Padangų montavimas ir keitimas</li>
                    <li>Ratų balansavimas</li>
                    <li>Padangos remontas</li>
                    <li>Slapto varžto išsukimas</li>
                    <li>Padangos hermetizavimas</li>
                    <li>Padangos vulkanizavimas</li>
                    <li>Centravimo žiedo gamyba</li>
                    <li>Ventilio keitimas</li>
                    <li>Slėgio daviklio keitimas</li>
                </ul>
            </section>

            <section className="tire-repair-why-us">
                <h3>Kodėl rinktis mus?</h3>
                <div className="why-us-grid">
                    <div className="why-us-item">
                        <h4>29+ metų patirtis</h4>
                        <p>Daugiau nei 29 metų padangų remonto patirtis.</p>
                    </div>
                    <div className="why-us-item">
                        <h4>Profesionalai</h4>
                        <p>Kvalifikuoti, ilgametę patirtį turintys specialistai.</p>
                    </div>
                    <div className="why-us-item">
                        <h4>Greitis</h4>
                        <p>Greitas ir profesionalus aptarnavimas.</p>
                    </div>
                </div>
            </section>

            <section className="tire-repair-pricing">
                <h3>Paslaugų kainos</h3>
                <table className="price-table">
                    <tbody>
                        <tr>
                            <td>Padangos montavimas ir rato balansavimas</td>
                            <td className="price">nuo 15 €/vnt.</td>
                        </tr>
                        <tr>
                            <td>Slėgio daviklio keitimas</td>
                            <td className="price">10 €/vnt.*</td>
                        </tr>
                        <tr>
                            <td>Centravimo žiedo gamyba</td>
                            <td className="price">10 €/vnt.</td>
                        </tr>
                        <tr>
                            <td>Padangos remontas</td>
                            <td className="price">nuo 15 €/vnt.</td>
                        </tr>
                        <tr>
                            <td>Rato hermetizavimas</td>
                            <td className="price">15 €/vnt.*</td>
                        </tr>
                        <tr>
                            <td>Slapto varžto išsukimas</td>
                            <td className="price">nuo 35 €/vnt.</td>
                        </tr>
                    </tbody>
                </table>
                <p className="price-note">*Kainos nurodytos be padangos permontavimo paslaugos.</p>
            </section>

            <section className="tire-repair-faq">
                <h3>Dažniausiai užduodami klausimai (D.U.K.)</h3>
                <div className="faq-item">
                    <h4>Kiek kainuoja padangų remontas?</h4>
                    <p>Kaina priklauso nuo padangos pažeidimo ir naudojamos technologijos. Atvykite į artimiausią mūsų autoservisą – meistrai įvertins padangą ir pasiūlys optimalų remonto sprendimą.</p>
                </div>
                <div className="faq-item">
                    <h4>Kokia yra padangų remonto trukmė?</h4>
                    <p>Trukmė priklauso nuo automobilio modelio ir darbų apimties. Norėdami sužinoti preliminarią trukmę, susisiekite su Jūsų artimiausio JūsųServisas.lt autoserviso specialistais.</p>
                </div>
            </section>

            <section className="tire-repair-tech">
                <h3>Padangų remontas ir technologijos</h3>
                <div className="tech-grid">
                    <div className="tech-card">
                        <h4>Padangos hermetizavimas</h4>
                        <ul>
                            <li>Padanga nuimama nuo ratlankio</li>
                            <li>Pažeidimas užsandarinamas specialiu lopo metodu iš vidinės pusės</li>
                            <li>Patikimiausias padangos pradūrimo taisymo būdas</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <h4>Padangos vulkanizavimas</h4>
                        <ul>
                            <li>Naudojama speciali „žalia“ guma</li>
                            <li>Vulkanizavimo metu medžiaga susijungia su padanga, pašalindama pažeidimą</li>
                            <li>Lankstus ir patikimas sprendimas sudėtingesniems defektams</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <h4>Ventilio keitimas</h4>
                        <ul>
                            <li>Nesandarus ventilis pakeičiamas nauju, kad padanga nepraleistų oro</li>
                        </ul>
                    </div>
                    <div className="tech-card">
                        <h4>Rato remontas</h4>
                        <ul>
                            <li>Atliekamas pagal pažeidimo tipą</li>
                            <li>Užtikrinamas ratų balansavimas ir saugus automobilio eksploatavimas</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="tire-repair-locations">
                <h3>Aptarnavimo vietos</h3>
                <p>Padangų ir ratų remontas atliekamas:</p>
                <div className="locations-list">
                    <span>Vilniuje</span>
                    <span>Kaune</span>
                    <span>Klaipėdoje</span>
                    <span>Šiauliuose</span>
                    <span>Panevėžyje</span>
                    <span>Utenoje</span>
                    <span>Alytuje</span>
                </div>
            </section>
        </div>
    )
}
