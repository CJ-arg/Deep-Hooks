import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2, 4, 6, 8, 100];
    const [valor, setValor] = useState(0);


    const padreIncrementar = useCallback(
        (numero) => {

            setValor((valor) => valor + numero)
        },
        [],
    )

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: {valor} </p>

            <hr />

            {
                numeros.map(n => (
                    <Hijo
                        key={n}
                        numero={n}
                        incrementar={padreIncrementar}
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
