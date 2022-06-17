import React from "react";
import { gql } from '@apollo/client';
import client from '../graphql/apolloClient'


class ProductLandingPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.handleEvent = this.handleEvent.bind(this)
    }

    componentDidMount() {
        const getProducts = gql`
        query {
            category {
                products {
                  name
                  id
                  description
                  inStock
                  prices{
                    currency {
                      label
                      symbol
                    }
                    amount
                  }
                }
            }
        }
        `

        client.query({
            query: getProducts
        }).then(res => { this.setState({ products: res.data.category.products }) })
            .catch(e => console.log(e));
    }

    handleEvent() {
        console.log(this);
    }

    render() {
        // const { name, id } = this.state.products

        return (
            <>
                <h1>Hello App</h1>
                {console.log(this.state.products)}
                <ul>
                    {
                        this.state.products && this.state.products.map(item => (
                            <li key={item.id}>{item.name}</li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default ProductLandingPage