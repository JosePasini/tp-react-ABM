import React from 'react';
import { Link } from 'react-router-dom';

const img = "https://api.lorem.space/image/album?w=150&amp;amp;amp;amp;h=220"

export const Instrumentos = ({ instrumentos = [] }) => {
    return (
        <div className="row">

            {
                instrumentos.map((instrumento, id) => (
                    <div key={id} className="col">
                        <div className="card">
                            <img src={img} alt={instrumento.instrumento} />

                            <div className="card-body">
                                <h5 className="card-title">{instrumento.instrumento}</h5>
                                <hr />
                                <p>Species: {instrumento.marca}</p>
                                {
                                    (instrumento.costo_envio === 0 ?
                                        <p>Envío gratis</p>
                                        :
                                        <p>Envío a costo del comprador ${instrumento.precio}</p>)
                                }
                                <p>Status: {instrumento.modelo}</p>
                            </div>
                            <div className="container">
                                <Link to={`/instrumento/${instrumento.id}`}>Ver más</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}
export default Instrumentos;