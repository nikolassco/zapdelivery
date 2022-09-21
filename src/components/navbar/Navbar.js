import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { usePedidoContext } from '../../hooks/usePedidoContext';

const Navbar = () => {
  const { setSearchTerm } = usePedidoContext();

  return (
    <div className={styles.navbar}>
      <nav className={styles.list}>
        <Link to="promotion" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Promoção</Link>
        <Link to="burguer" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Hambúrguer</Link>
        <Link to="premium" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Linha Premium</Link>
        <Link to="acai" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Açai</Link>
        <Link to="drinks" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Bebidas</Link>
        <Link to="hotdog" spy={true} smooth={true} offset={-136} duration={500} className={styles.item} >Hot Dog</Link>
      </nav>
      <div className={styles.search}>
        <input type="text" placeholder="Pesquise aqui" className={styles.input_search} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
  )
}

export default Navbar;
