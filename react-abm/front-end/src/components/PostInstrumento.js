import React, { useState, useEffect, Fragment } from 'react'
import { Navbar } from '../components/Navbar'


export const PostInstrumento = () => {

    const [data, setData] = useState({
        instrumento: '',
        marca: '',
        modelo: '',
        precio: 0,
        costo_envio: 0,
        cantidad_vendida: 0,
        descripcion: '',
    })

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = async (event) => {
        try {
            event.preventDefault();


            console.log("Data:", data)

            const url = "http://localhost:8080/instrumento"
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            }

            console.log("body:",requestOptions.body)


            const res = await fetch(url, requestOptions)
            console.log("Res fetch", res)
            console.log(data)
            console.log(data.instrumento + '' + data.marca)
        }catch(e) {
            console.log("Error", e)
        }
    }

    return (
        <Fragment>
            <Navbar />
            <h1>Agregar Instrumento</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        placeholder="Ingrese instrumento"
                        className="form-control"
                        name="instrumento"
                        type="text"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese marca"
                        className="form-control"
                        name="marca"
                        type="text"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese modelo"
                        className="form-control"
                        name="modelo"
                        type="text"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese precio"
                        className="form-control"
                        name="precio"
                        type="number"
                        onChange={handleInputChange}>
                    </input>
                </div>

                <div className="col-md-3">
                    <input placeholder="Ingrese costo de envio"
                        className="form-control"
                        name="costo_envio"
                        type="number"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese cantidad vendida"
                        className="form-control"
                        name="cantidad_vendida"
                        type="number"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <input placeholder="Ingrese cantidad descripcion"
                        className="form-control"
                        name="descripcion"
                        type="text"
                        onChange={handleInputChange}>
                    </input>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary" type="submit">Enviar</button>
                </div>
            </form>
        </Fragment>
    )
}
