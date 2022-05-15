import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import App from './App';
import ListInstrumentos from './components/ListInstrumentos'
import { InstrumentoById } from "./components/InstrumentoById"
import {Formulario} from "./components/Formulario"
import {PostInstrumento} from "./components/PostInstrumento"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/getInstrumentos" element={<ListInstrumentos />} />
      <Route path="/instrumento/:idInstrumento" element={<InstrumentoById />} />
      <Route path="/formulario" element={<Formulario />} />
      <Route path="/postInstrumento" element={<PostInstrumento />} />

    </Routes>
  </BrowserRouter>,

  // <React.StrictMode>
  // </React.StrictMode>
);

