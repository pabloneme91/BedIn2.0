import React from 'react';


function FinanciadorFormStep1(props) {
  console.log(props)
  return (
    <div>
        

      <form className="form-horizontal">
        <div className="form-group">
          <label for="exampleInputName2" className="col-sm-2 control-label">Nombre de la Obra Social</label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputEmail3" ref="nombre" placeholder="Nombre"></input>
          </div>
        </div>

        <div className="form-group">
          <label for="exampleInputName2" className="col-sm-2 control-label">Dirección</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="inputEmail3" ref="direccion" placeholder="Dirección"></input>
            </div>
        </div>

        <div className="form-group">
          <label for="inputnumber3" className="col-sm-2 control-label">Teléfono</label>
            <div className="col-sm-10">
              <input type="number" className="form-control" id="inputEmail3" ref="telefono" placeholder="Teféfono"></input>
            </div>
        </div>

        <div className="form-group">
           <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="inputEmail3" ref="email" placeholder="Email"></input>
              </div>
        </div>     

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Next</button>
          </div>
        </div>
      </form>


    </div>

  )
}

export default FinanciadorFormStep1;


