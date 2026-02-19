import './RimStraighteningContent.css'

export function RimStraighteningContent() {
    return (
        <div className="rim-content">
            <section className="rim-intro">
                <h2>Ratlankių lyginimas Vilniuje – JūsųServisas.lt</h2>
                <p className="highlight-text">Ar ratlankis sulinko? Mes galime padėti!</p>
                <p>
                    Kartais netikėtas susidūrimas su duobe ar kliūtimi kelyje gali sugadinti Jūsų automobilio ratlankį.
                    Nesutvarkytas ratlankis ne tik sumažina komfortą, bet ir kelia pavojų Jūsų saugumui bei gali pakenkti pakabai.
                </p>
                <p>
                    JūsųServisas.lt siūlo profesionalų ratlankių lyginimą, atstatant originalią ratlankio formą ir užtikrinant optimalų ratų balansą.
                </p>
            </section>

            <section className="rim-benefits">
                <h3>Mūsų paslaugos privalumai</h3>
                <ul className="benefits-list">
                    <li>Tikslus ratlankio formos atstatymas ir trūkstamų dalių grąžinimas</li>
                    <li>Moderni įranga ir saugūs, patikimi procesai</li>
                    <li>Profesionalūs ir patyrę meistrai</li>
                    <li>Greitas aptarnavimas, kad Jūsų automobilis vėl būtų saugus kelyje</li>
                </ul>
            </section>

            <section className="rim-why">
                <h3>Kodėl verta lyginti ratlankius?</h3>
                <ul className="check-list">
                    <li>✔ Užtikrinamas teisingas ratų balansas</li>
                    <li>✔ Ilgesnis padangų tarnavimo laikas</li>
                    <li>✔ Mažesnė pakabos ir kitų remonto darbų rizika</li>
                    <li>✔ Didresnis keleivių saugumas</li>
                    <li>✔ Pašalinama vibracija, atsiradusi dėl deformuotų ratlankių</li>
                    <li>✔ Komfortiškesnis ir saugesnis vairavimas</li>
                </ul>
            </section>

            <section className="rim-process">
                <h3>Kaip atliekamas ratlankių lyginimas</h3>
                <ol className="process-list">
                    <li>Meistras nuima padangą nuo ratlankio.</li>
                    <li>Ratlankis pašildomas, kad metalas taptų lankstesnis.</li>
                    <li>Naudojant hidraulines ir mechanines tiesinimo stakles, ratlankis atstatomas į pradinę formą.</li>
                    <li>Matavimo prietaisais patikrinamas gamyklinis ratlankio tikslumas.</li>
                    <li>Po procedūros ratlankis vėl paruošiamas padangos montavimui – jokių oro nuostolių ir vibracijų.</li>
                </ol>
                <p className="note">
                    💡 Pastaba: Lietų ratlankių keitimas naujais dažnai būna brangesnis, todėl lyginimas – kur kas ekonomiškesnis pasirinkimas.
                </p>
            </section>

            <section className="rim-pricing">
                <h3>Kainos</h3>
                <div className="pricing-box">
                    <p className="price-main">Ratlankio lyginimas – <strong>nuo 20 €/vnt.</strong></p>
                    <p className="price-note">Tiksli kaina priklauso nuo ratlankio pažeidimo tipo ir dydžio.</p>
                </div>
            </section>

            <section className="rim-faq">
                <h3>D.U.K.</h3>
                <div className="faq-item">
                    <h4>Kokia yra ratlankių lyginimo kaina?</h4>
                    <p>Kaina priklauso nuo pažeidimo. Ne visi ratlankiai gali būti suremontuoti, todėl kviečiame kreiptis telefonu arba atvykti į Jūsų patogiausią JūsųServisas.lt autoservisą.</p>
                </div>
                <div className="faq-item">
                    <h4>Kokia yra ratlankių lyginimo trukmė?</h4>
                    <p>Trukmė priklauso nuo automobilio modelio ir darbų apimties. Norėdami sužinoti preliminarią trukmę, susisiekite su mūsų specialistais.</p>
                </div>
            </section>
        </div>
    )
}
