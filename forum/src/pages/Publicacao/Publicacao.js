import { PostContainer } from "../Feed/styled"
import profilecircle from "../../assets/profilecircle.png"
import { EscrevaAquiArea, ImagemProfire, PostBoxTexto, LocalDeEscrita, BotaoPublicar, ContainerPubli } from "./styled"
import { GeralPost } from "../../StyledGlobal"
import Header from "../../components/Header/Header"

function Publicacao(){
    return(
        <>
        <GeralPost>
            <Header/>

            <PostContainer>
                <ImagemProfire src={profilecircle}/>
                <PostBoxTexto>
                  fulana
                </PostBoxTexto>

                <BotaoPublicar>Publicar</BotaoPublicar>

                <LocalDeEscrita>
                  <EscrevaAquiArea> </EscrevaAquiArea>
                </LocalDeEscrita>
            </PostContainer>
            
        </GeralPost>
        </>
    )
}

export default Publicacao