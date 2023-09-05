import { useNavigate } from "react-router-dom";
import { ConatinerHeader, ImagemHeader, Pesquisar } from "./styled";
import { BotaoEntrar } from "../../pages/Feed/styled";
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import IconeMenu from "../../assets/IconeMenu.png"

function Header(){

    const navigate = useNavigate()

    const goingLogin = ()=>{
        navigate('/login')
    }


    return(
        <>
        <ConatinerHeader>

            <ImagemHeader src={IconeMenu}/>

            <Pesquisar type="text" name="texto" placeholder="Busca no SpeakOut"/>
           
            <BotaoEntrar onClick={goingLogin}>
                Entrar
            </BotaoEntrar>

            <ImagemHeader src={BarbieSpeak}/>
          
        </ConatinerHeader>
        </>
    )
}

export default Header