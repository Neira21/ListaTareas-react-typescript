type Props = {
  task: {id:number, task: string},
  deleteTask: (taskId: number) => void
  
}

const Task = (props: Props) => {
  return (
    <div className="task" >
        <span className="task-text">
          {props.task.task}
        </span>
        <button className="task-button"  onClick={() =>props.deleteTask(props.task.id)}>Eliminar</button>
    </div>
  )
}

export default Task