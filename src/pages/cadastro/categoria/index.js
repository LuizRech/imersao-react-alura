import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    name: 'Name inicial',
    desc: 'Categ inicial',
    color: '#000',
    }
  const [ categ, setCateg ] = useState(['teste']);
  const [ valueCateg, setValueCateg ] = useState(valoresIniciais);

  function setValue(key, value){
    setValueCateg({
      ...valueCateg,
      [key]: value
    })
  }

  function handleChange(event){
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    )
  }
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valueCateg.name}</h1>

      <form onSubmit={function handleSubmit(e){
        e.preventDefault();
        setCateg([...categ, valueCateg]);
      }}>

        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              name="name"
              value={valueCateg.name}
              onChange={handleChange}
              />
          </label>
         </div>

         <div>
          <label>
            Descrição da Categoria:
            <input
              type="text"
              name="desc"
              value={valueCateg.desc}
              onChange={handleChange}
              />
          </label>
         </div>

         <div>
          <label>
            Cor:
            <input
              type="color"
              name="color"
              value={valueCateg.color}
              onChange={handleChange}
              />
          </label>
         </div>

        <button>
          Cadastrar
        </button>
      </form>

      {categ.map((categoria, indice) => {
        return(
          <ul key={indice}>
            <li>{categoria.name}</li>
          </ul>
        )
      })}
      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria; 