import { PostContainer } from "../Feed/styled"
import profilecircle from "../../assets/profilecircle.png"
import { EscrevaAquiArea, ImagemProfire, PostBoxTexto, LocalDeEscrita, BotaoPublicar, PublicacaoPost, CardSuperior, CardInferior, TextoAcontecendo } from "./styled"
import { ContainerCenter, ContainerGeradl2222, ContainerGeral, GeralPost } from "../../StyledGlobal"
import Header from "../../components/Header/Header"

function Publicacao(){
    return(
        <>
        <GeralPost>
        <Header/>
        
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