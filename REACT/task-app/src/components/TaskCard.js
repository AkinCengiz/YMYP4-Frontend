import React, { useState } from "react";
import TaskUpdateCard from "./TaskUpdateCard";
import { useContext } from 'react';
import TaskContext from '../context/Task';

export default function TaskCard({ task }) {
  const [isUpdate, setIsUpdate] = useState(false);
  const { deleteTaskFromTasks } = useContext(TaskContext)

  const deleteClick = () => {
    deleteTaskFromTasks(task.id);
  };
  const changePanel = () => {
    setIsUpdate(true);
  }
  
  return (
    <div className="task-card">
      {isUpdate ? (
        <TaskUpdateCard task={task} setIsUpdate={setIsUpdate} />
      ) : (
        <div>
          <h3>Görev Kartı</h3>
          <h4>Göreviniz</h4>
          <p>{task.title}</p>
          <h4>Açıklama</h4>
          <p>{task.description}</p>
          <div className="task-button-group">
            <button id="btn-update" className="card-button" onClick={changePanel}>
              Güncelle
            </button>
            <button
              id="btn-delete"
              className="card-button"
              onClick={deleteClick}
            >
              Sil
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
