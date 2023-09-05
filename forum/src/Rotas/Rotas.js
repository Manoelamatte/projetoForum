import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cadastro from "../pages/Cadastro/Cadastro"
import Erro from "../pages/Erro/Erro"
import Feed from "../pages/Feed/Feed"
import Login from "../pages/Login/Login"
import Publicacao from "../pages/Publicacao/Publicacao"


function Rotas(){
    return(
        <>
        <BrowserRouter>
            <Routes>
                <Route index element ={<Feed/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="cadastro" element={<Cadastro/>}/>
                <Route path="publicacao" element={<Publicacao/>}/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default Rotas