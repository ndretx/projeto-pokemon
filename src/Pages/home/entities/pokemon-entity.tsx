import PokemonAbilityEntity from "./pokemon-ability-entity";
import PokemonLocationEntity from "./pokemon-location-entity";
import PokemonTypeEntity from "./pokemon-type-entity";

export default class PokemonEntity{
    id: number;
    name: string;
    types: PokemonTypeEntity[];
    locations: PokemonLocationEntity[];
    abilities: PokemonAbilityEntity[];
    hp: number;
    imageUrl: string | undefined
   

    constructor(id: number, 
        name: string, types: 
        PokemonTypeEntity[], 
        locations: PokemonLocationEntity[], 
        abilities: PokemonAbilityEntity[], 
        hp: number, 
        ){
        this.id = id;
        this.name = name;
        this.types = types;
        this.locations = locations
        this.abilities = abilities;
        this.hp = hp;
        this.generateImageUrl();
    }
    
    getAllPokemons(): PokemonEntity[]{
        return[];
    }

    getPokemonById(id: number): PokemonEntity{
        return this;
        // implementado de forma parcial
    }
    generateImageUrl():void{
        this.imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.id}.png`;
    }
}