import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projetos from './pages/Projetos';
import Page404 from "./pages/Page404";
import Container from "./components/Container";
import useAuth from "./components/hooks/userAuth";


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};


function AppRoutes() {
  return (
    <BrowserRouter>
      <Container>
      <Routes> 
        <Route path="/" element={<Home />}></Route>
        
        <Route path="/projetos" element={<Projetos />}></Route>

        <Route path="*" element={<Page404 />}></Route>
      </Routes>
      </Container>
    
    </BrowserRouter>
  );
}

export default AppRoutes;
