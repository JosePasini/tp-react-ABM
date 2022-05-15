import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Navbar } from '../components/Navbar'


export const InstrumentoById = () => {
    const { idInstrumento } = useParams();
    const url = `http://localhost:8080/instrumento/${idInstrumento}`

    const [instrumento, setInstrumento] = useState();

    const obtenerDatos = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setInstrumento(data)
        console.log(instrumento)
    }

    useEffect(() => {
        obtenerDatos();
    }, [])


    return (
        <div className="container">
            <Navbar />
            <div>
                <img src="https://api.lorem.space/image/album?w=150&amp;amp;amp;amp;h=220" alt="fgdsa"></img>
            </div>
            {instrumento ?
                <div className="container">
                    <ul>
                        <li><b>Instrumento:</b> {instrumento.instrumento}</li>
                        <li><b>Marca:</b> {instrumento.marca}</li>
                        <li><b>Modelo:</b> {instrumento.modelo}</li>
                        <li><b>Cantidad Vendida:</b> {instrumento.cantidad_vendida}</li>
                    </ul>
                    <hr />
                    <div>
                        <p><b>Descripción:</b> {instrumento.descripcion}</p>
                    </div>
                </div>
                :
                <ul>
                    <li>instrumento</li>
                </ul>
            }
        </div>
    )
}

export default InstrumentoById;
