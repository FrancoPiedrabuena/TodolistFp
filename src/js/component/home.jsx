import React, { useState } from "react";
import Header from "./Header.jsx";
import FormulariosTareas from "./FormulariosTareas.jsx";
import Tarea from "./tareas.jsx";






//create your first component
const Home = () => {

	const [listaTareas, setListaTareas] = useState([]);

	const nuevaTarea = (tarea) => {
		setListaTareas([tarea, ...listaTareas]);
	}

	const borrar = (id) => {
		const listaFiltrada = listaTareas.filter((e, index) => index !== id);
		setListaTareas(listaFiltrada);

	}

	return (
		<div className="container">
			<Header />

			<FormulariosTareas nuevaTarea={nuevaTarea} />

			<div className="Lista">

				{
					listaTareas.map((e, index) =>
						<Tarea tarea={e}
							borrar={borrar}
							id={index}
						/>)
				}

			</div>
		</div>
	);



}

export default Home;
