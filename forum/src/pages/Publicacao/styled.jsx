import styled from "styled-components"


export const PublicacaoPost = styled.div`
  width: 70vw;
  height: 55vh;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  margin: 100px;
  border-radius: 20px;
`

export const CardSuperior = styled.div`
    height: 10vh;
    width: 70vw;
    justify-content: space-around;
    display: flex;
    align-items: center;
    margin-top: 05px;
`

export const CardInferior = styled.div`
    height: 40vh;
    width: 55vw;
    flex-direction: column;
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

export const HamburguerButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
`

export const ImagemProfire = styled.img`
    height: 30px;
    padding: 10px;
`

export const PostBoxTexto = styled.p`
    color: rgba(180, 0, 92, 1);
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-size: 14px;
    margin-right: 650px;
`

// export const LocalDeEscrita = styled.div`
//     padding-left: 40px;
//     padding-right: 40px;
//     background-color: blue;
// `

export const EscrevaAquiArea = styled.input`
    background-color: rgba(255, 212, 234, 1);
    color: rgba(180, 0, 92, 1);
    resize: none;
    width: 100%;
    height: 30vh;
    border-radius: 10px;
    /* outline: none; */
    border: none;
    font-family: "Poppins", sans-serif;

    &:: placeholder{
        padding: 20px;
        color: rgba(180, 0, 92, 1);
        font-weight: bold;
    }
`

export const TextoAcontecendo = styled.p`
    color: rgba(180, 0, 92, 1);
    font-weight: bold;
    font-family: "Poppins", sans-serif;
    font-size: 15pt;
`

export const BotaoPublicar = styled.button`
    height: 30px;
    width: 140px;
    background-color: rgba(236, 67, 153, 1);
    color: white;
    border-radius: 30px;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 17px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    margin-right: 40px;
`
