import './pecheur.css'
import Bascule from '../../component/bascule/Bascule'
import PecheurAstrub1 from '../../assets/pecheur_1_astrub.webp'
import PecheurLac1 from '../../assets/pecheur_1_lac_cania.webp'
import PecheurRivage1 from '../../assets/pecheur_1_rivage.webp'
import PecheurAstrub10 from '../../assets/pecheur_10_astrub.webp'
import PecheurAstrub210 from '../../assets/pecheur_10_astrub_2.webp'
import PecheurAstrub20 from '../../assets/pecheur_20_astrub.webp'
import PecheurScara20 from '../../assets/pecheur_20_scara.webp'
import PecheurAstrub30 from '../../assets/pecheur_30_astrub.webp'
import PecheurChateau30 from '../../assets/pecheur_30_chateau.webp'
import PecheurAstrub40 from '../../assets/pecheur_40_astrub.webp'
import PecheurAstrub50 from '../../assets/pecheur_50_astrub.webp'
import PecheurAstrub60 from '../../assets/pecheur_60_astrub.webp'
import PecheurScara60 from '../../assets/pecheur_60_scara.webp'
import PecheurOtomai70 from '../../assets/pecheur_70_otomai.webp'
import PecheurEleveur80 from '../../assets/pecheur_80_eleveur.webp'
import PecheurScara80 from '../../assets/pecheur_80_scara.webp'
import PecheurScara90 from '../../assets/pecheur_90_scara.webp'
import PecheurEleveur100 from '../../assets/pecheur_100_eleveur.webp'
import PecheurScara100 from '../../assets/pecheur_100_scara.webp'
import PecheurEleveur110 from '../../assets/pecheur_110_eleveur.webp'
import PecheurPanda110 from '../../assets/pecheur_110_pandala.webp'
import PecheurPanda120 from '../../assets/pecheur_120_pandala.webp'
import PecheurCania130 from '../../assets/pecheur_130_cania.webp'
import PecheurPanda140 from '../../assets/pecheur_140_pandala.webp'
import PecheurCania150 from '../../assets/pecheur_150_cania.webp'
import PecheurScara160 from '../../assets/pecheur_160_scara.webp'
import PecheurOtomai170 from '../../assets/pecheur_170_otomai.webp'

function Pecheur() {
    return (
        <>
            <div className='pecheurContainer'>
                <div>
                    <h1>Monter Pecheur 200</h1>
                </div>
                <div className="pecheur-bascule">
                    <Bascule title="Niveau 1 à 10">
                        <img src={PecheurAstrub1}/>
                        <img src={PecheurLac1}/>
                        <img src={PecheurRivage1}/>
                    </Bascule>
                    <Bascule title="Niveau 10 à 20">
                        <img src={PecheurAstrub10}/>
                        <img src={PecheurAstrub210}/>
                    </Bascule>
                    <Bascule title="Niveau 20 à 30">
                        <img src={PecheurAstrub20}/>
                        <img src={PecheurScara20}/>
                    </Bascule>
                    <Bascule title="Niveau 30 à 40">
                        <img src={PecheurAstrub30}/>
                        <img src={PecheurChateau30}/>
                    </Bascule>
                    <Bascule title="Niveau 40 à 50">
                        <img src={PecheurAstrub40}/>
                    </Bascule>
                    <Bascule title="Niveau 50 à 60">
                        <img src={PecheurAstrub50}/>
                    </Bascule>
                    <Bascule title="Niveau 60 à 70">
                        <img src={PecheurAstrub60}/>
                        <img src={PecheurScara60}/>
                    </Bascule>
                    <Bascule title="Niveau 70 à 80">
                        <img src={PecheurOtomai70}/>
                    </Bascule>
                    <Bascule title="Niveau 80 à 90">
                        <img src={PecheurEleveur80}/>
                        <img src={PecheurScara80}/>
                    </Bascule>
                    <Bascule title="Niveau 90 à 100">
                        <img src={PecheurScara90}/>
                    </Bascule>
                    <Bascule title="Niveau 100 à 110">
                        <img src={PecheurEleveur100}/>
                        <img src={PecheurScara100}/>
                    </Bascule>
                    <Bascule title="Niveau 110 à 120">
                        <img src={PecheurPanda110}/>
                        <img src={PecheurEleveur110}/>
                    </Bascule>
                    <Bascule title="Niveau 120 à 130">
                        <img src={PecheurPanda120}/>
                    </Bascule>
                    <Bascule title="Niveau 130 à 130">
                        <img src={PecheurCania130}/>
                    </Bascule>
                    <Bascule title="Niveau 140 à 150">
                        <img src={PecheurPanda140}/>
                    </Bascule>
                    <Bascule title="Niveau 150 à 160">
                        <img src={PecheurCania150}/>
                    </Bascule>
                    <Bascule title="Niveau 160 à 170">
                        <img src={PecheurScara160}/>
                    </Bascule>
                    <Bascule title="Niveau 170 à 180">
                        <img src={PecheurOtomai170}/>
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