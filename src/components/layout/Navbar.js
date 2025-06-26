import { Link } from "react-router-dom";

import Container from "./Container";
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
            <Container>
                <Link to='/'>
                    <img /*src={logo}*/ alt="Victor" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Meu Portfólio</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/projects'>Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/skills'>Habilidades</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/about'>Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
  );
} export default Navbar;