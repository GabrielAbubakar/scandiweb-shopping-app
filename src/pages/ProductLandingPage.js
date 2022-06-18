import React from "react";
// import { gql } from '@apollo/client';
import client from '../graphql/apolloClient'
import Navbar from "../components/navbar";
import { getAllProducts, getProductsByClothesCategory, getProductsByTechCategory, } from '../graphql/queries'
import ProductCard from "../components/productCard";


class ProductLandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: [],
            category: ''
        }

        this.changeCategoryClothes = this.changeCategoryClothes.bind(this)
        this.changeCategoryTech = this.changeCategoryTech.bind(this)
        this.changeCategoryAll = this.changeCategoryAll.bind(this)
    }

    componentDidMount() {
        client.query({
            query: getAllProducts
        }).then(res => { this.setState({ products: res.data.category.products, category: res.data.category.name }) })
            .catch(e => console.log(e));
    }

    changeCategoryAll() {
        client.query({
            query: getAllProducts
        }).then(res => { this.setState({ products: res.data.category.products, category: res.data.category.name }) })
            .catch(e => console.log(e));
    }

    changeCategoryClothes() {
        client.query({
            query: getProductsByClothesCategory
        }).then(res => { this.setState({ products: res.data.category.products, category: res.data.category.name }) })
            .catch(e => console.log(e));
    }

    changeCategoryTech() {
        client.query({
            query: getProductsByTechCategory
        }).then(res => { this.setState({ products: res.data.category.products, category: res.data.category.name }) })
            .catch(e => console.log(e));
    }




    render() {
        const { products } = this.state

        console.log(this.state.products);
        return (
            <div className="container">
                <Navbar changeCategoryClothes={this.changeCategoryClothes}
                    changeCategoryTech={this.changeCategoryTech}
                    changeCategoryAll={this.changeCategoryAll}
                    categoryName={this.state.category}
                />

                <h1>{this.state.category} Products</h1>

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

export default ProductLandingPage