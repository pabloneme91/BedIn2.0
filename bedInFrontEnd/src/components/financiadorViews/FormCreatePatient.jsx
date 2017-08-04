import React from 'react';


function FinanciadorCreatePatient(props) {
  const arrayPlan = [
    {
      _id: 1,
      name: 'plan1'
    },
    {
      _id: 2,
      name: 'plan2'
    },
    {
      _id: 3,
      name: 'plan3'
    },
  ]
  const plans = arrayPlan.map(plan => <option key={plan._id} value={plan._id}>{plan.name}</option>)
  return (
    <div className="container container_a">
      <div className="row">
        <div className="col-xs-2 col-sm-4 col-lg-5"></div>
        <div className="col-xs-8 col-sm-6 col-lg-4 ">

          <h2>Generar solicitud</h2>

          <form className="form-horizontal" onSubmit={props.sendPatient}>
            <div className="form-group ">
              <label htmlFor="exampleInputName2" className="col-sm-3 control-label">DNI</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="inputEmail3" name="DNI" placeholder="Documento"></input>
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Sexo</label>
              <div className="col-sm-9">
                <select className="form-control" id="sel1">
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                </select>  
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputName2" className="col-sm-3 control-label">Edad</label>
                <div className="col-sm-9">
                  <input type="number" className="form-control" id="inputEmail3" name="edad" placeholder="Edad"></input>
                </div>
            </div>

            <div className="form-group ">
              <label htmlFor="exampleInputName2" className="col-sm-3 control-label">CIE</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="inputEmail3" name="CIE" placeholder="CIE"></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Complejidad</label>
              <div className="col-sm-9">
                <select className="form-control" name="complejidad" id="sel1">
                  <option value="Complejidad1">Complejidad1</option>
                  <option value="Complejidad2">Complejidad2</option>
                  <option value="Complejidad3">Complejidad3</option>
                </select>  
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Plan</label>
              <div className="col-sm-9">
                <select className="form-control" name="plan" id="sel1">
                  {plans}
                </select>  
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button className="btn button" id="button2">Enviar</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default FinanciadorCreatePatient;