import Task from "./Task"

type Props = {
  //Objeto de tipo Task
  tasks: {id:number, task: string, editing: boolean}[],
  deleteTask: (taskId: number) => void
  openEdit: (taskId: number) => void
  editTask: (taskId: number, newTask: string) => void
}

const ListTasks = (props: Props) => {

  return (
    <div className="listTask">
      {props.tasks.map((task) => (
        <>
          <Task key={task.id} task={task} deleteTask={props.deleteTask} editTask={props.editTask} openEdit={props.openEdit} />
        </>
      ))} 
    </div>

  )
}

export default ListTasks