import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { pokemonLocal } from "../../utils/const";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import PokemonEntity from "../home/entities/pokemon-entity";
import { CenterAlign, Container, Details,  HpText,  LeftAlign,  PokemonStyle, RightAlign } from "./style";

export default function PokemonDetails (){
    const [pokemon, setPOkemon] = useState<PokemonEntity>(pokemonLocal as PokemonEntity)
    const [searchParams] = useSearchParams(); 

    useEffect(()=>{
        var data = JSON.parse(searchParams.get('pokemon'));
        setPOkemon (data as PokemonEntity)
    },[])
    return (
            
                <Container color={getPokemonColorByType(pokemon.types[0].name)}>                  
                        <PokemonStyle >
                            
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" />
                                <span className="pokemon-name">{pokemon.name}</span >
                        <hr />
                        <HpText>{`HP ${pokemon.hp}`}</HpText>
                        <Details>
                            <LeftAlign>
                                <h4>Habilidades</h4>
                                {
                                    pokemon.abilities.map(ability=>{
                                        return(
                                            <p><span>{ability.name}</span></p>
                                        )
                                    })
                                }
                            </LeftAlign>
                            <CenterAlign>
                                <h4>Localização</h4>
                                {
                                    pokemon.locations.map(location=>{
                                        return(
                                            <p><span>{location.name.substring(0,30)} </span></p>
                                        )
                                    })
                                }
                            </CenterAlign>
                            <RightAlign>
                                <h4>Tipo</h4>
                                {
                                    pokemon.types.map(type=>{
                                        return(
                                            <p><span>{type.name}</span></p>
                                        )
                                    })
                                }
                            </RightAlign>
                        </Details>
                    </PokemonStyle>
                </Container>
    )
}