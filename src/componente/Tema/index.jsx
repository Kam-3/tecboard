import './tema.estilos.css'

export function Tema({tema}) {
    return <h3 className='titulo__tema'>{
        tema.nome
    }</h3>
}