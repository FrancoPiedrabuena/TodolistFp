import React, { useState } from "react";

const FormulariosTareas = (props)  => {
    const [inputText, setInputText] = useState("");
    const [validacion, setValidacion] = useState (true);

    const manejarFormulario = (event) => {
        setInputText(event.target.value);
        
    }

    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){
            props.nuevaTarea(inputText);
            setInputText("");
            setValidacion(true)   
        }   else {
            setValidacion(false)
        }

    }

    return (
        <div>
            <form className="Form" onSubmit={submit}>
                
                <input id="botonn" value={inputText} onChange={manejarFormulario} /> 
                <button id="button"> Añadir</button>

            </form>
            {  !validacion &&
            <div className="validacion">No hay tareas, añadir tareas</div>
          
            }

        </div>

    );
}
export default FormulariosTareas;