import TaskCard from "./TaskCard"

async function LoadTask(){
    const res=await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`)
    const tasks=await res.json()
    return tasks
}

async function ListTask(){
    const tasks=await LoadTask()
    console.log(tasks)
    
    return(

        <div className="Bg-slate-700 p-4 w-full">
            <h1>Lista de tareas</h1>
            {tasks.map((task) => (
                <TaskCard task={task} key={task.id}/>
            ))}
        </div>
    )

}

export default ListTask;