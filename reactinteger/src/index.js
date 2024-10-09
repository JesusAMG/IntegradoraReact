import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import PaginaRegistro from './componentes/registro/page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <PaginaRegistro></PaginaRegistro>

  </React.StrictMode>
);


reportWebVitals();
