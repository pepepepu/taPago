import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Abertura,
  Entrar,
  CriarConta,
  EsqueciSenha,
  Inicio,
  RaioX,
  MinhasContas,
  MeuPerfil,
  Ajustes,
} from "../pages";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Abertura />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/criar-conta" element={<CriarConta />} />
        <Route path="/esqueci-senha" element={<EsqueciSenha />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/raio-x" element={<RaioX />} />
        <Route path="/minhas-contas" element={<MinhasContas />} />
        <Route path="/meu-perfil" element={<MeuPerfil />} />
        <Route path="/ajustes" element={<Ajustes />} />
      </Routes>
    </BrowserRouter>
  );
}
