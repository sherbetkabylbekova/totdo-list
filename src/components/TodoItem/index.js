import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash, faSave} from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({el, deleteTodo,saveTodo}) => {
    const [edit,setEdit] = useState(false)
    const [newTitle, setNewtitle] = useState(el.title)
    const handleEdit = () =>{
        setEdit(true)
    }
    const handleNewValue = (e) => {
        setNewtitle(e.target.value)
    }
    const handleSave = () => {
        saveTodo(el.id,newTitle)
        setEdit(false)
    }
    return (
        <li key={el.id} className="list-group-item d-flex justify-content-between align-item-center">
            {
                edit ? <input type="text" className="form-control me-2" defaultValue={el.title} onChange={handleNewValue}/> :
                    <span>{el.title}</span>
            }
            <div className="d-flex">
                <button type="button" className="btn btn-outline-warning me-2" onClick={edit ? handleSave : handleEdit}>
                    {
                        edit ? <FontAwesomeIcon icon={faSave}/> : <FontAwesomeIcon icon={faEdit}/>
                    }
                </button>
                <button type="button" className="btn btn-outline-danger" onClick={() => deleteTodo(el.id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </li>

    );
};

export default TodoItem;