import { useState } from "react";
import { pokemonLocal } from "../../utils/const";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import PokemonEntity from "../home/entities/pokemon-entity";
import { Container, Details,  HpText,  PokemonStyle } from "./style";

export default function PokemonDetails (){
    const [pokemon, setPOkemon] = useState<PokemonEntity>(pokemonLocal as PokemonEntity)
    return (
            <div>
                <Container color={getPokemonColorByType(pokemon.types[0].name)}>                  
                        <PokemonStyle >
                            <Details>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                                <span className="pokemon-name">{pokemon.name}</span>
                                
                                
                                <hr/>
                                <HpText> {`Hp ${pokemon.hp}`} </HpText>
                                    

                                    <div>
                                        <div>
                                        
                                            <h4>Habilidades</h4>
                                            {
                                                pokemon.abilities.map(ability =>{
                                                    return(
                                                        <p><span>{ability.name}</span></p>

                                                    )
                                                }
                                            )}
                                            
                                        </div> 
                                    </div>
                                        
                                        <div>
                                        
                                    
                                            <h4>Localização</h4>
                                            {
                                            <div>  
                                                <p><span>{pokemon.locations[0].name}</span></p>
                                                <p><span>{pokemon.locations[0].name}</span></p>
                                            </div>
            
                                                
                                            }
                                        
                                        </div> 
                                        
                                        <div>
                                            <div>
                                            
                                                <h4>Tipo</h4>
                                                {
                                                    pokemon.types.map(type =>{
                                                        return(
                                                            <p><span>{type.name}</span></p>

                                                        )
                                                    }
                                                )}
                                                
                                            </div> 
                                        </div>  
                                </Details>
                        </PokemonStyle>
                        
                        
                </Container>

                    </div>
                )
    
        
} 