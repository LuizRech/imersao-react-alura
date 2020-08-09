import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';

    fetch(URL)
      .then(async (response) => {
        const resp = await response.json();
        setCateg([
          ...resp,
        ])
      })
  }, []);

  const valoresIniciais = {
    name: '',
    desc: '',
    color: '',
    }
  const [ categ, setCateg ] = useState([]);
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

      <form onSubmit={
        function handleSubmit(e){
          e.preventDefault();
          setCateg([...categ, valueCateg]);
          setValueCateg({
            name: '',
            desc: '',
            color: '',
          });
        }
      }>

        <FormField 
          fieldName="Nome da Categoria:"
          type="text"
          name="name"
          value={valueCateg.name}
          onChange={handleChange}
        />

        <FormField 
          fieldName="Descrição da Categoria:"
          type="textarea"
          name="desc"
          value={valueCateg.desc}
          onChange={handleChange}
        />

        <FormField 
          fieldName="Cor:"
          type="color"
          name="color"
          value={valueCateg.color}
          onChange={handleChange}
        />

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