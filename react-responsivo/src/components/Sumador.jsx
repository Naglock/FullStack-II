import React, { useState } from 'react';
import { Sumar } from './Sumar'
function Sumador() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');

    // Convertimos a número para evitar concatenación
    const resultado = Sumar(Number(num1), Number(num2));
    return (    
        <div>
            <input
                type="number"
                value={num1}
                onChange={e => setNum1(e.target.value)}
                placeholder="Número 1"
            />
            <input
                type="number"
                value={num2}
                onChange={e => setNum2(e.target.value)}
                placeholder="Número 2"
            />
            <p>Resultado: {resultado}</p>
        </div>
    );
}
export default Sumador;