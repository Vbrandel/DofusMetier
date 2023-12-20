import './404.css'
import Perdu from '../../assets/feca-perdu.webp'

function Error() {
    return (
        <>
            <div className='errorComponent'>
                <img src={Perdu}/>
                <div>
                    <h1>Page introuvable !</h1>
                    <p>Mais ne vous inquietez pas, vous pouvez revenir à l'accueil</p>
                    <button><a href="/">Retour</a></button>
                </div>
            </div>
        </>
    )
}

export default Error