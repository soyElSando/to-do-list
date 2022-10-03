import './App.css';
import {useState} from "react"
import {mock} from "./MockTasks"

function App() {

  const [tareas,setTareas] = useState(mock)
  const [nuevaTarea,setNuevaTarea]=useState("")

  const listTasks = tareas.map((tarea) =>
      <li  key={tarea}>
        {tarea}
        <button onClick={()=>borrarTarea(tarea)}>Borrar</button>
      </li>
    );

  const handleChange =(event)=>{
    setNuevaTarea(event.target.value)
  }

  const addNewTask = (e)=>{
    e.preventDefault()
    setTareas((prev)=>[...prev,nuevaTarea])
    setNuevaTarea("")
  }

  const borrarTarea =(tarea)=>{
    let tareasFiltradas= tareas.filter((unaTarea)=>unaTarea!==tarea)
    setTareas(tareasFiltradas)
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <form onSubmit={addNewTask}>
        <label>
          Nueva tarea: 
          <input type="text" value={nuevaTarea} onChange={handleChange} />
        </label>
        <input type="submit" value="Agregar" />
      </form>
      <ul>{listTasks}</ul>
    </>
  );
}

export default App;
