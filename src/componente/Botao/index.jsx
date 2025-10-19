import './botao.estilos.css'

export function Botao({children}) {
    return (
        <button className='botao__evento'>
            {children}
        </button>
    )
}