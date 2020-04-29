import React, { useState, useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { editarProductoAtion } from '../actions/productoActions';


const EditarProducto = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const [producto, guardarProducto] = useState({
        nombre: '',
        precio: ''
    });

    // Producto a editar
    const productoeditar = useSelector(state => state.productos.productoeditar);

    // llenar el state automaticamente
    useEffect(() => {
        guardarProducto(productoeditar);
    }, [productoeditar]);

    // leer datos del formulario
    const onChangeFormulario = e => {
        guardarProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }

    const { nombre, precio } = producto;

    const submitEditarProducto = e => {
        e.preventDefault();
        dispatch(editarProductoAtion(producto));
        history.push('/');  
    }

    return (
        <div className="card" style={{ marginTop: 20 }}>
            <div className="card-content">
                <p className="title" style={{ textAlign: "center" }}>Editar Producto</p>
                <div className="content">
                    <form onSubmit={submitEditarProducto}>
                        <div className="columns">
                            <div className="field column is-6">
                                <label>Nombre Del Producto</label>
                                <div className="control">
                                    <input
                                        className="input is-info"
                                        name="nombre"
                                        type="text"
                                        value={nombre}
                                        onChange={onChangeFormulario} />
                                </div>
                            </div>
                            <div className="field column is-6">
                                <label>Precio Del Producto</label>
                                <div className="control">
                                    <input
                                        className="input is-info"
                                        type="text"
                                        name="precio"
                                        value={precio}
                                        onChange={onChangeFormulario} />
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column is-6">
                                <button
                                    type="submit"
                                    className="button is-link">
                                    Guardar Cambios
                                <i className="far fa-save"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditarProducto;