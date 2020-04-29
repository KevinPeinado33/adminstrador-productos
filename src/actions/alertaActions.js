import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types';

// crear la alerta y mostrarla
export function mostrarAlertaAction(alerta) {
    return (dispatch) => {
        dispatch( crearAlerta(alerta) );
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})


//ocultar alerta
export function ocultarAlertaAction() {
    return (dispatch) => {
        dispatch( ocultarAlerta() );
    }
}

const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})