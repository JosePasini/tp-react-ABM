import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { Navbar } from '../components/Navbar'


export const ListInstrumentos = () => {

    const [term, setTerm] = useState('');

    const [filtroPrecio, setFiltroPrecio] = useState({
        desde: 0,
        hasta: 0,
    })

    // Filtrar por precio :: Desde <==> Hasta
    const filtrarPorPrecio = (e) => {
        e.preventDefault();
        console.log("Desde", filtroPrecio.desde)
        console.log("Hasta", filtroPrecio.hasta)
        let resultadoBusqueda = tablaInstrumentos.filter((elemento) => {
            if (elemento.precio >= filtroPrecio.desde && elemento.precio <= filtroPrecio.hasta) {
                return elemento;
            }
        });
        setInstrumentos(resultadoBusqueda)
    }

    const handleInputChange = (event) => {
        setFiltroPrecio({
            ...filtroPrecio,
            [event.target.name]: event.target.value
        })
        console.log("Desde", filtroPrecio.desde)
        console.log("Hasta", filtroPrecio.hasta)
    }

    const url = 'http://localhost:8080/instrumento/getAll'
    const [instrumentos, setInstrumentos] = useState([]);
    const [tablaInstrumentos, setTablaInstrumentos] = useState([]);


    const handleChange = (e) => {
        setTerm(e.target.value)
        filtrarPorNombre(e.target.value);
    }

    // Función para filtrar por nombre de instrumento || marca de instrumento
    const filtrarPorNombre = (terminoBusqueda) => {
        let resultadoBusqueda = tablaInstrumentos.filter(({ instrumento, marca }) => {
            if (instrumento) {
                if (instrumento.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                    return instrumento;
                }
            }
            if (marca) {
                if (marca.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())) {
                    return marca;
                }
            }
        });
        setInstrumentos(resultadoBusqueda)
    }

    const obtenerDatos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        const instrumento = data
        setInstrumentos(...instrumentos, instrumento)
        setInstrumentos(data)
        setTablaInstrumentos(data)
        console.log(instrumentos)
    }

    useEffect(() => {
        obtenerDatos();
    }, [])

    return (
        <div>
            <Navbar />
            {/* SEARCH por Nombre de Instrumento o por Marca de Instrumento */}
            <div className="container">
                <b>Filtrar por Instrumento:</b>
                    <input
                        className="form-control inputBuscar"
                        placeholder="por ej. guitarra"
                        name="term"
                        onChange={handleChange}
                    >
                    </input>
                    <button
                        className="btn btn-primary"
                        type="input">
                        Buscar
                    </button>
            </div>

            {/* SEARCH por Precio Máximo */}
            <div className="container">
                <b>Filtrar por Precio Máximo:</b>
                <form className="form-control" >
                    <input
                        className="form-control inputBuscar"
                        placeholder="Precio Desde"
                        name="desde"
                        onChange={handleInputChange}
                    >
                    </input>
                    <input
                        className="form-control inputBuscar"
                        placeholder="Precio Hasta"
                        name="hasta"
                        onChange={handleInputChange}
                    >
                    </input>

                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={filtrarPorPrecio}>
                        Filtrar
                    </button>
                </form>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Instrumento</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Ver Detalles</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instrumentos &&
                        instrumentos.map(instrumento => {
                            return <tr key={instrumento.id} className="table-active">
                                <th scope="row">{instrumento.id}</th>
                                <td>{instrumento.instrumento}</td>
                                <td>{instrumento.marca}</td>
                                <td>{instrumento.precio}</td>
                                <Link to={`/instrumento/${instrumento.id}`}>Ver Detalles</Link>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListInstrumentos;
