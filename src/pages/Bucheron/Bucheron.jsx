import './Bucheron.css';
import Wip from '../../assets/feca-wip.webp';

function Bucheron() {
    return (
        <>
            <div className='errorComponent'>
                <img src={Wip}/>
                <div>
                    <h1>Page en construction!</h1>
                    <p>En attendant, retournez voir les autres pages</p>
                    <button><a href="/">Retour</a></button>
                </div>
            </div>
        </>
    )
}

export default Bucheron