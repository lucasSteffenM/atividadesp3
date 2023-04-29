import React from 'react';
function Botao(props) {
    return (
        <button onClick={props.onClick}>
            {props.label}
        </button>
    );
}
export default Botao;