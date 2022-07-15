import React from "react";


const Tarea = (props) => {

    const borrarTarea = () => {
        props.borrar(props.id);
    }

    return (
            <div>
                <div className="tarea">
                    <span>{props.tarea}</span> 
                    <button id="elim" onClick={borrarTarea} >Eliminar</button>
                    
                </div>
            </div>
    );
}

export default Tarea;