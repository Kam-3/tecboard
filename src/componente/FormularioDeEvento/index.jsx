import './formulario-de-evento.estilos.css'
import { CampoFormulario } from "../CampoFormulario";
import { TituloFormulario } from "../TituloFormulario";
import { Label } from "../Label";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';



export function FormularioDeEvento({ temas, aoSubmeter }) {


function aoFormSubmetido (formData) {
  console.log('opa, tá na hora de criar um novo evento', formData)
  const evento = {
      capa: formData.get('capa'),
      tema: temas.find(function (item){
        return item.id = formData.get('tema')
      }),
      data: new Date(formData.get('dataEvento')),
      titulo: formData.get('nomeEvento')
  }
  aoSubmeter(evento)
}

  return (
    <form className='form__evento' action={aoFormSubmetido}>
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>
      <div className='campos'>
        <CampoFormulario>
          <Label htmlFor="nome">
            Qual o nome do evento?
          </Label>
          <CampoDeEntrada
            type="text"
            id="nome"
            placeholder='Summer dev hits'
            name='nomeEvento'
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="capa">
            Qual o endereço da imagem de capa?
          </Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder='http://...'
            name='capa'
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="dataEvento">
            Data do evento
          </Label>
          <CampoDeEntrada
            type="date"
            id="dataEvento"
            name='dataEvento'
          />
        </CampoFormulario>
        <CampoFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}
          />
        </CampoFormulario>
      </div>
      <div className="acoes">
        <Botao>
          Criar evento
        </Botao>
      </div>
    </form>
  )

}
