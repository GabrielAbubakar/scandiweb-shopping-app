import React from "react";
import Shopifort from '../assets/logo.svg'
import Cart from '../assets/cart.svg'


class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        const { categoryName, changeCategoryAll, changeCategoryClothes, changeCategoryTech } = this.props

        return (
            <nav className="navigation">
                <ul className="categories">
                    <li style={{ color: categoryName === 'all' && '#05cb05' }} onClick={changeCategoryAll}>All</li>
                    <li style={{ color: categoryName === 'clothes' && '#05cb05' }} onClick={changeCategoryClothes}>Clothes</li>
                    <li style={{ color: categoryName === 'tech' && '#05cb05' }} onClick={changeCategoryTech}>Tech</li>
                </ul>

                <div className="logo">
                    <img src={Shopifort} alt="shopifort" />
                </div>

                <div className="shopping">
                    <div className="currencyDropdown">

                    </div>
                    <div className="shoppingCart">
                        <img src={Cart} alt="cart" />
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar