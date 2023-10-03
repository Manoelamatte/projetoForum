import { ConatinerHeader, ImagemHeader, Pesquisar } from "../Header/styled";
import IconeMenu from "../../assets/IconeMenu.png"
import { BotaoMenu, IconesMenu, ImagemMenu, MenuLogo, Menutitulo } from "./styled";
import style from "./style.css";
import { useNavigate } from "react-router-dom";
import { BotaoLogoOut } from "../../pages/Feed/styled";
import { useEffect } from "react";
import iconHouse from "../../assets/iconHouse.png"
import iconSeta from "../../assets/iconSeta.png"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Menu() {

    const navigate = useNavigate()


    return (
        <>
            <ConatinerHeader>
                
                <button class="hamburguerButton"><ImagemMenu src={IconeMenu}/></button>
                    <nav class="menulateral">
                        {/* <img src={IconeMenu} /> */}

                    <MenuLogo src={LogoSpeakOut}/>

                        <ul>
                            <li class="item-menu">
                                <a href="#">
                                   <IconesMenu src={iconSeta}/>
                                    <span class="linktxt">Disque Out!</span>
                                </a>
                            </li>
                        </ul>
                        

                        <Menutitulo>FEED</Menutitulo>
                        <ul>
                            <li class="item-menu">
                                <a href="#">
                                   <IconesMenu src={iconHouse}/>
                                    <span class="linktxt">Página inicial</span>
                                </a>
                            </li>
                            <li class="item-menu">
                                <a href="#">
                                    <span class="icones"><IconesMenu src={iconHouse} class="icones-menu-disque" />
                                        <img src="./assets/setinhabranca.png" class="icones-menu-disque-hover" /></span>
                                    <span class="linktxt">Popular</span>
                                </a>
                            </li>
                        </ul>
                        
                        <Menutitulo>ASSUNTOS</Menutitulo>
                    </nav>
                    <div class="seila">
                        <div class="inputItem">
                            {/* <input type="text" placeholder="Buscar no SpeakOut" class="pesquisar" /> */}
                            <Pesquisar type="text" name="texto" placeholder="Busca no SpeakOut" />
                            <img src="./assets/lupaIcon.png" class="inputImagem" />
                        </div>
                        <button class="entrar">Entrar</button>
                       
                    </div>
                

                
            </ConatinerHeader>
        </>
    )
}

export default Menu