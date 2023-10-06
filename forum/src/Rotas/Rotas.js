import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "../pages/Cadastro/Cadastro"
import Erro from "../pages/Erro/Erro"
import Feed from "../pages/Feed/Feed"
import Login from "../pages/Login/Login"
import Publicacao from "../pages/Publicacao/Publicacao"


function Rotas(props){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Login/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="feed" element={<Feed news={props.news} setNews={props.setNews}/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="publicacao" element={<Publicacao/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas