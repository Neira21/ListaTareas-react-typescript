import { useState } from 'react'
//import FormTask from './components/FormTask'
import ListTasks from './components/ListTasks'
import './index.css'
import { useRef } from 'react'

//array de objetos typescript
interface Task {
  id: number,
  task: string
}

function App() {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<Task[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const AddTask = (task : Task) : void => {
    setTasks([ task, ...tasks])
    inputRef.current?.focus()
  }

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(newTask === '') return alert('Debes agregar una tarea')
    
    const ObjectTask = {
      id: new Date().getTime(),
      task: newTask
    }
    console.log(ObjectTask)
    AddTask(ObjectTask)
    setNewTask('')
  }

  const deleteTask = (id: number) => {
    console.log("llegó: ", id)
    const newTasks = tasks.filter(
      (task) => task.id !== id
    )
    setTasks(newTasks)
  }

  return (
    <>
      <div className='main'>
        <h1>Lista de Tareas hecha en TypeScript</h1>
          <form className='form' onSubmit={handleAddTask}>
            <input 
              ref={inputRef}
              type="text" 
              onChange={(e) => setNewTask(e.target.value)} 
              placeholder="Ingresa una nueva tarea" 
              value={newTask}
              />
            <button>Agregar</button>
          </form>
          <ListTasks tasks={tasks} deleteTask={deleteTask} />
        </div>    
      
    </>
  )
}

export default App
