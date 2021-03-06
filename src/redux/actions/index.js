export const storedProductsAction = (products) => {
    return {
        type: 'products/storedProducts',
        payload: products
    }
}

export const setCategoryAction = (category) => {
    return {
        type: 'category/setCategory',
        payload: category
    }
}

export const addedItemAction = (id) => {
    return {
        type: 'cart/addedItem',
        payload: id
    }
}