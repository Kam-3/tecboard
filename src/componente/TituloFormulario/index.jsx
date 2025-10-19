// props é um OBJETO
// eu posso escolher o nome da variável que vai receber o ".children", ao invés de props pode ser qualquer outra coisa
import './titulo-formulario.estilos.css'



export function TituloFormulario (props) {
  return (
    <h2 className='titulo__form'>
      {props.children}
    </h2>
  )
}