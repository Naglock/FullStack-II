import React from 'react';

const productos = [
  {
    id: 1,
    nombre: 'Leche Entera',
    descripcion: 'Leche fresca pasteurizada 1L',
    precio: 1.25,
    imagen: 'https://via.placeholder.com/150?text=Leche',
  },
  {
    id: 2,
    nombre: 'Pan Integral',
    descripcion: 'Pan integral artesanal 500g',
    precio: 2.00,
    imagen: 'https://via.placeholder.com/150?text=Pan',
  },
  {
    id: 3,
    nombre: 'Huevos',
    descripcion: 'Caja de 12 huevos frescos',
    precio: 3.50,
    imagen: 'https://via.placeholder.com/150?text=Huevos',
  },
  {
    id: 4,
    nombre: 'Manzanas',
    descripcion: 'Manzanas rojas, 1kg',
    precio: 2.30,
    imagen: 'https://via.placeholder.com/150?text=Manzanas',
  },
];

function Products() {
  return (
    <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>Productos Básicos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {productos.map(producto => (
          <div
            key={producto.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              width: 'calc(50% - 1.5rem)',
              boxSizing: 'border-box',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              style={{ width: '100%', borderRadius: '4px', marginBottom: '1rem' }}
            />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p style={{ fontWeight: 'bold' }}>${producto.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
