import React from "react";


    function Card({id,titulo,url,contenido}) {
        return (
            <div className="contenedorCarta">
                <img src={url} alt="Imagen" />
                <p>{id}</p>
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </div>
        )
    }
    
    export default Card;
