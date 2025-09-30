import React, { useState } from 'react';

function ContadorConHistorial() {
    const [contador, setContador] = useState(0);
    const [historial, setHistorial] = useState([]); // nuevo estado

    const manejarClick = () => {
        setContador(prev => {
            const nuevoContador = prev + 1;
            setHistorial([...historial, nuevoContador]); // agrega al historial
            return nuevoContador;
        });
    };
    return (
        <div>
            <button onClick={manejarClick}>
                Contador: {contador}
            </button>
            <h3>Historial:</h3>
            {historial.map((valor, i) => (
                <button
                onClick={() => setContador(valor)}>
                {valor}
                </button>
            ))}
        </div>
    );
}

export default ContadorConHistorial;