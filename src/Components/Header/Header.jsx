import logo from "../../assets/viagens.jpg";
import lupa from "../../assets/lupa.png";
import styles from "../../styles/Header.module.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.content}>
      <Link to="./" >
      <img className={styles.logo} src={logo} alt="" />
      </Link>


      <nav className={styles.menu}>
        <ul>

       <li><Link to=".">Home</Link></li> 
       <li><Link to="Escocia" >Escócia</Link></li> 
       <li><Link to="Grand">Grand Canyon</Link></li> 
       <li><Link to="China">Muralhas da China</Link></li> 
       <li><Link to="Arruba">Aruba</Link></li> 

        </ul>
      </nav>

      <div className={styles.login}>
        <input type="search" />
      </div>

      <img className={styles.lupa} src={lupa} alt="" />
    </header>
  );
}
