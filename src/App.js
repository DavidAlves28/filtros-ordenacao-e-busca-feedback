import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import pokemons from "./pokemon/pokemon.json";
import PokemonCard from "./components/PokemonCard/PokemonCard";
import { getColors } from "./utils/ReturnCardColor";
import Header from "./components/Header/Header.js";
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center;
`;
function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [idFilter, setIdFilter] = useState("");

  //   exercicio 2 
  const [ordenacao, setOrdenacao] = useState("")
  const [tipo, setTipo] = useState("")



  console.log(ordenacao);

  console.log(tipo);
  return (
    <>
      <GlobalStyle />
      <Header
        idFilter={idFilter}
        setIdFilter={setIdFilter}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}

        // exercicios
        ordenacao={ordenacao}
        setOrdenacao={setOrdenacao}
        tipo={tipo}
        setTipo={setTipo}
      />
      <CardsContainer>
        {pokemons.filter((pokemon) => {
          return idFilter ? pokemon.id.includes(idFilter) : pokemon
        })
          /* exerciico 2 */
          .filter((pokemon) => {
            return !tipo  ? pokemon : pokemon.type.includes(tipo)
          })
          
          .sort((pokemon, nPokemon) => {

            switch (ordenacao) {
              case "Crescente":
                return pokemon.name.english.localeCompare(nPokemon.name.english)
              case "Decrescente":
                return nPokemon.name.english.localeCompare(pokemon.name.english)
              default:
                return pokemon
            }
          })

          .filter((pokemon) => {
            return pokemon.name.english.toLowerCase().includes(pesquisa.toLowerCase());
          })
          .map((pokemon) => {
            return (
              <PokemonCard
                cardColor={getColors(pokemon.type[0])}
                key={pokemon.id}
                pokemon={pokemon}
              />
            );
          })}
      </CardsContainer>
    </>
  );
}

export default App;
