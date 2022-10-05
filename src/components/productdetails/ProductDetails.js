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
        <div className={styles.additional}>
          <div className={styles.text}>
            <div className={styles.text_action}>
              <p className={styles.text_type}>Turbine seu pedido</p>
              <p className={styles.text_info}><em>Escolha até 10 opções</em></p>
            </div>
            <p className={styles.mandatory_text}>Opcional</p>
          </div>
          <div className={styles.choice_cover}>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Cheddar Cremoso</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Cheddar Fatiado</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Catupiry</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Hamburguer Tradicional</p>
                <p className={styles.price}>+ R$2,50</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Hamburguer Picanha</p>
                <p className={styles.price}>+ R$4,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Hamburguer Caseiro</p>
                <p className={styles.price}>+ R$5,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Bacon</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Bacon Gourmet</p>
                <p className={styles.price}>+ R$4,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Calabresa</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Ovo Frito</p>
                <p className={styles.price}>+ R$1,50</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Banana Frita</p>
                <p className={styles.price}>+ R$2,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Frango Desfiado</p>
                <p className={styles.price}>+ R$3,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>American Burguer</p>
                <p className={styles.price}>+ R$1,50</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Mussarela</p>
                <p className={styles.price}>+ R$1,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Salsicha</p>
                <p className={styles.price}>+ R$1,50</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Ovo de Codorna</p>
                <p className={styles.price}>+ R$0,75</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.extra}>
          <div className={styles.text}>
            <div className={styles.text_action}>
              <p className={styles.text_type}>Molhos Extras</p>
              <p className={styles.text_info}><em>Escolha até 10 opções</em></p>
            </div>
            <p className={styles.mandatory_text}>Opcional</p>
          </div>
          <div className={styles.choice_cover}>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>Maionese Caseira</p>
                <p className={styles.price}>+ R$1,00</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>2 Sachês de Catchup</p>
                <p className={styles.price}>+ R$0,50</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
            <div className={styles.choice}>
              <div className={styles.option_price}>
                <p className={styles.type}>2 Sachês de Catchup</p>
                <p className={styles.price}>+ R$0,75</p>
              </div>
              <div className={styles.btn_choice}>
                <button>
                  <AiOutlineMinus className={styles.btn_choice_minus} />
                </button>
                <button>
                  <AiOutlinePlus className={styles.btn_choice_plus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails;
