import React from 'react';


function FinanciadorFormStep2(props) {
   let popup = null;
   if(props.success) {
      popup = <div>OBRA SOCIAL CREADA</div>
  }
  return (
    <div>
    
        <div className="container container_a">
          <div className="row">
           
            <div className="col-xs- col-sm-2 col-lg-2"></div>
            
            <div className="col-xs-5 col-sm-4 col-lg-4" id="a">
              
                <div className="form-horizontal">  
                  <div className="form-group " id="b">
                    <label htmlFor="exampleInputName2" className="col-sm-2 control-label">Plan</label>
                    <div className="col-sm-10">
                        <span aria-hidden="true"></span>
                        <input type="text" className="form-control" id="inputEmail3" name="plan" placeholder="Ingrese Plan"></input>
                    </div>
                  </div>
                </div>
              
              <label>Seleccione Hospital/es <br/>acorde al plan</label>
              <form name="hospitalChecklist">
                    {props.hospitals.map((hospital, i) =>
                      <div key={i} className="checkbox" id="c">
                        <input type="checkbox" name="hospitals" type="checkbox" data-id = {hospital._id} value={hospital.name} />{hospital.name}<br/>
                      </div>
                    )}          
              </form>
                <div className="form-group" id="d">
                <div className="col-sm-offset-3 col-sm-10">
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
                        }} id="k" 
                      >Add</button> 
                </div>
                </div>
            </div>
            

            <div className="col-xs-5 col-sm-4 col-lg-4" id="f">
                <table className="table  g" >
                  <thead>
                    <tr id="th" >
                      <th >PLANES</th>
                      <th >HOSPITALES</th>
                    </tr>
                  </thead>
                  <tbody>
                        {props.planInputs.map((plan, i) =>
                    <tr key={i}  >
                      <td >{props.planInputs[i]}</td>
                      <td >{props.hospitalInputs[i].map((singleHospital) => <p key={singleHospital.id}> {singleHospital.value} </p>)}</td>
                    </tr>
                    )}
                  </tbody>
                </table>
                <button  id="j"onClick={props.submitAll}>Submit All</button>
            </div>

            <div className="col-xs-1 col-sm-3 col-lg-3 "></div>
            
          </div>
        </div>
        <div id="l">{popup}</div>

     </div>
  
  )
}

export default FinanciadorFormStep2;



// TODO: in document.query you are now quering input and form. If there was another input or form elements on page, it would select first one. GIVE IT AN ID TO SELECT CORRECT ONE

// props.add(e.target.plan.value, e.target.hospitalChecklist.value)


// TODO: popup should blur background (CSS index position) and have a button that does a redirect with hashhistory push
