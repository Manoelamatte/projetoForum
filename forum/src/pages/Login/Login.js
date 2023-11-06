import React, { useState } from "react"
import { BotaoRosa } from "../../components/Botao/styled"
import { ContainerGeradl2222 } from "../../StyledGlobal"
import {BotaoIrCadastro, CardLogin, DireitaLogin, EsquerdaLogin, H1, H3, H4, ImagDireira, Input, Paragrafo, Textfield } from "./styled"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Login(){

    // api

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate()

    const saveUserinfoLocalStorage = (token, email, id)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
        localStorage.setItem('id', id)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()


        const credencials = {email, senha}

        axios.post('http://localhost:3008/api/auth/login', credencials,{
            headers:{
                'Content-Type': 'application/json',

            }
        })
        .then(response =>{
            alert(response.data.message)
             // recuperando informações depois que usario logou
            const token = response.data.data[0].token;
            const email = response.data.data[0].email;
            const id = response.data.data[0].id;

            saveUserinfoLocalStorage(response.data.token)
            navigate('/feed')
        })
        .catch(error => console.log(error))
    }
 
    
// inicio rotas


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

                    <form onSubmit={handleSubmit}>
                    <Textfield>
                    <Input type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                    


                    <Input type="password" name="senha" placeholder="Senha" value={senha} onChange={(e)=>setSenha(e.target.value)}></Input>
                    </Textfield>

                    <BotaoRosa type="submit">
                     Entrar
                    </BotaoRosa> 
                    </form>


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