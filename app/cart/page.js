'use client'

import Boton from "@/components/ui/Boton"
import CartItem from "@/components/ui/CartItem"
import { useCartContext } from "@/context/CartContext"
import Link from "next/link"


const CartPage = () => {

    const { cart } = useCartContext()

    return (

        <div className="container m-auto mt-6">
            <h1 className="my-10 border-b border-red-900 pb-4 font-mono font-bold text-4xl text-center">Productos Comprados</h1>
            <div className="flex flex-col items-end">
                <Boton className="text-center  border font-normal rounded py-1 px-3 bg-red-600 text-white hover:bg-red-700 hover:text-decoration">
                    <p className="ml-auto font-mono my-4 text-2xl">Vaciar carrito</p>
                </Boton>
            </div>
            {cart.map(producto => (
                <CartItem key={producto.slug} producto={producto} />
            ))}
            <div className="flex flex-col items-end">
                <Link href="" className="align-middle text-center select-none border font-normal rounded py-1 px-3 text-2xl bg-gray-600 text-white hover:bg-gray-700 hover:text-decoration">Confirmar Compra</Link>
            </div>
        </div>
    )
}

export default CartPage