import React from "react"
import { BotaoRosa } from "../../components/Botao/styled"
import { ContainerGeral } from "../../StyledGlobal"
import {CardLogin, DireitaLogin, EsquerdaLogin, H1, H3, H4, ImagDireira, Input, Paragrafo, Textfield } from "./styled"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    const goToFeed = ()=>{
        navigate('/feed')
    }

    return(
        <>
        <ContainerGeral>
            <CardLogin>

                <EsquerdaLogin>
                    <H1>
                        Bem vindo
                        de volta!
                    </H1>

                    <H3>
                         Acesse a sua conta agora mesmo!
                    </H3>

                

                </EsquerdaLogin>

 {/* ---------------------------------------------------------------------------------------------------------- */}

                <DireitaLogin>

                <ImagDireira src={LogoSpeakOut}/>                    

                    <H4>
                        Login
                    </H4>

                    <Textfield>
                    <Input type="text" name="email" placeholder="Email"></Input>
                    <Input type="password" name="senha" placeholder="Senha"></Input>
                    </Textfield>


                   <BotaoRosa onClick={goToFeed}>
                     Entrar
                   </BotaoRosa>

                   <Paragrafo>
                      Não tem uma conta? 
                   </Paragrafo>
                </DireitaLogin>

            </CardLogin>
        </ContainerGeral>
        </>
    )
}

export default Login