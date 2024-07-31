import React, { Fragment, useState } from 'react';
import './Todo.css'; 

const Todo = () => {
    let [data, setData] = useState("");
    let [items, setItems] = useState([]);
    let [editIndex,setEditIndex] = useState(null)

    let handleChange = (e) => {
        setData(e.target.value);
    };
    let handleSubmit = (e) => {
        e.preventDefault();
        if (data !== "") {
            if(editIndex!==null){
               items[editIndex]=data
               setEditIndex(null)
            }else{
                setItems([...items, data]);
            }
            setData("");
        }
    };

    let handleDelete = (id) => {
        let updated = items.filter((val, ind) => {
            return ind !== id;
        });
        setItems(updated);
    };
    let handleEdit = (id)=>{
     setData(items[id])
     setEditIndex(id)
    }
    let handleClearAll = () => {
        setItems([]);
    };


    return (
        <div className="container">
            <h1 className="heading">TO-DO-APP</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={data} onChange={handleChange}/>
                <button className="addButton">{editIndex!==null?"UPDATE ITEM":"ADD ITEM"}</button>
            </form>
            <div className="todoList">
                {items.map((val, index) => {
                    return (
                        <Fragment key={index}>
                            <div className="todoItem">
                                <span>{val}</span>
                                <article>
                                <button className="editButton" onClick={()=>handleEdit(index)}>EDIT</button>
                                <button className="deleteButton" onClick={() => handleDelete(index)}>DELETE</button>
                                </article>
                            </div>
                        </Fragment>
                    );
                })}
            </div>
            <button className="clearButton" onClick={handleClearAll}>CLEAR ALL</button>
        </div>
    );
};

export default Todo;

