import './MountingContent.css'

export function MountingContent() {
    return (
        <div className="mounting-content">
            <section className="mounting-intro">
                <h2>Greitas Padangų montavimas, keitimas | Ratų balansavimas</h2>
                <p className="highlight-text">8 metų patirtis – kokybė, kuria galite pasitikėti</p>
                <p>
                    Atliekame profesionalų ratų montavimą ir padangų montavimą Vilniuje jau daugiau nei 8 metus.
                    Per šį laiką aptarnavome šimtus klientų ir sukaupėme patirtį, leidžiančią darbus atlikti greitai, tiksliai ir saugiai.
                </p>
            </section>

            <section className="mounting-equipment">
                <h3>Dirbame su modernia profesionalia įranga, kuri užtikrina:</h3>
                <ul className="benefits-list">
                    <li>tikslų padangų montavimą</li>
                    <li>precizišką ratų balansavimą</li>
                    <li>minimalią padangos ir ratlankio pažeidimo riziką</li>
                    <li>ilgesnį padangų tarnavimo laiką</li>
                </ul>
            </section>

            <section className="mounting-info">
                <h3>Padangų montavimas ir balansavimas Vilniuje</h3>
                <p>
                    Pagal Lietuvos reikalavimus padangos turi būti keičiamos sezoniškai – du kartus per metus.
                    Tačiau svarbu ne tik pakeisti padangas, bet ir atlikti profesionalų ratų balansavimą, kuris užtikrina saugų bei komfortišką važiavimą.
                </p>
                <h4>Po atlikto ratų montavimo:</h4>
                <ul className="check-list">
                    <li>✔ automobilis važiuoja stabiliai</li>
                    <li>✔ nejaučiama vairo vibracija</li>
                    <li>✔ padangos dėvisi tolygiai</li>
                    <li>✔ apsaugoma važiuoklė</li>
                </ul>
            </section>

            <section className="mounting-importance">
                <h3>Kodėl svarbu profesionaliai montuoti ratus?</h3>
                <p>Ratai – viena svarbiausių automobilio dalių. Nuo jų tiesiogiai priklauso:</p>
                <ul className="dots-list">
                    <li>stabdymo efektyvumas</li>
                    <li>automobilio stabilumas</li>
                    <li>valdymo tikslumas</li>
                    <li>keleivių saugumas</li>
                </ul>
                <p>
                    Jeigu padangos protektorius yra susidėvėjęs, diskai deformuoti ar ratai netinkamai subalansuoti –
                    pablogėja sukibimas su kelio danga, pailgėja stabdymo kelias ir greičiau dėvisi važiuoklė.
                </p>
                <p className="recommendation">
                    Rekomenduojame reguliariai tikrinti padangų būklę ir kas kelis metus keisti jas į naują komplektą.
                </p>
            </section>

            <section className="mounting-services">
                <h3>Atliekamos paslaugos</h3>
                <p>Teikiame šias paslaugas Vilniuje:</p>
                <div className="services-grid">
                    <span>padangų nuėmimas</span>
                    <span>padangų montavimas</span>
                    <span>padangų išmontavimas</span>
                    <span>ratų uždėjimas</span>
                    <span>ratų balansavimas</span>
                    <span>padangų remontas</span>
                </div>
                <p className="note">Dirbame su skardiniais ir lietais ratlankiais (R13–R22).</p>
                <p className="guarantee">Visiems atliktiems darbams suteikiame garantiją.</p>
            </section>

            <section className="mounting-pricing">
                <h3>Ratų montavimo kainos Vilniuje</h3>
                <div className="pricing-grid">
                    <div className="pricing-card">
                        <h4>Skardinis ratlankis (R13–R16)</h4>
                        <ul>
                            <li><span>Montavimas</span> <strong>2 €</strong></li>
                            <li><span>Balansavimas</span> <strong>3 €</strong></li>
                            <li><span>Nuėmimas / uždėjimas</span> <strong>5 €</strong></li>
                        </ul>
                    </div>
                    <div className="pricing-card">
                        <h4>Lieto ratlankis (R13–R16)</h4>
                        <ul>
                            <li><span>Montavimas</span> <strong>2,5 €</strong></li>
                            <li><span>Balansavimas</span> <strong>4 €</strong></li>
                            <li><span>Nuėmimas / uždėjimas</span> <strong>5 €</strong></li>
                        </ul>
                    </div>
                    <div className="pricing-card">
                        <h4>Lieto ratlankis (R17–R18)</h4>
                        <ul>
                            <li><span>Montavimas</span> <strong>3 €</strong></li>
                            <li><span>Balansavimas</span> <strong>4,5 €</strong></li>
                            <li><span>Nuėmimas / uždėjimas</span> <strong>5 €</strong></li>
                        </ul>
                    </div>
                    <div className="pricing-card">
                        <h4>Lieto ratlankis (R19)</h4>
                        <ul>
                            <li><span>Montavimas</span> <strong>5 €</strong></li>
                            <li><span>Balansavimas</span> <strong>5 €</strong></li>
                            <li><span>Nuėmimas / uždėjimas</span> <strong>5 €</strong></li>
                        </ul>
                    </div>
                    <div className="pricing-card">
                        <h4>Lieto ratlankis (R20–R22)</h4>
                        <ul>
                            <li><span>Montavimas</span> <strong>6 €</strong></li>
                            <li><span>Balansavimas</span> <strong>6 €</strong></li>
                            <li><span>Nuėmimas / uždėjimas</span> <strong>6 €</strong></li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="mounting-cta">
                <h3>Registruokitės jau dabar</h3>
                <p>Jeigu ieškote greito ir patikimo ratų montavimo Vilniuje, susisiekite su mumis telefonu arba atvykite į servisą.</p>
                <p className="strong">Dirbame atsakingai, greitai ir suteikiame garantiją visiems darbams.</p>
            </section>
        </div>
    )
}
