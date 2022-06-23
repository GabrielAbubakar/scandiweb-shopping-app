import React from "react";
import addCart from '../assets/addCart.svg'
import { connect } from "react-redux";
import { addedItemAction } from "../redux/actions";



class ProductCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.addToCart = this.addToCart.bind(this)
    }


    addToCart(id) {
        this.props.addItemDispatch(id)
    }



    render() {

        const { name, price, img, id } = this.props

        return (
            <div className="productCard">
                <figure>
                    <img src={img} alt={name} width={356} height={338} />
                </figure>
                <h3>{name}</h3>
                <p>${price}</p>
                <button className="addCart" onClick={() => this.addToCart(id)}>
                    <img src={addCart} alt="cart" />
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItemDispatch: (id) => dispatch(addedItemAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)