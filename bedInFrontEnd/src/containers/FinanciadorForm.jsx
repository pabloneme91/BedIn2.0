import React from 'react';

import FinanciadorFormStep1 from '../components/bedinViews/FinanciadorFormStep1.jsx';
import FinanciadorFormStep2 from '../components/bedinViews/FinanciadorFormStep2.jsx';

function FinanciadorForm(props) {
  return (
    <div>
      <FinanciadorFormStep1 />
      <FinanciadorFormStep2 />
    </div>
  )
}

export default FinanciadorForm;
