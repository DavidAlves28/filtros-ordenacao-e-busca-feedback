import React from "react";
import { Container } from "./styles";

const Header = (props) => {
  const pokemontypesArray = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];
  

  const handleSearch = (e) => {
    props.setPesquisa(e.target.value);
  };

   const handleIdSearch = (e) => {
    props.setIdFilter(e.target.value);
  };

  const onChangeOrdenacao = (e)=>{
    props.setOrdenacao(e.target.value)
  }
  
  const onChangeTipo = (e)=>{
    props.setTipo(e.target.value)
  }

  // console.log(props.tipo);
  return (
    <Container>
        <input
        type="number"
        placeholder="Buscar por id"
        onChange={handleIdSearch}
        value={props.idFilter}
      />
      <input
        type="text"
        placeholder="Buscar por nome"
        onChange={handleSearch}
        value={props.pesquisa}
      />
      <select value={props.ordenacao} onChange={(e)=>onChangeOrdenacao(e)} >
        <option value="">Ordenar</option>
        <option value="Crescente" >Crescente</option>
        <option value="Decrescente" >Decrescente</option>
      </select>

      <select
        name="tipo"
        id="tipo"
        value={props.tipo} 
        onChange={onChangeTipo}
          >
        <option value={""}>Selecione um tipo</option>
        {pokemontypesArray.map((type) => {
          return (
            <option  key={type} value={type}>
              {type}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Header;
