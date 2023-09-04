
import { ContainerFeed, ContainerPost, PostContainer } from "./styled"
import Header from "../../components/Header/Header"
import { ContainerGeral } from "../../StyledGlobal"


function Feed(){
 

    return(
        <>
          <ContainerGeral>
          <Header/>

        <ContainerFeed>

             <PostContainer>
                    OI
            </PostContainer>

            <PostContainer>
                   OI
            </PostContainer>

            <PostContainer>
                   OI
            </PostContainer>

         </ContainerFeed>

        </ContainerGeral>
        </>
    )
}

export default Feed