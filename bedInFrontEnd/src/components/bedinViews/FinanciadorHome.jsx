import React from 'react';

import LargeButton from '../LargeButton.jsx';

function FinanciadorHome(props) {
  return (
    <div>
      <div>
        <h2>Entidad Financiador</h2>
        <LargeButton buttonText="Crear" link="Bedin/financiador/entcrear" />
        <LargeButton buttonText="Ver Lista" link="Bedin/financiador/entver" />
      </div>
      <div>
        <h2>Usuario Financiador</h2>
          <LargeButton buttonText="Crear" link="Bedin/financiador/usercrear" />
          <LargeButton buttonText="Ver Lista" link="Bedin/financiador/userver"/>
      </div>
    </div>
  )
}

export default FinanciadorHome;
