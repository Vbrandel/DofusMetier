import './pecheur.css'
import Bascule from '../../component/bascule/Bascule'

function Pecheur() {
    return (
        <>
            <div className='pecheurContainer'>
                <div>
                    <h1>Monter Pecheur 200</h1>
                </div>
                <div className="pecheur-bascule">
                    <Bascule title="Niveau 1 à 10">
                        <img src={"src/assets/pecheur_1_astrub.webp"}/>
                        <img src={"src/assets/pecheur_1_lac_cania.webp"}/>
                        <img src={"src/assets/pecheur_1_rivage.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 10 à 20">
                        <img src={"src/assets/pecheur_10_astrub.webp"}/>
                        <img src={"src/assets/pecheur_10_astrub_2.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 20 à 30">
                        <img src={"src/assets/pecheur_20_astrub.webp"}/>
                        <img src={"src/assets/pecheur_20_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 30 à 40">
                        <img src={"src/assets/pecheur_30_astrub.webp"}/>
                        <img src={"src/assets/pecheur_30_chateau.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 40 à 50">
                        <img src={"src/assets/pecheur_40_astrub.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 50 à 60">
                        <img src={"src/assets/pecheur_50_astrub.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 60 à 70">
                        <img src={"src/assets/pecheur_60_astrub.webp"}/>
                        <img src={"src/assets/pecheur_60_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 70 à 80">
                        <img src={"src/assets/pecheur_70_otomai.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 80 à 90">
                        <img src={"src/assets/pecheur_80_eleveur.webp"}/>
                        <img src={"src/assets/pecheur_80_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 90 à 100">
                        <img src={"src/assets/pecheur_90_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 100 à 110">
                        <img src={"src/assets/pecheur_100_eleveur.webp"}/>
                        <img src={"src/assets/pecheur_100_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 110 à 120">
                        <img src={"src/assets/pecheur_110_pandala.webp"}/>
                        <img src={"src/assets/pecheur_110_eleveur.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 120 à 130">
                        <img src={"src/assets/pecheur_120_pandala.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 130 à 140">
                        <img src={"src/assets/pecheur_130_cania.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 140 à 150">
                        <img src={"src/assets/pecheur_140_pandala.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 150 à 160">
                        <img src={"src/assets/pecheur_150_cania.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 160 à 170">
                        <img src={"src/assets/pecheur_160_scara.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 170 à 180">
                        <img src={"src/assets/pecheur_170_otomai.webp"}/>
                    </Bascule>
                    <Bascule title="Niveau 180 à 200">
                        <p>Pour ce dernier le palier, le meilleur rapport temps/xp reste la zone de Pandala avec les lottes, anguilles et les brochets.</p>
                    </Bascule>

                </div>
            </div>
        </>
    )
}

export default Pecheur