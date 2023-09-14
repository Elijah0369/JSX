import { myProduct } from "../product"
const Image = () => {
    return (
        <img src={myProduct.imageUrl} alt="myproduct" width={250} />
    )
}

export default Image