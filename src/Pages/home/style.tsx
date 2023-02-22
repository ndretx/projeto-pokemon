import styled from "styled-components";


interface Props{
    color: string;
}

export const Container = styled.div`
    background-color: #E8E8E8;
    

    h1,h3{
    text-align: center;
    margin: 4rem;

    
}

`
export const PokemonList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(400px,1fr));
    column-gap: 2rem;
    row-gap:2rem;

`

export const PokemonStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    border-radius: 1rem;
    justify-content: center;
    box-shadow: 5px 5px black;
    background-color: ${p => p.color};


    img{
        height: 200px;
        margin-right: 2rem;

    }
    span{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        text-transform: capitalize;
    }


`