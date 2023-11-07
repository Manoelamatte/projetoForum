
import { BotaoFeed, BotaoLogoOut, ContainerFeed, ImagemFeed, PostContainer } from "./styled"
import Header from "../../components/Header/Header"
import { ContainerGeral } from "../../StyledGlobal"
import { useNavigate } from "react-router-dom"
import maisBotao from "../../assets/maisBotao.png"
import profilecircle from "../../assets/profilecircle.png" 
import { ImagemProfire, PostBoxTexto } from "../Publicacao/styled"
import { useEffect, useState } from "react"
import Menu from "../../components/Menu/Menu"
import Card from "../../components/Card/Card"
import axios from "axios"

function Feed(){

    const navigate = useNavigate()

    
    const goToPubli = ()=>{
        navigate('/publicacao')
    }

    const [postsList, setPostsList] = useState([]);
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3008/api/posts');
        setPostsList(response.data.data);
    };

    useEffect(() => {
        fetchData();
    }, []);


    return(
        <>
          <ContainerGeral>
              <Menu/>
              <ContainerFeed>

                {postsList.map((post)=>{
                    return<>
               <PostContainer>
                    <ImagemProfire src={profilecircle}/>
                    <PostBoxTexto>
                     {post.descricao}
                    </PostBoxTexto>
               </PostContainer>
               </>
                })}

               {/* <PostContainer>
                    <ImagemProfire src={profilecircle}/>
               </PostContainer> */}
        
               {/* <PostContainer>
                     <ImagemProfire src={profilecircle}/>
               </PostContainer>

               <PostContainer>
                    <ImagemProfire src={profilecircle}/>
               </PostContainer>  */}

            {/* {/* {postsList.map((post)={
            
            })} */}
        
               <BotaoFeed onClick={goToPubli}>
                     <ImagemFeed src={maisBotao}/>
               </BotaoFeed> 
               </ContainerFeed>
        </ContainerGeral>
        </>
    )
}

export default Feed