import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from './pages/Sobre';
import Projetos from './pages/Projetos';
import Contatos from './pages/Contatos';
import Page404 from "./pages/Page404";
import Header from "./components/Header";
import Container from "./components/Container";
import Footer from "./components/Footer";
import useAuth from "./components/hooks/userAuth";


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};


function AppRoutes() {
  return (
    <BrowserRouter>
    <Header />
      <Container>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        <Route path="/sobre" element={<Sobre />}></Route>
        <Route path="/projetos" element={<Projetos />}></Route>
        <Route path="/contatos" element={<Contatos />}></Route>
        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
