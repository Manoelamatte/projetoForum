
import { BotaoFeed, ContainerFeed, ImagemFeed, PostContainer } from "./styled"
import Header from "../../components/Header/Header"
import { ContainerGeral } from "../../StyledGlobal"
import { useNavigate } from "react-router-dom"
import maisBotao from "../../assets/maisBotao.png"
import profilecircle from "../../assets/profilecircle.png" 
import { ImagemProfire, PostBoxTexto } from "../Publicacao/styled"

function Feed(){

    const navigate = useNavigate()

    const goToPubli = ()=>{
        navigate('/publicacao')
    }

    return(
        <>
          <ContainerGeral>
              <Header/>
              <ContainerFeed>

               <PostContainer>
                <ImagemProfire src={profilecircle}/>
                <PostBoxTexto>fulana</PostBoxTexto>
               </PostContainer>

               <PostContainer>
               <ImagemProfire src={profilecircle}/>
               </PostContainer>
        
               <PostContainer>
                <ImagemProfire src={profilecircle}/>
               </PostContainer>

        
               <BotaoFeed onClick={goToPubli}>
                     <ImagemFeed src={maisBotao}/>
               </BotaoFeed> 

        
              

               </ContainerFeed>
        </ContainerGeral>
        </>
    )
}

export default Feed