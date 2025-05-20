import { useEffect, useState } from "react"
import TodoList from "../components/TodoList"


const Dashboard = () => {

    const [data , setData ] = useState("")
    const [todoList,setTodoList] = useState([])

    // useEffect(
    //     () => {
    //         setData("Sample")
    //     },[]
    // )
    
    // setData("Sample")

    const handileSubmit =  () => {

        // console.log(data)
        setTodoList([...todoList,data])
        console.log(todoList)
        setData("")
    }

    return(
        <div className=" bg-amber-100 w-300px justify-center  content-center">
           <div className=" justify-items-center ">
            <input 
            className=" border-black border-2 m-4 p-4 w-200" 
            type="text" 
            value={data}  
            onChange={(e) => setData(e.target.value)}/>
            <button 
            className="bg-blue-600 rounded- 2xl p-4 text-black" 
            onClick={handileSubmit} > Add</button>
           </div>
           <ol>
            {
                todoList.length > 0 && (
                    todoList.map((item , index) => (
                            <TodoList item = { item} index= {index}/>
                        ))
                    
                )
            }
           </ol>
        </div>
    )
}

export default Dashboard