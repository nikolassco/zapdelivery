import React from 'react';
import styles from './Header.module.css';
import imgLogo from '../../images/hamburguer-vintage-mao-desenhada-ilustracao-do-logotipo_43582-60.jpg';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.barblue}></div>
      <div className={styles.info}>
        <img className={styles.imgLogo} src={imgLogo} alt="" />
        <p className={styles.brand}>Lanches</p>
        <p>Sejam bem vindos</p>
        <p className={styles.contact}>Telefone: 27987654321</p>
      </div>
    </header>
  )
}

export default Header;
