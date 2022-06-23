const initialState = {
    products: [],
    cart: [],
    currency: { label: "USD", symbol: "$" },
    category: ""
}

const cartSlice = (state = initialState, action) => {
    switch (action.type) {
        case 'products/storedProducts': {
            return {
                ...state,
                products: action.payload
            }
        }
        case 'category/setCategory': {
            return {
                ...state,
                category: action.payload
            }
        }
        case 'cart/addedItem': {
            const id = action.payload


            return {
                ...state,
                cart: [
                    ...state.cart,
                    state.products.find(item => item.id === id)
                ]
            }
        }










        default:
            return state
    }
}

export default cartSlice