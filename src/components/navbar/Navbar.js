import { useRef } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { usePedidoContext } from '../../hooks/usePedidoContext';

const Navbar = () => {
  const { setSearchTerm } = usePedidoContext();

  const ref = useRef(null);

  // teste

  var lastScrollTop = 0;

  window.addEventListener('scroll', function (e) {

    // mesma posição
    if (e.scrollY === lastScrollTop) return;

    // e.scrollY < lastScrollTop ? ref.current.style = 'navbarHidden' : ref.current.style = "navbar";

    console.log(this.scrollY < lastScrollTop ? "Cima" : "Baixo");
    console.log(lastScrollTop);
    console.log(this.scrollY);

    lastScrollTop = this.scrollY;
    console.log(lastScrollTop);

  }, true);

  //

  return (
    <div className={styles.navbar} ref={ref}>
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
