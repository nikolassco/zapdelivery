import React from 'react'
import styles from "./Menu.module.css";
import ProductCover from '../productcover/ProductCover';
import { productsList } from '../../data/products/products';

// chamar os itens pra preencher category

const Menu = () => {
  return (
    <div className={styles.menu}>
      <h1 className={styles.description} id="promotion">Promoção</h1>
      {productsList && productsList.filter((i) => i.category === "promotion").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemPrice={item.itemPrice} />
      ))}
      <h1 className={styles.description} id="acai">Açai</h1>
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <h1 className={styles.description} id="drinks">Bebidas</h1>
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <h1 className={styles.description} id="premium">Linha Premium</h1>
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <ProductCover />
      <h1 className={styles.description} id="burguer">Hambúrguer</h1>
      <ProductCover />
      <h1 className={styles.description} id="hotdog">Hot Dog</h1>
      <ProductCover />
      <ProductCover />
      <ProductCover />
    </div>
  )
}

export default Menu;
