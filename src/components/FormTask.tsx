import { useState } from "react"

type Props = {
  addTask: (task: string) => void
}

const FormTask = ({addTask} : Props) => {
  
  const [task, setTask] = useState<string>('')

  const handleSubmit = ( e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    addTask(task)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Ingresa una nueva tarea" 
          value={task} 
          name='task' />
        <button>Agregar</button>
      </form>
    </div>
  )
}

export default FormTask