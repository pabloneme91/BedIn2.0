import React from 'react';


function FinanciadorFormStep2(props) {
  console.log('PROPS @ Step 2', props)
  let popup = null;
  if(props.success) {
      popup = <div>FINANCIADOR CREADO</div>
  }
  return (
    <div>
      <label>Plan</label>
      <input type="text" name="plan" ></input> <br/>


      <label>Seleccione Hospital(es) Perteneciente(s) al Plan</label>
      <form name="hospitalChecklist">
        {props.hospitals.map((hospital, i) =>
          <div key={i}>
            <input name="hospitals" type="checkbox" data-id = {hospital._id} value={hospital.name} />{hospital.name}<br/>
          </div>
        )}
      </form>

      <button onClick={(e) => {
          e.preventDefault();
          let plan = document.querySelector('input').value;
          let hospitals = [];
          document.querySelector('form').elements.hospitals.forEach((input) => {
           if(input.checked) hospitals.push({value:input.value, id: input.dataset.id})
          })
          props.add(plan, hospitals)
          document.querySelector('input').value = "";
          document.querySelector('form').reset()
        }}
      >Add</button>

      <table style={{border:"1px solid black"}}>
        <thead style={{border:"1px solid black"}}>
          <tr>
            <th style={{border:"1px solid black"}}>Plan</th>
            <th style={{border:"1px solid black"}}>Hospitales del Plan</th>
          </tr>
        </thead>

        <tbody>
          {props.planInputs.map((plan, i) =>
            <tr key={i} style={{border:"1px solid black"}}>
              <td style={{border:"1px solid black"}}>{props.planInputs[i]}</td>
              <td style={{border:"1px solid black"}}>{props.hospitalInputs[i].map((singleHospital) => <p key={singleHospital.id}> {singleHospital.value} </p>)}</td>
            </tr>
          )}
        </tbody>
      </table>


      <button onClick={props.submitAll}>Submit All</button>

    <div>
      {popup}
    </div>

    </div>
  )
}

export default FinanciadorFormStep2;


// TODO: in document.query you are now quering input and form. If there was another input or form elements on page, it would select first one. GIVE IT AN ID TO SELECT CORRECT ONE

// props.add(e.target.plan.value, e.target.hospitalChecklist.value)


// TODO: popup should blur background (CSS index position) and have a button that does a redirect with hashhistory push
