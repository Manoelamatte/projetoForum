import { PostContainer } from "../Feed/styled"
import profilecircle from "../../assets/profilecircle.png"
import { EscrevaAquiArea, ImagemProfire, PostBoxTexto, LocalDeEscrita, BotaoPublicar, PublicacaoPost, CardSuperior, CardInferior, TextoAcontecendo } from "./styled"
import { ContainerCenter, ContainerGeradl2222, ContainerGeral, GeralPost } from "../../StyledGlobal"
import Header from "../../components/Header/Header"
import Menu from "../../components/Menu/Menu"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Publicacao(){

  const navigate = useNavigate()

  const [descricao, setDescricao] = useState("");

  const handleComment = async (e) => {
    const data = {
        descricao,
        imagem: null,
        idUsuario: localStorage.getItem('id')
    };
    console.log(data);
    const response = await axios.post('http://localhost:3008/api/post/create', data);
    console.log(response.data);
    if (response.data.success) {
        alert('Deu certo cupinxa!');
        navigate('/principal');
    } else {
        alert('Deu errado!')
    }

} 

    return(
        <>
        <GeralPost>
        <Menu/>
        
        <ContainerCenter>
            <PublicacaoPost>

            <CardSuperior>
              <ImagemProfire src={profilecircle}/>

              <PostBoxTexto>
                fulana
              </PostBoxTexto>

              <BotaoPublicar>
                Publicar
              </BotaoPublicar>
            </CardSuperior>

            <CardInferior>

              <TextoAcontecendo>
                O que está acontecendo?
              </TextoAcontecendo>
                  
                <EscrevaAquiArea type="text" name="texto" placeholder="Escreva aqui...">
                  
                </EscrevaAquiArea>
                 
            </CardInferior>

            </PublicacaoPost>
         </ContainerCenter>
        </GeralPost>

        </>
    )
}

export default Publicacao