import styled from "styled-components";

interface Props {
    color: string;
}

export const Container = styled.div`
<<<<<<< HEAD:src/pokemon/view/style.tsx
    h1{
        text-align: center;
        margin: 4rem;
    }
=======
    background-color: #E8E8E8;
    

    h1,h3{
    text-align: center;
    margin: 4rem;

    
}

`
export const PokemonList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(500px,1fr));
    column-gap: 2rem;
    row-gap: 2rem;

>>>>>>> 4479a6c8237dc9baa634e717e708631623e4b836:src/Pages/home/style.tsx
`

export const PokemonStyle = styled.div<Props>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    height: 300px;
    border-radius: 1rem;
    justify-content: center;
    box-shadow: 5px 5px #999999;
    background-color: ${p => p.color};

    img{
        height: 200px;
        margin-right: 2rem;
    }

    span{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
    }
`