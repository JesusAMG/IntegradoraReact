import React from 'react';
import LogoUni from '../logoUni';
import Registro from './registro';
import './page.css';

function Page() {
  return (
    <div className="page-container">
      <div className="page-section">
        <LogoUni />
      </div>
      <div className="page-section">
        <Registro />
      </div>
    </div>
  );
}

export default Page;