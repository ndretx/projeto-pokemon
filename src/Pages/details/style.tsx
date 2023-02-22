import styled from "styled-components";

interface Props{
    color: string;
}




export const Container = styled.div`
    display: flex;
    height: 630px;
    padding: 2rem;
    justify-content: center;
    background-color: ${c => c.color};

    h1,h3{
    text-align: center;
    margin: 4rem;
    }
    p{
        line-height: 3px;
    }

    
`
export const HpText = styled.span`
    display: flex;
    font-size: 15px;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
`

export const PokemonStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 70%;
    justify-content: center;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 3rem;


    img{
        
        
        max-height:250px;
        

    }
    hr{
        width: 250px;
        height: 0,5px;
        border-color: black;                                                              
    }
    .pokemon-name{
        text-align: center;
        margin-top: 1px;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 2em;
    }


` 
export const Details = styled.div`
    display:flex;
    flex-direction: column;
    align-item: flex-start;
    width: 300px;

`

export const LeftAlign = styled.div`

`

export const CenterAlign = styled.div`

`

export const RightAlign = styled.div`

`











