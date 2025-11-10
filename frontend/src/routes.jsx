import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from "./pages/inicio";
import Eventos from "./pages/eventos";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Sobre from "./pages/sobre/Index";
import LoginAdm from "./pages/admin/login";
import Editar from "./pages/admin/editar";
import Detalhe from "./pages/detalhes";
import Mudar from "./pages/admin/mudar";
import Add from "./pages/admin/adicionar";


export default function Navegacao(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path= "/" element= {<Inicio/>} />
    <Route path= "/eventos" element= {<Eventos/>} />
    <Route path= "/login" element= {<Login/>} />
    <Route path= "/sobre" element= {<Sobre/>} />
    <Route path= "/cadastro" element= {<Cadastro/>} />
    <Route path="/adminlogin" element={<LoginAdm/>}/>
    <Route path="/editar" element={<Editar/>}/>
    <Route path="/detalhe" element={<Detalhe/>}/>
    <Route path="/mudar" element={<Mudar/>}/>
    <Route path="/add" element={<Add/>}/>
    </Routes>
    </BrowserRouter>);
}