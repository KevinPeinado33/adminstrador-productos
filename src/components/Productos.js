import React, { Fragment, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

import Producto from './Producto';

const Productos = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        //consultar la api
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();


        // el comentario elimina el warning uwu
        // eslint-disable-next-line
    }, []);

    const productos = useSelector( state => state.productos.productos );
    const error = useSelector( state => state.productos.error );
    const cargando = useSelector( state => state.productos.loading );

    return(
        <Fragment>
            <h1 className="title" style={{textAlign:"center", marginTop: 20}}> Lista De Productos</h1>
            {error ? <div className="notification is-danger" style={{marginTop: 20, marginBottom: 20}}><button className="delete"></button>Ukssss hubo un error al listar :c</div> : null}
            {cargando ? <p>Cargando ...</p> : null}
            {productos.length === 0 ? 'No hay productos':
                (productos.map(producto =>(
                    <Producto
                        key={producto.id}
                        producto={producto}
                    />
                )))
            }
        </Fragment>
    )
}

export default Productos;