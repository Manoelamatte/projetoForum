import { ContainerGeral } from "../../StyledGlobal"
import { CardCadastro, DireitaCad, EsquerdaCard, ImagemLogo, ImagemSpeakCadastro, ImgCadastro, TituloCadastro, TituloDireita } from "./styled"
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import { ImagDireira, Input, Textfield } from "../Login/styled"
import Botao from "../../components/Botao/Botao"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"
import { useNavigate } from "react-router-dom"

function Cadastro(){

    const navigate = useNavigate()

    const goToFeed = ()=>{
        navigate('/feed')
    }

    return(
        <>
        <ContainerGeral>
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

                    <Textfield>
                    <Input type="text" name="nome" placeholder="Nome"></Input>
                    <Input type="tel" name="telefone" placeholder="Telefone"></Input>
                    <Input  type="text" name="email" placeholder="Email"></Input>
                    <Input  type="text" name="email" placeholder="Email"></Input>
                    </Textfield>

                   <Botao/>
                </DireitaCad>
            </CardCadastro>
        </ContainerGeral>
        </>
    )
}

export default Cadastro