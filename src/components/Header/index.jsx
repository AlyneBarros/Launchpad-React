import styles from './Header.module.css'
import SuaLogo from 'C:/Users/abaraujo/projetos pessoais/portfolio/src/components/Header/imgLogo/UqfnLogo_fundoTransp.png'


function Header(){
return (
<header className={styles.headers}>
   <div className={styles.nav_brands}>
   <img  id= 'logo' src={SuaLogo} alt="Logo da sua aplicação" />
   </div>
   
    <nav>
    </nav>
</header>
)
}



export default Header