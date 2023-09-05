
import { BotaoFeed, ContainerFeed, ImagemFeed, PostContainer } from "./styled"
import Header from "../../components/Header/Header"
import { ContainerGeral } from "../../StyledGlobal"
import { useNavigate } from "react-router-dom"
import maisBotao from "../../assets/maisBotao.png"

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

               </PostContainer>

               <PostContainer>
                     
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