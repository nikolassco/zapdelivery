import { Link } from "react-router-dom";

import styles from "./ProductCover.module.css";

const ProductCover = ({ id, itemName, itemDescription, itemOptionPrice }) => {
  console.log(itemOptionPrice);
  return (
    <Link to={`/product/${id}`} className={styles.link}>
      <div className={styles.item}>
        <div className={styles.name}>
          {itemName && (<p>{itemName}</p>)}
        </div>
        <div className={styles.description}>
          {itemDescription && (<p>{itemDescription.join(', ')}</p>)}
        </div>
        <div className={styles.price}>
          {itemOptionPrice && <p>A partir de <span>R$ {itemOptionPrice[0].price.toFixed(2).replace('.', ',')}</span></p>}
        </div>
      </div>
    </Link>
  )
}

export default ProductCover;
