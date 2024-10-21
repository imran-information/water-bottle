const getStredCart = () => {
    const getLocalStoredCart = localStorage.getItem('cart');
    if (getLocalStoredCart) {
        return JSON.parse(getLocalStoredCart)
    }
    return [];
}

const saveCartLs = (cart) => {
    const cartStrigified = JSON.stringify(cart)
    localStorage.setItem('cart', cartStrigified)
}



const setCartLS = id => {
    const cart = getStredCart()
    cart.push(id)
    saveCartLs(cart)
}


const removeFormLS = id => {
    const cart = getStredCart()
    const remaining = cart.filter(rvId => rvId !== id)
    saveCartLs(remaining)
}

export { setCartLS, getStredCart, removeFormLS }