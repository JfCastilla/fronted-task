import FormTask from "@/components/FormTasks"
import ListTask from "@/components/ListTasks"

export const dynamic ="force-dynamic"

function HomePage(){
  return (
    <div className="container mx-auto">

      <h1>Tasks App</h1>
      <div className="flex gap-x-10">
        <FormTask />
        <ListTask />
      </div>

    </div>

  )
}

export default HomePage