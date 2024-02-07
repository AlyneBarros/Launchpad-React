import { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import styles from "./Home.module.css";
import Header from "../../components/Header";

const Signin = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("pt"); // Estado para armazenar a linguagem selecionada

  const handleLogin = () => {
    if (!usuario || !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(usuario, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home");
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
    // Lógica para alterar o idioma do site de acordo com a linguagem selecionada
  };

  return (
    <>
      <Header />
      <section className={styles.container}>
        <form>
          <div className={styles.languageSelect}>
            <select
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
              style={{ width: "268px", height: "30px", borderRadius: "5px" }}
            >
              <option value="en">English</option>
              <option value="pt">Português</option>
            </select>
          </div>
          <Input
            type="text"
            placeholder="Digite seu Usuário"
            value={usuario}
            onChange={(e) => [setUsuario(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Digite sua Senha"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError("")]}
          />
          <p className={styles.labelError}>{error}</p>
          <Button onClick={handleLogin}>Entrar</Button>
        </form>
      </section>
    </>
  );
};

export default Signin;
