
import { BotaoFeed, BotaoLogoOut, ContainerFeed, ImagemFeed, PostContainer } from "./styled"
import Header from "../../components/Header/Header"
import { ContainerGeral } from "../../StyledGlobal"
import { useNavigate } from "react-router-dom"
import maisBotao from "../../assets/maisBotao.png"
import profilecircle from "../../assets/profilecircle.png" 
import { ImagemProfire, PostBoxTexto } from "../Publicacao/styled"
import { useEffect } from "react"

function Feed(){

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/')
        }
    }, [navigate])

    const handleLogout = ()=>{
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/home')
    }


    const goToPubli = ()=>{
        navigate('/publicacao')
    }

    return(
        <>
          <ContainerGeral>
              <Header/>
              <ContainerFeed>

                <BotaoLogoOut  onClick={handleLogout}>
                Logoout
                </BotaoLogoOut>

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