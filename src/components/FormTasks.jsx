"use client"
import { Content } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";

function FormTask(){
    const[title,setTitle]=useState('')
    const[descripcion,setDescripcion]=useState('')
    const router= useRouter()

    const handleSubmit= async (e) =>{
        e.preventDefault();
        console.log(title,descripcion)
        const res= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/tasks/`,{
            method:"POST",
            body:JSON.stringify({title,descripcion}),
            headers:{
                "Content-Type":"application/json",
            }
        })
        const data= await res.json()
        console.log(data)
        router.refresh()
    };
    return(

        <div className="bg-slate-200 p-7 h-fit">
             <form onSubmit={handleSubmit}>
                <h1 className="text-black font-bold">Añadir Tarea</h1>
                <label htmlFor="title" className="text-xm text-black">Title</label>
                <input type="text" name="title" className="bg-slate-400 rounded-md p-2 w-full mb-2 w-full text-slate-900" onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="descripcion" className="text-xm text-black">Descripcion</label>
                <textarea name="descripcion" className="bg-slate-400 rounded-md p-2 w-full mb-2 w-full text-slate-900" onChange={e => setDescripcion(e.target.value)}></textarea>

                <button className="bg-indigo-500 text-white ronded-md p-2 block w-full">Save</button>
             </form>

        </div>
    )

}

export default FormTask