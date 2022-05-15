import React, { useState, useEffect, Fragment } from 'react'

export const Formulario = () => {

    const [data, setData] = useState({
        nombre: '',
        apellido: ''
    }) 

    const handleInputChange = (event) => {
        setData({
            ...data,
            [ event.target.name ] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(data.nombre + '' + data.apellido)
    }

    return (
        <Fragment>
            <h1>Formulario</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese nombre"
                        className="form-control"
                        name="nombre"
                        onChange={ handleInputChange }>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese apellido"
                        className="form-control"
                        name="apellido"
                        onChange={ handleInputChange }>
                    </input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
            <h3>{data.nombre} {data.apellido}</h3>
        </Fragment>
    )
}
