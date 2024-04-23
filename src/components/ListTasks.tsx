import Task from "./Task"

type Props = {
  //Objeto de tipo Task
  tasks: {id:number, task: string}[],
  deleteTask: (taskId: number) => void
}

const ListTasks = (props: Props) => {
  return (
    <div className="listTask">
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} deleteTask={props.deleteTask} />
      ))} 
    </div>

  )
}

export default ListTasks