import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Botao from './Botao.js';

function App() {
    const [showHello, setShowHello] = useState(false);

    const handleClick = () => {
        console.log('Clicou no botão!');
        setShowHello(true);
    };

    return (
        <div>
            <h1>Clique no botão abaixo</h1>
            <Botao onClick={handleClick} label="Botão" />
            {showHello && <h2>Hello World</h2>}
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
