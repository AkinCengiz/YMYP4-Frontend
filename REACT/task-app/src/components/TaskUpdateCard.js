import React, {useState} from 'react';
import { useContext } from 'react';
import TaskContext from '../context/Task';

export default function TaskUpdateCard({task,setIsUpdate}) {
  const [updateTitle, setUpdateTitle] = useState(task.title);
  const [updateDescription,setUpdateDescription] = useState(task.description);
  const { updateTaskFromTasks } = useContext(TaskContext)
  const titleOnChange = (e) => {
    setUpdateTitle(e.target.value);
  }
  const descriptionOnChange = (e) => {
    setUpdateDescription(e.target.value);
  }
  const onUpdate = () => {
    setIsUpdate(false);
    updateTaskFromTasks(task.id,updateTitle,updateDescription);
  }
  return (
    <div className="task-update-card">
          <div className="task-updated">
            <h2 className="task-title">Görev Ekle</h2>
            <form className="task-update-form">
              <label className="task-update-label">Başlık</label>
              <input className="task-update-input" value={updateTitle} onChange={titleOnChange}/>
              <label className="task-update-label">Açıklama</label>
              <textarea
                className="task-update-input"
                rows={6}
                value={updateDescription}
                onChange={descriptionOnChange}
              />
              <button className="task-button" onClick={onUpdate}>Görev Güncelle</button>
            </form>
          </div>
        </div>
  )
}
