import React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { borrarProductoAction, obtenerProductoEditarAction } from '../actions/productoActions';

import Swal from 'sweetalert2';

const Producto = ({ producto }) => {
    
    const { nombre, precio, id } = producto;

    const dispatch = useDispatch();
    const history = useHistory();

    const confirmarEliminarProducto = id => {
        //preguntar al usuario
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Un producto eliminado no vuelve atras uwu",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Simon, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                //pasarlo al action
                dispatch(borrarProductoAction(id));
            }
        })
    }

    // funcion q redirige de forma programada
    const redireccionarEdicion = producto => {
        dispatch( obtenerProductoEditarAction(producto) );
        history.push(`/productos/editar/${producto.id}`);
    }

    return (
        <div className="card" style={{ marginBottom: 20 }}>
            <header className="card-header">
                <p className="card-header-title">
                    {nombre}
                </p>
                <a href="!#" className="card-header-icon" aria-label="more options">
                    <span className="icon">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </a>
            </header>
            <div className="card-content">
                <div className="content">
                    Precio: ${precio}
                </div>
            </div>
            <footer className="card-footer">
                <button
                    type="button"
                    onClick={() => redireccionarEdicion(producto)}
                    className="card-footer-item button is-warning"
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="card-footer-item button is-danger"
                    onClick={() => confirmarEliminarProducto(id)}
                >
                    Eliminar
                </button>
            </footer>
        </div>
    )
}

export default Producto;