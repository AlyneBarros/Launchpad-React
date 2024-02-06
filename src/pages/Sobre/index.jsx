import styles from './Sobre.module.css'



function Sobre() {
    return (
        <section className={styles.sobre}>
             
             <div className={styles.bio}>
              
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Edson Maia</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Trabalho com desenvolvimento Web desde 2000.</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
   
                </div>
            </div>
   
        </section>
    )
}

export default Sobre