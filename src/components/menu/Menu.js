import React from 'react';
import styles from "./Menu.module.css";
import ProductCover from '../productcover/ProductCover';
import { productsList } from '../../data/products/products';
import { usePedidoContext } from '../../hooks/usePedidoContext';
// chamar os itens pra preencher category

const Menu = () => {
  const { searchTerm } = usePedidoContext();

  return (
    <div className={styles.menu}>
      {searchTerm ? productsList.filter((val) => val.itemName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      )) : ""}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="promotion">Promoção</h1>
      </div>
      {productsList && productsList.filter((i) => i.promotion === true).map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="burguer">Hambúrguer</h1>
      </div>
      {productsList && productsList.filter((i) => i.category === "burguer").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="premium">Linha Premium</h1>
      </div>
      {productsList && productsList.filter((i) => i.category === "premium").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="acai">Açai</h1>
      </div>
      {productsList && productsList.filter((i) => i.category === "acai").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="drinks">Bebidas</h1>
      </div>
      {productsList && productsList.filter((i) => i.category === "drinks").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
      <div className={styles.container_description}>
        <h1 className={styles.description} id="hotdog">Hot Dog</h1>
      </div>
      {productsList && productsList.filter((i) => i.category === "hotdog").map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      ))}
    </div>
  )
}

export default Menu;
