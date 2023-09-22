import styled, { createGlobalStyle } from "styled-components"
import FundoB from "./assets/FundoB.png"
import fundoBarbie from "./assets/fundoBarbie.png"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
    }

`
export const ContainerGeral = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%; 
    background-image:url(${FundoB});
`

export const ContainerGeradl2222 = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh; 
    background-image: url(${fundoBarbie});
`

export const GeralPost = styled.div`
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh; 
    background-image:url(${FundoB});
`

export const ContainerCenter = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`