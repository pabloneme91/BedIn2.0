import React from 'react';

function CreatePatientRequestForm(props) {
  return (

    <div className="container container_a">
      <div className="row">
        <div className="col-xs-2 col-sm-4 col-lg-5"></div>
        <div className="col-xs-8 col-sm-6 col-lg-4 ">

          <h2>Generar Solicitud de Paciente</h2>

          <form className="form-horizontal" onSubmit={props.createRequest}>

            <div className="form-group ">
              <label htmlFor="exampleInputName2" className="col-sm-3 control-label">DNI</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" name="dni" placeholder="Documento"></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Sexo</label>
              <div className="col-sm-9">
                <select className="form-control" id="sex-select">
                  <option value="select-sex">---Seleccione Sexo---</option>
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
              <label htmlFor="exampleInputName2" className="col-sm-3 control-label">Diagnostico CIE 10</label>
              <div className="col-sm-9">
                <input type="text" className="form-control" id="inputEmail3" name="cie" placeholder="CIE"></input>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Complejidad de Cama</label>
              <div className="col-sm-9">
                <select className="form-control" name="complejidad" id="complexity-select">
                  <option value="select-option">---Seleccione Una Opción---</option>
                  <option value="Complejidad1">Neonatología</option>
                  <option value="Complejidad2">UTI Pediátrica</option>
                  <option value="Complejidad3">Sala Pediátrica</option>
                  <option value="Complejidad4">UTI Adultos</option>
                  <option value="Complejidad5">UCO</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="sel1" className="control-label col-sm-3">Plan</label>
              <div className="col-sm-9">
                <select className="form-control" name="plan" id="plan-select">
                  {props.plans.map((plan, i) =>
                    <div key={i}>
                      <option data-id={plan._id}>{plan.name}</option>
                    </div>
                  )}
                </select>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-3 col-sm-9">
                <button className="btn button" id="button2">Send</button>
              </div>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default CreatePatientRequestForm;
