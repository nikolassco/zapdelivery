import React from 'react';
import styles from "./Menu.module.css";
import ProductCover from '../productcover/ProductCover';
import { productsList } from '../../data/products/products';
import { usePurchaseContext } from '../../hooks/usePurchaseContext';
// chamar os itens pra preencher category

const Menu = () => {
  const { searchTerm } = usePurchaseContext();

  return (
    <div className={styles.menu}>
      {searchTerm ? productsList.filter((val) => val.itemName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).map((item) => (
        <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
      )) : ""}
      <div className={styles.container_description} id="promotion">
        <h1 className={styles.description} >Promoção</h1>
        {productsList && productsList.filter((i) => i.promotion === true).map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
      <div className={styles.container_description} id="burguer">
        <h1 className={styles.description} >Hambúrguer</h1>
        {productsList && productsList.filter((i) => i.category === "burguer").map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
      <div className={styles.container_description} id="premium">
        <h1 className={styles.description} >Linha Premium</h1>
        {productsList && productsList.filter((i) => i.category === "premium").map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
      <div className={styles.container_description} id="acai">
        <h1 className={styles.description} >Açai</h1>
        {productsList && productsList.filter((i) => i.category === "acai").map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
      <div className={styles.container_description} id="drinks">
        <h1 className={styles.description} >Bebidas</h1>
        {productsList && productsList.filter((i) => i.category === "drinks").map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
      <div className={styles.container_description} id="hotdog">
        <h1 className={styles.description} >Hot Dog</h1>
        {productsList && productsList.filter((i) => i.category === "hotdog").map((item) => (
          <ProductCover key={item.id} id={item.id} itemName={item.itemName} itemDescription={item.itemDescription} itemOptionPrice={item.itemOptionPrice} />
        ))}
      </div>
    </div>
  )
}

export default Menu;
