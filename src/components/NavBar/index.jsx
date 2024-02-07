import styles from './NavBar.module.css'
import SuaLogo from 'C:/Users/abaraujo/projetos pessoais/portfolio/src/components/Header/imgLogo/UqfnLogo_fundoTransp.png'


function NavBar(){
return (
<header className={styles.nav}>
   <div className={styles.nav_brand}>
   <img  id= 'logo' src={SuaLogo} alt="Logo da sua aplicação" />
   </div>
   
    <nav>
    </nav>
</header>
)
}



export default NavBar