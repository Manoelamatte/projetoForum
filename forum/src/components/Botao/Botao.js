import { useNavigate } from "react-router-dom"
import { BotaoRosa } from "./styled"

function Botao(){

    
    const navigate = useNavigate()

    const goToFeed = ()=>{
        navigate('/feed')
    }

    return(
        <>
        <BotaoRosa onClick={goToFeed}>
            Entrar
        </BotaoRosa>
        </>
    )
}

export default Botao