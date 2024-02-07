import styles from './Header.module.css'
import SuaLogo from 'C:/Users/alyne/OneDrive/Imagens/Área de Trabalho/Documentos/portifolio/src/components/Header/imgLogo/UqfnLogo_fundoTransp.png'


function Header(){
return (
<header className={styles.header}>
   <div className={styles.nav_brand}>
   <img  id= 'logo' src={SuaLogo} alt="Logo da sua aplicação" />
   </div>
   
    <nav>
    </nav>
</header>
)
}



export default Header