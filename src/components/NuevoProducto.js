import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions de redux
import { crearNuevosProductoAction } from '../actions/productoActions';
import { mostrarAlertaAction, ocultarAlertaAction } from '../actions/alertaActions';

const NuevoProducto = ({ history }) => {

    //state del componenete
    const [nombre, guardarNombre] = useState('');
    const [precio, guardarPrecio] = useState(0);

    //utiliza use dispatch y te crea otra funcion
    const dispatch =  useDispatch();

    //acceder al state del store
    const cargando = useSelector( state => state.productos.loading );
    const error = useSelector( state => state.productos.error );
    const alerta = useSelector( state => state.alerta.alerta );

    //manda a llamar el action de 
    const agregarProducto = producto => dispatch( crearNuevosProductoAction(producto) );

    //cuando el usuario haga submit
    const submitNuevoProducto = e => {
        e.preventDefault();

        if(nombre.trim() === '' || precio <= 0 ) {
            const alerta = {
                msg:'Ambos campos son obligatorios',
                classes: 'notification is-danger'
            }
            dispatch( mostrarAlertaAction(alerta) );
            return;
        }

        dispatch( ocultarAlertaAction() );

        agregarProducto({
            nombre, precio
        });

        history.push('/');
    }

    return (
        <div className="card" style={{ marginTop: 20 }}>
            <div className="card-content">
                <p className="title" style={{ textAlign: "center" }}>Agregar Nuevo Producto</p>
                {alerta ? <div className={alerta.classes}>{alerta.msg}</div>:null}
                <div className="content">
                    <form
                        onSubmit={submitNuevoProducto}
                    >
                        <div className="columns">
                            <div className="field column is-6">
                                <label>Nombre Del Producto</label>
                                <div className="control">
                                    <input 
                                        className="input is-info" 
                                        type="text"
                                        name="nombre"
                                        value={nombre}
                                        onChange={e => guardarNombre(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="field column is-6">
                                <label>Precio Del Producto</label>
                                <div className="control">
                                    <input 
                                        className="input is-info" 
                                        type="number" 
                                        name="precio"
                                        value={precio}
                                        onChange={e => guardarPrecio(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column is-6">
                                <button type="submit" className="button is-link">Agregar <i className="far fa-save"></i></button>
                            </div>
                        </div>
                    </form>
                    { cargando ? <p>Cargando ...</p> :  null }
                    { error ? <div className="notification is-danger" style={{marginTop: 20}}><button className="delete"></button>Ukssss hubo un error :c</div> : null }
                </div>
            </div>
        </div>
    )
}

export default NuevoProducto;