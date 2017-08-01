import React from 'react';


function FinanciadorFormStep1(props) {
  console.log('PROPS @ STEP 1', props)
  return (
    <div>

        <div className="container container_a">
          <div className="row">
            <div className="col-xs-2 col-sm-4 col-lg-5"></div>
            <div className="col-xs-8 col-sm-6 col-lg-4 ">

      <h2>Detalles de Financiador</h2>

      <form className="form-horizontal" onSubmit={props.nextStep}>
        <div className="form-group ">
          <label htmlFor="exampleInputName2" className="col-sm-2 control-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" name="nombre" placeholder="Nombre"></input>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputName2" className="col-sm-2 control-label">Dirección</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" name="direccion" placeholder="Dirección"></input>
            </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputnumber3" className="col-sm-2 control-label">Teléfono</label>
            <div className="col-sm-10">
              <input type="tel" className="form-control" id="inputEmail3" name="telefono" placeholder="Teléfono"></input>
            </div>
        </div>

        <div className="form-group">
           <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3" name="email" placeholder="Email"></input>
              </div>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button className="btn button" id="button2">Save and Continue</button>
          </div>
        </div>
      </form>



        </div>
      </div>
    </div>


    </div>

  )
}

export default FinanciadorFormStep1;

// <button onClick={this.nextStep}>Save &amp; Continue</button>
// onClick={props.nextStep.bind(this)}
