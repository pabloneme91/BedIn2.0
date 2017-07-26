import React from 'react';


function FinanciadorFormStep1(props) {
  console.log(props)
  return (
    <div>
      <h2>Detalles de Financiador</h2>
        <ul>
          <li>
            <label>Nombre de Financiador</label>
            <input type="text" ref="nombre" />
          </li>
          <li>
            <label>Direccion</label>
            <input type="text" ref="direccion" />
          </li>
          <li>
            <label>Telefono</label>
            <input type="number" ref="telefono" />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" />
          </li>
          <li>
            <button>Next</button>
          </li>
        </ul>
    </div>
  )
}

export default FinanciadorFormStep1;

// <button onClick={this.nextStep}>Save &amp; Continue</button>
