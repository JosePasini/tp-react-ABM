import React from 'react';
import { Link } from 'react-router-dom'
import ListInstrumentos from './ListInstrumentos';

export const Navbar = ({ instrumentos }) => {
    return (

        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to={`/#`} className="navbar-brand">HOME</Link>
            </div>
            <button className="btn btn-primary">
                <Link to={`/getInstrumentos`} className="navbar-brand">Ver Listado</Link>
            </button>

            <button className="btn btn-primary">
                <Link to={`/postInstrumento`} className="navbar-brand">Agregar Instrumento</Link>
            </button>

            {/* <button className="btn btn-success">
                <Link to={`/getInstrumentos`} style={{color: 'white'}} activeStyle={{color: 'red'}}>Ver Listado</Link>
            </button> */}

            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

        </nav>
    )
}

export default Navbar;

