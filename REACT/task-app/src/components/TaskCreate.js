import React, { useState } from "react";
import { useContext } from 'react';
import TaskContext from '../context/Task';

export default function TaskCreate() {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeDescription = (e) => {
    setDescription(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if ((title !== "") & (description !== "")) {
      createTask(title, description);
    }
    setTitle("");
    setDescription("");
  };
  return (
    <div className="task-created">
      <h2 className="task-title">Görev Ekle</h2>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input className="task-input" value={title} onChange={changeTitle} />
        <label className="task-label">Açıklama</label>
        <textarea
          className="task-input"
          rows={6}
          value={description}
          onChange={changeDescription}
        />
        <button className="task-button" onClick={formSubmit}>
          Görev Oluştur
        </button>
      </form>
    </div>
  );
}
