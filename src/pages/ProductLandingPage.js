import React from "react";
import client from '../graphql/apolloClient'
import { connect } from 'react-redux';
import { getAllProducts, getProductsByClothesCategory, getProductsByTechCategory, } from '../graphql/queries'
import { storedProductsAction, setCategoryAction } from '../redux/actions'
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";


class ProductLandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            // products: [],
            // category: ''
        }

        this.changeCategoryClothes = this.changeCategoryClothes.bind(this)
        this.changeCategoryTech = this.changeCategoryTech.bind(this)
        this.changeCategoryAll = this.changeCategoryAll.bind(this)
    }

    componentDidMount() {
        client.query({
            query: getAllProducts
        }).then(res => {
            // this.setState({ products: res.data.category.products })
            this.props.setCategoryDispatch(res.data.category.name)
            this.props.storeProductsDispatch(res.data.category.products)
        })
            .catch(e => console.log(e));
    }

    changeCategoryAll() {
        client.query({
            query: getAllProducts
        }).then(res => {
            this.props.setCategoryDispatch(res.data.category.name)
            this.props.storeProductsDispatch(res.data.category.products)
        })
            .catch(e => console.log(e));
    }

    changeCategoryClothes() {
        client.query({
            query: getProductsByClothesCategory
        }).then(res => {
            this.props.setCategoryDispatch(res.data.category.name)
            this.props.storeProductsDispatch(res.data.category.products)
        })
            .catch(e => console.log(e));
    }

    changeCategoryTech() {
        client.query({
            query: getProductsByTechCategory
        }).then(res => {
            this.props.setCategoryDispatch(res.data.category.name)
            this.props.storeProductsDispatch(res.data.category.products)
        })
            .catch(e => console.log(e));
    }




    render() {
        const { products, category } = this.props

        // console.log(this.state.products);
        console.log(this.props);
        return (
            <div className="container">
                <Navbar changeCategoryClothes={this.changeCategoryClothes}
                    changeCategoryTech={this.changeCategoryTech}
                    changeCategoryAll={this.changeCategoryAll}
                    categoryName={category}
                />

                <h1>{category} Products</h1>

                <div className="productGrid">
                    {
                        products && products.map(item => (
                            <ProductCard key={item.id} name={item.name} price={item.prices[0].amount} img={item.gallery[0]} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        category: state.cart.category,
        currency: state.cart.currency,
        products: state.cart.products,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        storeProductsDispatch: (products) => dispatch(storedProductsAction(products)),
        setCategoryDispatch: (category) => dispatch(setCategoryAction(category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLandingPage)