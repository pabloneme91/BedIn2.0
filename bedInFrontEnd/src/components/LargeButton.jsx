import React from 'react';

import { Link } from 'react-router';

function LargeButton(props) {
  console.log(props.link)
  return (
    <div>
      <Link to={`/${props.link}`}>
        <button type="button">
          {props.buttonText}
        </button>
      </Link>
    </div>
  )
}

export default LargeButton;
