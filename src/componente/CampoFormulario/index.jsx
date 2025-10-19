import './campo-formulario.estilos.css'

export function CampoFormulario ({children}) {
  return (
    <fieldset className='campo__form'>
      {children}
    </fieldset>
  )
}
