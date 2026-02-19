import './SiteInfoPage.css';

export function SiteInfoPage() {
    return (
        <div className="site-info-page page-transition">
            <div className="site-info-hero">
                <div className="container">
                    <h1>Svetainės informacija</h1>
                </div>
            </div>

            <div className="site-info-content">
                <div className="container">
                    <div className="info-card-large">
                        <p>
                            Ši svetainė sukurta autoservisui <strong>OKRA1</strong>, siekiant užtikrinti aiškų informacijos pateikimą,
                            patogų naršymą ir gerą pasiekiamumą paieškos sistemose. Kuriant svetainę buvo laikomasi šiuolaikinių
                            interneto sprendimų ir techninio optimizavimo principų.
                        </p>
                        <p>
                            Svetainė pritaikyta naudotis įvairiuose įrenginiuose, užtikrinant sklandų veikimą tiek mobiliuosiuose
                            telefonuose, tiek kompiuteriuose. Didelis dėmesys skirtas paslaugų struktūrai, informacijos aiškumui
                            ir greitam puslapių krovimui.
                        </p>
                        <p>
                            Svetainės kūrimo ir techninio optimizavimo darbus atliko{' '}
                            <a href="https://www.lamalocal.com" target="_blank" rel="noopener noreferrer" className="backlink">
                                LamaLocal
                            </a>{' '}
                            – svetainių kūrimo ir vietinio SEO sprendimus teikianti komanda Lietuvoje.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
