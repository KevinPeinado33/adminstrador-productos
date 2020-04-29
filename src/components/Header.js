import React from 'react';

import { Link } from 'react-router-dom';

const HeaderComponent = () => {
    return (
        <nav className="navbar has-background-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to={'/'}>
                    <h3>Crud - Reac y Redux</h3>
                </Link>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to={'/productos/nuevo'} className="button is-primary">
                                <strong>Agregar Producto </strong><i className="fas fa-plus"></i>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default HeaderComponent;