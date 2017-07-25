import React from 'react';


function FinanciadorCrearMainInputs(props) {
  console.log(props)
  return (
    <div>
      <h2>Detalles de Financiador</h2>
        <ul>
          <li>
            <label>Nombre de Financiador</label>
            <input type="text" ref="nombre" defaultValue={props.fieldValues.nombre} />
          </li>
          <li>
            <label>Direccion</label>
            <input type="text" ref="direccion" defaultValue={props.fieldValues.direccion} />
          </li>
          <li>
            <label>Telefono</label>
            <input type="number" ref="telefono" defaultValue={props.fieldValues.telefono} />
          </li>
          <li>
            <label>Email</label>
            <input type="email" ref="email" defaultValue={props.fieldValues.email} />
          </li>
          <li>
            <button onClick={this.nextStep}>Save &amp; Continue</button>
          </li>
        </ul>
    </div>
  )
}

export default FinanciadorCrearMainInputs;
