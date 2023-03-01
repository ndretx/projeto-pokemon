import styled from "styled-components";

interface Props{
    color: string;
}




export const Container = styled.div<Props>`
    display: flex;
    align-items: center;
    height: 1000px;
    overflow:hidden;
    justify-content: center;
    background-color: ${c => c.color};
    text-transform: capitalize;

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
    width: 400px;
    background-color: transparent;
    justify-content: center;
    border: 1px solid black;
    border-radius: 2rem;
    padding: 3rem;


    img{
        
        
        max-height:200px;
        margin-right: 2rem;
        

    }
    hr{
        width: 250px;
        height: 2px;
        border-color: black;
        border:none;                                                              
    }
    .pokemon-name{
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        text-transform: capitalize;
        font-size: 2.0em;
    }


` 
export const Details = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width: 300px;

`;

export const LeftAlign = styled.div`
    align-self:flex-start;
`;
export const CenterAlign = styled.div`
    align-self:center; 
    
`;
export const RightAlign = styled.div`
    align-self:flex-end;
    
`;








