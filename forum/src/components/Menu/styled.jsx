import styled from "styled-components"

export const IconesMenu = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
`

export const TituloMenu = styled.h2`
    background-color:  rgb(228, 0, 0);
    color: white;
    width: 65%;
    padding-left: 10px; 
`

export const BotaoMenu = styled.button`
    border: none;
    width: 12vw;
    padding: 11px;
    align-items: center;
    justify-content: start;
    display: flex;
    cursor: pointer;
    font-size: 13pt;
    color:  rgba(180, 0, 92, 1);
    background-color: rgba(255, 212, 234, 1);
    border-radius: 40px;
    justify-content: center;
    font-weight: bold;
    margin-left: 20%;

    &:hover{
        background-color: #ffb4b4;
    }
`
export const Menutitulo = styled.p`
     color: rgba(180, 0, 92, 1);
    font-family: 'Poppins, sans-serif';
    font-size: 16px;
    font-weight: 700;
    margin-left: 41px;
`
export const ImagemMenu = styled.img`
    width: 70px;
    height: 40px;
    margin: 20px;
`
export const MenuLogo = styled.img`
    height: 80px;
    weight: 80px;
    margin: 30px;
`

export const BotaoSlideBar = styled.button`
    border: none;
    width: 100vw;
    padding: 10px;
    align-items: center;
    justify-content: start;
    display: flex;
    cursor: pointer;
    color:  #EC4399;
    background-color: transparent;

    &:hover{
        background-color:  #B4005C;;
       
    }
`

export const InputImagem = styled.img`
    position: absolute;
    left: 30px;
    /* width: 12px; */
    top: 35px;
`