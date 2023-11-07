import { ConatinerHeader, ImagemHeader, Pesquisar } from "../Header/styled";
import IconeMenu from "../../assets/IconeMenu.png"
import { BotaoMenu, BotaoSlideBar, IconesMenu, ImagemMenu, MenuLogo, Menutitulo, InputImagem } from "./styled";

import { useNavigate } from "react-router-dom";
import { BotaoLogoOut } from "../../pages/Feed/styled";
import { useEffect } from "react";
import iconHouse from "../../assets/iconHouse.png"
import iconSeta from "../../assets/iconSeta.png"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import lupaIcon from "../../assets/lupaIcon.png"
import style from "./style.css";

function Menu() {

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
        navigate('/login')
    }
    
    const gotoPrincipal = ()=>{
        navigate('/feed')
    }

    const goToPublicacao =()=>{
        navigate('/publicacao')
    }


    return (
        <>
            <ConatinerHeader>
                
                <button class="hamburguerButton"><ImagemMenu src={IconeMenu}/></button>
                    <nav class="menulateral">
                        {/* <img src={IconeMenu} /> */}

                    <MenuLogo src={LogoSpeakOut}/>

                        <ul>
                            <li class="item-menu">
                                  <BotaoSlideBar>
                                    <IconesMenu src={iconSeta}/>
                                    <span class="linktxt">Disque Out!</span>    
                                    </BotaoSlideBar>                                
                            </li>
                        </ul>
                        

                        <Menutitulo>FEED</Menutitulo>
                        <ul>
                            <li class="item-menu">
                                   <BotaoSlideBar onClick={gotoPrincipal}>
                                        <IconesMenu src={iconHouse}/>
                                        <span class="linktxt">Página inicial</span>
                                    </BotaoSlideBar>
                                
                            </li>
                            <li class="item-menu">
                               <BotaoSlideBar onClick={goToPublicacao}>
                                            <IconesMenu src={iconSeta}/>
                                            <span class="linktxt">Publicar</span>
                                </BotaoSlideBar>
                            </li>
                        </ul>
                        
                        <Menutitulo>ASSUNTOS</Menutitulo>
                    </nav>
                    <div class="seila">
                        <div class="inputItem">
                            <Pesquisar type="text" name="texto" placeholder="Busca no SpeakOut" />
                            <InputImagem src={lupaIcon} />
                        </div>
                        <BotaoMenu onClick={handleLogout}>Logoout</BotaoMenu>

                        <ImagemHeader src={BarbieSpeak}/>
                       
                    </div>
                

                
            </ConatinerHeader>
        </>
    )
}

export default Menu