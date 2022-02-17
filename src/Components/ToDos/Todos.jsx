import React, { useState } from "react";
import { connect } from "react-redux";
import { addNewTodo } from "../../Redux/Actions/Todoaction"


function Todos(props) {
    const [text, settext] = useState("")
    return (
        <div>
            <h1> Todos:</h1>

            <input type="text" onChange={(e) => settext(e.target.value)} />
            <button type="button" onClick={() => props.addNewTodo(text)}>ADD</button>

            <ol>
                {props.todos.map((item, i) => <li key={i}>{item.title}</li>)}
            </ol>

        </div>
    )
}

export default connect((state) => ({ todos: state.todos }), { addNewTodo })(Todos);