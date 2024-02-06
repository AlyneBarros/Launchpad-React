/* eslint-disable react/jsx-no-target-blank */

import styles from "./Contatos.module.css"
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin } from 'react-icons/bs'




function Contatos() {
  return (
    <>
    
     <section className={styles.contatos}>
     <h2>Contatos</h2>
     <h3>entre em contato</h3>
     <p>Para que possamos conversar mais sobre.</p>

     <div className={styles.ícones}>
      <a href='mailto:alynebarros02@gmail.com' target='_blank' rel='noopener nonreferrer'>
      <GoMail className={styles.icone} />
      </a>

      <a href='https://www.instagram.com/lylihbarros' target='_blank' rel='noopener nonreferrer'>
      <BsInstagram className={styles.icone} />
      </a>

      <BsYoutube className={styles.icone} />
      <BsGithub className={styles.icone} />
      <BsLinkedin className={styles.icone} />
     </div>
     </section>
  
    </>
  );
}

export default Contatos;
