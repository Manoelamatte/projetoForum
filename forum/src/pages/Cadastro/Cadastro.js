import { ContainerGeradl2222 } from "../../StyledGlobal"
import { CardCadastro, DireitaCad, EsquerdaCard, ImagemLogo, ImagemSpeakCadastro, ImgCadastro, TituloCadastro, TituloDireita } from "./styled"
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import { ImagDireira, Input, Textfield } from "../Login/styled"
import Botao from "../../components/Botao/Botao"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

function Cadastro(){

    const navigate = useNavigate()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const saveUserinfoLocalStorage = (token)=>{
        localStorage.setItem('token', token)
        localStorage.setItem('email', email)
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()

        const credencials = {name,email,password}

        axios.post('http://localhost:3008/api/user/create', credencials,{
            headers:{
                'Content-Type': 'application/json',
            }
        })
        .then(response =>{
            alert(response.data.message)
            saveUserinfoLocalStorage(response.data.token)
            navigate('/feed')
        })
        .catch(error => console.log(error))
    }


    return(
        <>
        <ContainerGeradl2222>
            <CardCadastro>
                <EsquerdaCard>
                    
                    <TituloCadastro>
                        Oi, Barbie
                    </TituloCadastro>
                    
                    <ImgCadastro src={BarbieSpeak}/>
                </EsquerdaCard>

                <DireitaCad>

                    <ImagemSpeakCadastro  src={LogoSpeakOut}/>

                    <TituloDireita>
                        Cadastre-se
                    </TituloDireita>

                    <form>
                    <Textfield>
                       
                    <Input type="text" name="nome" placeholder="Nome" value={name} onChange={(e)=>setName(e.target.value)}/>

                    <Input  type="text" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

                    <Input  type="password" name="password" placeholder="Senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </Textfield>

                   <Botao onClick={handleSubmit}/>
                   </form>
                </DireitaCad>
            </CardCadastro>
        </ContainerGeradl2222>
        </>
    )
}

export default Cadastro