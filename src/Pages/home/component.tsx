import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPokemonColorByType } from "../../utils/pokemon-colors";
import PokemonAbilityEntity from "./entities/pokemon-ability-entity";
import PokemonEntity from "./entities/pokemon-entity";
import PokemonLocationEntity from "./entities/pokemon-location-entity";
import PokemonTypeEntity from "./entities/pokemon-type-entity";
import { Container, PokemonStyle, } from "./style";

export default function Pokemon(props:any){
     const[pokemon, setPokemon] = useState<PokemonEntity>()
     
     async function getPokemonLocations(LocationUrl: string): Promise<PokemonLocationEntity[]>{
        var locations: PokemonLocationEntity [] = [];
        var response = await fetch(LocationUrl);
        var data = await response.json();

        data.slice(0,2).map(location => {
            locations.push(new PokemonLocationEntity(location.location_area.name))
        })
        return locations;
    }

     function getPokemonByPromise(promissedPokemon: Promise<any>){
        promissedPokemon.then(response => response.json() )
        .then( async data =>{
            if(data.id !== undefined){
                var pokemonAbilities: PokemonAbilityEntity[] = [];
                var pokemonTypes: PokemonTypeEntity [] = [];
                var pokemonLocations : PokemonLocationEntity [] = [];

                data.abilities.slice(0,2).map(pokemonAbility =>{
                    pokemonAbilities.push(new PokemonAbilityEntity(pokemonAbility.ability.name))
                }) 

                data.types.slice(0,2).map(pokemonType =>{
                    pokemonTypes.push(new PokemonTypeEntity(pokemonType.type.name))
                })
                pokemonLocations= await getPokemonLocations(data.location_area_encounters);
                


                var pokemonEntity: PokemonEntity;
                pokemonEntity = new PokemonEntity(data.id, data.name, pokemonTypes,pokemonLocations ,pokemonAbilities, data.base_experience);
                
                
                setPokemon(pokemonEntity);
            }
        })
     }
     

     useEffect(() => getPokemonByPromise(props.promissed_pokemon),[])
        if(pokemon !== undefined){
            return(
                <Container>
                    
                <PokemonStyle color={getPokemonColorByType(pokemon.types[0].name)}>
                    <Link to={{pathname: '/pokemon-details/', search: `?pokemon=${JSON.stringify(pokemon)}`}}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt="" /></Link>
                    <span>{pokemon.name}</span>
                </PokemonStyle>
                    
                </Container>
            )
        }
            else{
                return(
                    <div>console.error();
                    </div>
                )
            }
 
    }