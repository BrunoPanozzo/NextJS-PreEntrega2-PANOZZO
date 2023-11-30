'use client'

import { useState } from 'react'
import styles from './contador.module.css'
import Boton from './Boton';

const Contador = ({item}) => {

    const [stockDisponible, setStockDisponible] = useState(item.stock);
    const [contador, setContador] = useState(0);

    const incrementarCantidad = () => {
        if (contador < stockDisponible)
            setContador(contador + 1)
    }

    const decrementarCantidad = () => {
        if (contador >= 1)
            setContador(contador - 1)
    }

    return (
        <div className={styles.container}>
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
    )
}

export default Contador