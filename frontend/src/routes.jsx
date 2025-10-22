import { BrowserRouter, Routes, Route } from "react-router";

import Inicio from "./pages/inicio";
import Eventos from "./pages/eventos";
import Login from "./pages/login";
import Cadastro from "./pages/cadastro";
import Sobre from "./pages/sobre/Index";

export default function Navegacao(){
    return(
    <BrowserRouter>
    <Routes>
    <Route path= "/" element= {<Inicio/>} />
    <Route path= "/eventos" element= {<Eventos/>} />
    <Route path= "/login" element= {<Login/>} />
    <Route path= "/sobre" element= {<Sobre/>} />
    <Route path= "/cadastro" element= {<Cadastro/>} />

    </Routes>
    </BrowserRouter>);
}