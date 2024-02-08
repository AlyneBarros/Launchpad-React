// Projetos.js


import NavBar from '../../components/NavBar';
// import NavProjetos from '../../components/NavProjetos'
// import Card from '../../components/Card';
import styles from './Projetos.module.css';

function Projetos() {
    // const projetos = [
    //     {
    //         name: "Projeto 1",
    //         description: "Descrição do Projeto 1",
    //         url: "/projeto-1" // URL da primeira aplicação
    //     },
    //     {
    //         name: "Projeto 2",
    //         description: "Descrição do Projeto 2",
    //         url: "/projeto-2" // URL da segunda aplicação
    //     },
    //     {
    //         name: "Projeto 3",
    //         description: "Descrição do Projeto 3",
    //         url: "/projeto-3" // URL da terceira aplicação
    //     }
    // ];

    return (
        <>
            <NavBar />
        {/* <NavProjetos /> */}
        <section className={styles.projeto_container}>
            {/* <h2 className={styles.title}>Projetos</h2>
            <div className={styles.card_container}>
                <div id="projeto1" className={styles.card_row}>
                    <Card
                        name={projetos[0].name}
                        description={projetos[0].description}
                        html_url={projetos[0].url}
                    />
                </div>
                <div id="projeto2" className={styles.card_row}>
                    {projetos.slice(1).map((projeto, index) => (
                        <Card
                            key={index}
                            name={projeto.name}
                            description={projeto.description}
                            html_url={projeto.url}
                        />
                    ))}
                </div>
            </div> */}
            </section>
        </>
    )
}

export default Projetos;
