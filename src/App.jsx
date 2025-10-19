import React, { useState } from 'react'
import './App.css'
import { Banner } from './componente/Banner'
import { FormularioDeEvento } from './componente/FormularioDeEvento'
import { Tema } from './componente/Tema'
import { CardEvento } from './componente/CardEvento'

// no react, componentes são funções


function App() {


  const temas = [

    {
      id: 1,
      nome: 'front-end'
    },
    {
      id: 2,
      nome: 'back-end'
    },
    {
      id: 3,
      nome: 'dev-ops'
    },
    {
      id: 4,
      nome: 'inteligência artificial'
    },
    {
      id: 5,
      nome: 'data science'
    },
    {
      id: 6,
      nome: 'cloud'
    },
  ]


  const [eventos, setEventos] = useState([
    {
      capa: 'https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png',
      tema: temas[0],
      data: new Date(),
      titulo: 'Mulheres no Front'
    }
  ])

  function adicionarEvento(evento) {
    //  eventos.push(evento)
    //  console.log('eventos =>', eventos)
    setEventos([...eventos, evento])
  }

  return (
    <>
      <main>
        <header>
          <img src="/Logo.svg" alt="" />
        </header>
        <Banner />
        <FormularioDeEvento temas={temas} aoSubmeter={adicionarEvento}
        />

        <section className='container'>
          {temas.map(function (tema) {
            if (!eventos.some(function(evento) {
              return evento.tema.id == tema.id
            })) {
              return null
            }
            return (
              <section key={tema.id}>
                <Tema tema={tema} />
                {eventos.filter(function (evento){
                  return evento.tema.id == tema.id
                })
                .map(function (item, index) {
                  return (<CardEvento evento={item} key={index} />
                  )
                })}
              </section>
            )
          })}
        </section>
        {/*<section>
          <Tema tema={temas[0]}/>
        </section>
        <section>
          <Tema tema={temas[1]}/>
        </section>
        <section>
          <Tema tema={temas[2]}/>
        </section>
        <section>
          <Tema tema={temas[3]}/>
        </section>
        <section>
          <Tema tema={temas[4]}/>
        </section>
        <section>
          <Tema tema={temas[5]}/>
        </section>
        */}
      </main>
    </>
  )
}

export default App
