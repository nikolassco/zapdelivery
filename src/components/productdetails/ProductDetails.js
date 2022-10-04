import { Link, useParams } from "react-router-dom";
import { productsList } from "../../data/products/products";
import styles from "./ProductDetails.module.css";
import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { usePurchaseContext } from '../../hooks/usePurchaseContext';

const ProductDetails = () => {
  const { id } = useParams();
  const numberId = Number.parseInt(id, 10);
  const { handleAddItem, qtd, setQtd, shopCart } = usePurchaseContext();


  return (
    <>
      <div className={styles.container}>
        {productsList.filter((item) => item.id === numberId).map((item) => (
          <div key={item.id}>
            <div className={styles.back}>
              <Link to="/" className={styles.back_link}  >
                <MdArrowBackIos className={styles.back_btn} />
                <p className={styles.back_text}>Voltar</p>
              </Link>
            </div>
            <h2 className={styles.name}>{item.itemName}</h2>
            <div className={styles.text}>
              <div className={styles.text_action}>
                <p className={styles.text_type}>Escolha sua carne</p>
                <p className={styles.text_info}><em>Escolha até uma opção</em></p>
              </div>
              <p className={styles.mandatory_text}>Obrigatorio</p>
            </div>
            <div className={styles.choice_cover}>
              {item.itemOptionPrice.map((type, index) => (
                <div key={index} className={styles.choice}>
                  <div className={styles.option_price}>
                    <p className={styles.type}>{type.option}</p>
                    <p className={styles.price}>+ R${type.price.toFixed(2).replace('.', ',')}</p>
                  </div>
                  <div className={styles.btn_choice}>
                    <button>
                      <AiOutlineMinus className={styles.btn_choice_minus} />
                    </button>
                    <button onClick={() => handleAddItem(item, type)}>
                      <AiOutlinePlus className={styles.btn_choice_plus} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.add_type_item}>
              <div className={styles.btn_choice}>
                <button onClick={() => setQtd(qtd - 1)}>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <span>{qtd}</span>
                <button onClick={() => setQtd(qtd + 1)}>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
              <div className={styles.btn_add_item}>
                <p>{shopCart[0]?.price.toFixed(2).replace('.', ',')}</p>
                <button>Adicionar</button>
              </div>
            </div>
          </div>
        ))}
      </div >
    </>
  )
}

export default ProductDetails;
