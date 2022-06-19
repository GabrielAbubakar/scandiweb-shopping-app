import React from "react";
import addCart from '../assets/addCart.svg'



class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const { name, price, img } = this.props

        return (
            <div className="productCard">
                <figure>
                    <img src={img} alt={name} width={356} height={338} />
                </figure>
                <h3>{name}</h3>
                <p>${price}</p>
                <button className="addCart">
                    <img src={addCart} alt="cart" />
                </button>
            </div>
        )
    }
}

export default ProductCard