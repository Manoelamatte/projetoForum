import { PostContainer } from "../Feed/styled"
import profilecircle from "../../assets/profilecircle.png"
import { EscrevaAquiArea, ImagemProfire, PostBoxTexto, LocalDeEscrita } from "./styled"
import { ContainerGeral } from "../../StyledGlobal"
import Header from "../../components/Header/Header"

function Publicacao(){
    return(
        <>
        <ContainerGeral>
            <Header/>
            <PostContainer>
                <ImagemProfire src={profilecircle}/>
                <PostBoxTexto>
                  fulana
                </PostBoxTexto>

                <LocalDeEscrita>
                  <EscrevaAquiArea> </EscrevaAquiArea>
                </LocalDeEscrita>
            </PostContainer>
        </ContainerGeral>
        </>
    )
}

export default Publicacao