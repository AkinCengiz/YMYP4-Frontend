import React from 'react'
import TaskCard from './TaskCard';
import { useContext } from 'react';
import TaskContext from '../context/Task';

export default function TaskList() {
  const { tasks } = useContext(TaskContext)
  return (
    <div className='task-list'>
        {
            tasks.map(task => {
                return(
                    <TaskCard key={task.id} task={task}/>
                )
            })
        }
    </div>
  )
}
