import React, { useState } from "react";

function FormularioInterrupcion() {
  const [numero, setNumero] = useState(0);

  const [mostrar, setMostrar] = useState(false);

  const handleChange = (e) => {
    setNumero(e.target.value);
  };

  const interrupcion = (e) => {
    e.preventDefault();
    try {
      if (numero % 2 === 0) {
        setMostrar(true);
        setTimeout(() => {
          setMostrar(false)
        }, 4000);
      } else {
        alert("El dato no es par o es incorrecto, Esta es la interrupcion");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contenedor">      
      <div className="contenedorFormulario">
        <h1>INTERRUPCIONES</h1>
        <form onSubmit={interrupcion} className="formulario">
          <input
            type="number"
            name="numero"
            placeholder="Ingresa el numero aqui"
            onChange={handleChange}
            required
          />        
          <button className="btn btn-success" type="submit">Comprobar si el numero es par</button>
          {mostrar && <p> El dato ha sido ingresado correctamente </p>}
        </form>
      </div>
    </div>
  );
}

export default FormularioInterrupcion;
