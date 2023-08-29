import { ContainerGeral } from "../../StyledGlobal"
import { CardCadastro, DireitaCad, EsquerdaCard, ImagemLogo, ImgCadastro, TituloCadastro, TituloDireita } from "./styled"
import BarbieSpeak from "../../assets/BarbieSpeak.png"
import { Input, Textfield } from "../Login/styled"
import Botao from "../../components/Botao/Botao"
import LogoSpeakOut from "../../assets/LogoSpeakOut.png"

function Cadastro(){
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
                    <ImagemLogo scr={LogoSpeakOut}/>


                    <TituloDireita>
                        Cadastre-se
                    </TituloDireita>

                    <Textfield>
                    <Input type="text" name="nome" placeholder="Nome"></Input>
                    <Input type="tel" name="telefone" placeholder="Telefone"></Input>
                    <Input  type="text" name="email" placeholder="Email"></Input>
                    <Input  type="text" name="email" placeholder="Email"></Input>
                    </Textfield>

                    <Botao>
                        Entrar
                    </Botao>
                </DireitaCad>
            </CardCadastro>
        </ContainerGeral>
        </>
    )
}

export default Cadastro