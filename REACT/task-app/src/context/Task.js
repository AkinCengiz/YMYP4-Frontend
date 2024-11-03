import { createContext, useState } from "react"

const TaskContext = createContext();

function Provider({children}){
  const [tasks,setTasks] = useState([]);
  // const [users, setUsers] = useState([]);

  const createTask = (title,description) => {
    const newTasks = [...tasks,{
      id:Math.floor(Math.random()*1000000),
      title : title,
      description : description
    }];
    setTasks(newTasks);
  }
  const deleteTaskFromTasks = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }
  const updateTaskFromTasks = (id,title,description) => {
    const newTasks = tasks.map((task) => {
      if(task.id === id){
        return { id : id, title : title, description:description}
      }
      return task;
    })
    setTasks(newTasks);
  }
  const valueAndMethods = {
    tasks,
    createTask,
    deleteTaskFromTasks,
    updateTaskFromTasks
  };

  return(
    <TaskContext.Provider value={valueAndMethods}>
      {children}
    </TaskContext.Provider>
  )
}
export { Provider }
export default TaskContext;