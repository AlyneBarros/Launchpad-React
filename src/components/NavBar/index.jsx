import { useState } from 'react';
import styles from './NavBar.module.css';
import SuaLogo from 'C:/Users/abaraujo/projetos pessoais/portfolio/src/components/Header/imgLogo/UqfnLogo_fundoTransp.png';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        // Lógica para logout
        console.log('Logout realizado');
    };

    

    return (
        <header className={styles.nav}>
            <div className={styles.nav_brand}>
                <img id='logo' src={SuaLogo} alt="Logo da sua aplicação" />
            </div>
            <div className={styles.nav_menu}>
                <button onClick={handleToggleMenu} className={styles.menu_button}>
                    Menu
                </button>
                {menuOpen && (
                    <div className={styles.dropdown_menu}>
                    
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default NavBar;
