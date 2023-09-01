import { useNavigate } from "react-router-dom"
import { BotaoEntrar } from "./styled"

function Feed(){
    const navigate = useNavigate()

    const goingLogin = ()=>{
        navigate('/login')
    }


    return(
        <>
        oi

        <BotaoEntrar onClick={goingLogin}>
            Entrar
        </BotaoEntrar>
        
        </>
    )
}

export default Feed