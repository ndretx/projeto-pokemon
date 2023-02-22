import { useEffect, useState } from "react"
import Pokemon from "./component";
import { Container, PokemonStyle, PokemonList } from "./style"

export default function Home() {
    
    const[ pokemons, setPokemons] = useState<any[]>([])
    
    function getPokemons(){
        var pokemonPromises = [];
        for(var i = 1; i<152; i++){
           pokemonPromises.push ( fetch(`https://pokeapi.co/api/v2/pokemon/${i}`))   
        }
        setPokemons(pokemonPromises)
    }
    
    useEffect(() => getPokemons(), [])        
    
   
    
    return(
        <Container >
            <h1> Pokémão</h1>
            <h3>Tem que pega eles tudo!</h3>
                <div >
                    <PokemonList>
                        {
                            pokemons.map(pokemon => {
                                return(
                                    <Pokemon promissed_pokemon ={pokemon} >
                                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/140.png" alt="Ditto" />
                                        <span> Monstrinho </span>
                                    
                                    </Pokemon>

                                )
                            })
                        }
                        
                    </PokemonList>
                    
                </div>
        </Container >
    )
}