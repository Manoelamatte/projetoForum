import styled from "styled-components"

export const ContainerFeed = styled.div`
    grid-area: container;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
     display: flex;
    flex-direction: column;
    margin: 30px;
`

export const BotaoEntrar = styled.button`
    width: 10.313rem;
    height: 2.5rem;
    flex-shrink: 0;
    background: rgba(255, 212, 234, 1);;
    color: rgba(180, 0, 92, 1);
    border-radius: 1.875rem;
    text-align: center;
    font-family: Poppins;
    font-size: 1.25rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
`

export const PostContainer = styled.div`
  width: 50vw;
  height: 20vh;
  background-color: white;
  border-radius: 0.938rem;
  margin: 10px;
`