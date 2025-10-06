import React from 'react';

function Home() {
  return (
    <main style={{ padding: '4rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Bienvenido a la página principal</h1>
      <p>
        Esta es una página de inicio genérica creada para ayudarte a empezar con tu proyecto React.
        Puedes modificar este contenido para agregar información relevante sobre tu sitio o aplicación.
      </p>
      <button
        style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
        onClick={() => alert('¡Has hecho clic en el botón!')}
      >
        Haz clic aquí
      </button>
    </main>
  );
}

export default Home;
