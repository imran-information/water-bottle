import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { getStredCart, removeFormLS, setCartLS } from "../../Utilitys/LocalStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        const bottlesDataLoad = async () => {
            const res = await fetch('bottles.json')
            const data = await res.json()
            setBottles(data)
        }
        bottlesDataLoad()
    }, [])

    useEffect(() => {
        if (bottles.length) {
            const storedCart = getStredCart()
            const saveCart = []
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                saveCart.push(bottle)
            }
            setCart(saveCart)

        }
    }, [bottles])
    const handleAddCart = bottle => {
        const newBottle = [...cart, bottle]
        setCart(newBottle)
        setCartLS(bottle.id)
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id)
        setCart(remainingCart)
        removeFormLS(id)
    }
    return (
        <div>
            <h2>Bottle Hare: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handleAddCart={handleAddCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;