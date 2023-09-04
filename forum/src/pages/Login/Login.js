import React from "react"
import { BotaoRosa } from "../../components/Botao/styled"
import { ContainerGeral } from "../../StyledGlobal"
import {BotaoIrCadastro, CardLogin, DireitaLogin, EsquerdaLogin, H1, H3, H4, ImagDireira, Input, Paragrafo, Textfield, TextoeBotao } from "./styled"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()

    const goToFeed = ()=>{
        navigate('/feed')
    }

    const goToCadastro = ()=>{
        navigate('/cadastro')
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

                        <BotaoIrCadastro onClick={goToCadastro}>
                        Cadastre-se
                        </BotaoIrCadastro>

                    </Paragrafo>

                 
                </DireitaLogin>

            </CardLogin>            
        </ContainerGeral>
        </>
    )
}

export default Login