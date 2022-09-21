import { Link, useParams } from "react-router-dom";
import { productsList } from "../../data/products/products";
import styles from "./ProductDetails.module.css";
import { MdArrowBackIos } from "react-icons/md";
import Header from "../header/Header";

const ProductDetails = () => {
  const { id } = useParams();
  const numberId = Number.parseInt(id, 10);

  return (
    <>
      <Header />
      <div className={styles.container}>
        {productsList.filter((item) => item.id === numberId).map((item) => (
          <div key={item.id}>
            {console.log(item)}
            <div className={styles.back}>
              <Link to="/" >
                <MdArrowBackIos className={styles.back_btn} />
              </Link>
            </div>
            <h1 className={styles.name}>{item.itemName}</h1>
            <div className={styles.text}>
              <div className={styles.text_action}>
                <p className={styles.text_type}>Escolha sua carne</p>
                <p className={styles.text_info}><em>Escolha até uma opção</em></p>
              </div>
              <p className={styles.green_text}>Obrigatorio</p>
            </div>
            {item.itemOptionPrice.map((type, index) => (
              <div key={index} className={styles.option_price}>
                <p className={styles.type}>{type.option}</p>
                <p className={styles.price}>{type.price.toFixed(2).replace('.', ',')}</p>
              </div>
            ))}
          </div>
        ))}
      </div >
    </>
  )
}

export default ProductDetails;
