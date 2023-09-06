import React, { useState } from "react"
import { BotaoRosa } from "../../components/Botao/styled"
import { ContainerGeradl2222 } from "../../StyledGlobal"
import {BotaoIrCadastro, CardLogin, DireitaLogin, EsquerdaLogin, H1, H3, H4, ImagDireira, Input, Paragrafo, Textfield, TextoeBotao } from "./styled"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"
// import axios from "axios"

function Login(){

    // api

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const handleSubmit = (event)=>{

        const credencials = {email, senha}

        axios.post()
    }
 
    
// inicio rotas

    const navigate = useNavigate()

    const goToFeed = ()=>{
        navigate('/feed')
    }

    const goToCadastro = ()=>{
        navigate('/cadastro')
    }

    return(
        <>
       <ContainerGeradl2222>
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
                    <Input type="text" name="email" placeholder="Email" value={email}></Input>
                    <Input type="password" name="senha" placeholder="Senha" value={senha}></Input>
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
            </ContainerGeradl2222>
        </>
    )
}

export default Login