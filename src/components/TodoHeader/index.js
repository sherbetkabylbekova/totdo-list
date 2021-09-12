import React from 'react';

const TodoHeader = ({value, addTodo, handleInput, lenght}) => {
    return (
        <div>
          <div className="d-flex align-item-center justify-content-between">
              <h2>Todolist</h2>
              <span>Items:{lenght}</span>
          </div>
            <div className="d-flex mb-4">
                <input type="text" className="form-control me-2" value={value} onChange={handleInput}/>
                <button className="btn btn-primary" onClick={addTodo} disabled={!value.trim()}>Добавить</button>
            </div>
        </div>

    );
};

export default TodoHeader;