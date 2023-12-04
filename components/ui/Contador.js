'use client'
import { useCartContext } from '@/context/CartContext';
import { useState, useEffect } from 'react'
import styles from './contador.module.css'
import Boton from './Boton';
import Link from 'next/link';

const Contador = ({ item }) => {

    const { addItem, getItem } = useCartContext()

    const [stockDisponible, setStockDisponible] = useState(item.stock);
    const [contador, setContador] = useState(0);

    var finalizarCompra = false

    const incrementarCantidad = () => {
        if (contador < stockDisponible)
            setContador(contador + 1)
    }

    const decrementarCantidad = () => {
        if (contador >= 1)
            setContador(contador - 1)
    }

    function onAdd(quantity) {
        setContador(quantity)
        setStockDisponible(stockDisponible - quantity)
        //actualizo mi carrito
        addItem(item, quantity)
        //seteo mi flag para indicar que confirmé una compra
        finalizarCompra = true
        setContador(0 )
    }

    function actualizarStock(itemId) {
        const item = getItem(itemId)
        if (item)
            setStockDisponible(stockDisponible - item.quantity)
    }

    useEffect(() => {
        actualizarStock(item.id)
    }, [])

    if (stockDisponible == 0)
        return <p className="item-detail-stock">No hay stock del artículo.</p>

    return (
        <div className={styles.container}>
            <p className="pb-1 text-xl">Stock Disponible: {stockDisponible}</p>

            {finalizarCompra
                ? <div>
                    <p className="pb-1 text-2xl font-bold">Ud. ha comprado {contador} artículo/s.</p>
                    <div id="flex flex-col justify-center items-center gap-20">
                        <Link href="/" className="inline-block align-middle text-center border font-normal whitespace-no-wrap rounded py-1 px-3 bg-gray-600 text-white hover:bg-gray-700 text-decoration hover: bg-[rgb(53, 53, 218)]">Elegir más productos</Link>
                        <Link href="/cart" className="btn btn-secondary text-decoration text-center btn-ver-detalle">Finalizar Compra</Link>
                    </div>
                </div>
                : <div>
                    <div className={styles.counter}>
                        <Boton className={styles.btnDecrementar} onClick={decrementarCantidad}>
                            -
                        </Boton>
                        <label className={styles.counterValue}>{contador}</label>
                        <Boton className={styles.btnIncrementar} onClick={incrementarCantidad}>
                            +
                        </Boton>
                    </div>
                    <boton className={styles.agregarAlCarrito} onClick={() => onAdd(contador)}>
                        Agregar al carrito
                    </boton>
                </div> 
            }
        </div>
    )
}

export default Contador