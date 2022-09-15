import { Link } from "react-router-dom";

import styles from "./ProductCover.module.css";

const ProductCover = ({ id, itemName, itemDescription, itemPrice }) => {
  return (
    <div className={styles.item}>
      <Link to={`/product/${id}`} className={styles.link}>
        <div className={styles.name}>
          <p>{itemName}</p>
        </div>
        <div className={styles.description}>
          <p>{itemDescription}</p>
        </div>
        <div className={styles.price}>
          {itemPrice && (<p>{itemPrice.toFixed(2).replace('.', ',')}</p>)}
        </div>
      </Link>
    </div>
  )
}

export default ProductCover;
