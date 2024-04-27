import { useState } from "react"

type Props = {
  task: {id:number, task: string, editing: boolean},
  deleteTask: (taskId: number) => void
  openEdit: (taskId: number) => void
  editTask: (taskId: number, newTask: string) => void
}

const Task = (props: Props) => {
  const [taskNew, setTaskNew] = useState<string>(props.task.task)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskNew(e.target.value)
  }

  const handleEdit = (id:number, newTask: string) => {
    props.editTask(id, newTask)
    setTaskNew('')
  }


  return (
    <>
      <div className="task" >
          <span className="task-text">
            {props.task.task}
          </span>
          <button className="task-button" onClick={() =>props.openEdit(props.task.id)}>Editar</button>
          <button className="task-button"  onClick={() =>props.deleteTask(props.task.id)}>Eliminar</button>
      </div>
      {props.task.editing && 
        <div>
          <input type="text" value={taskNew} onChange={onChange}/> 
          <button onClick={()=>handleEdit(props.task.id, taskNew)}>Edit</button>
          <button onClick={()=>props.openEdit(props.task.id)} >Cancelar</button>
        </div> 
      }
    </>
)}

export default Task