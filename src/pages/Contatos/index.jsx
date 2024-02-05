import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import styles from "./Contatos.module.css"
import { GoMail } from 'react-icons/go'



function Contatos() {
  return (
    <>
      <Header />
     <Container>
     <section className={styles.contatos}>
     <h2>Contatos</h2>
     <h3>entre em contato</h3>
     <p>Para que possamos conversar mais sobre.</p>

     <div className={styles.ícones}>
      <GoMail />
     </div>
     </section>
     </Container>
      <Footer />
    </>
  );
}

export default Contatos;
