import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import axios from "axios";

function TodoList() {
    const [todo,setTodo] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{
        const fetchApi = async () => {
            try {
                const result = await axios.get('http://localhost:4000/todoList')
                setTodo(result.data);
            }catch (e) {
                console.log(e);
            }
        };
        fetchApi()
    }, []);
    const handleUpdate = (arrIndex) => {
        navigate(`/update/${arrIndex}`);

    };
    return (
        <>
        <div>
            <h1>Todo List</h1>
            <table className={'table'}>
                <thead>
                <tr>
                    <th scope={'col'}>Name</th>
                </tr>
                </thead>
                <tbody>
                <td>
                {
                    todo.map((value,index ) =>(
                        <tr key={index}>
                            <td>{value.name}</td>
                        </tr>
                    ))
                }
                </td>
                <td>
                    <button type={"button"} className={'btn btn-danger'} onClick={() => handleUpdate(index)}>
                        Submit
                    </button>
                </td>
                </tbody>

            </table>
        </div>
         </>
    );
}

export default TodoList;