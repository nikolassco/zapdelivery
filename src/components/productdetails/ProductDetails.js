import { useParams } from "react-router-dom";
import { productsList } from "../../data/products/products";


const ProductDetails = () => {
  const { id } = useParams();
  const numberId = Number.parseInt(id, 10);

  console.log(numberId)
  console.log(productsList)

  return (
    <div>
      {productsList.filter((item) => item.id === numberId).map((item) => (
        <div key={item.id}>
          <p>{item.itemName}</p>
        </div>
      ))}
    </div >
  )
}

export default ProductDetails;
