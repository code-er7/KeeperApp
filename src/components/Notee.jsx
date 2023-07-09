import React from "react";


function Note(props) {
    function handelClick(event) {
        console.log(props.id);
        props.onDelete(props.id)

    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handelClick}><i class="fa-solid fa-trash fa-beat"></i></button>
        </div>

    );
}
export default Note;