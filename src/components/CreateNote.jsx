import React from "react";
function CreateArea(props) {

    const[isExpended , setExpended]= React.useState(false);

    const [newNote, setNote] = React.useState({
        title: "",
        content: ""
    });
    function NoteTaker(event) {
        var name = event.target.name;
        var value = event.target.value;
        setNote((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }
    function SubmitNote(event) {
        props.onAdd(newNote);
        setNote((prevValue) => {
            return {
                title: "",
                content: ""
            }
        });
        event.preventDefault();
    }
    function expand(){
        setExpended(true);
    }
    return (
        <div>
            <form className="create-note" >
                
                {isExpended && (<input onChange={NoteTaker} name="title" placeholder="Title" value={newNote.title} />)}
                <textarea onChange={NoteTaker} onClick={expand} name="content" placeholder="Take a note..." rows={isExpended ? 2 : 1} value={newNote.content} />
                <button onClick={SubmitNote} ><i class="fa-solid fa-plus fa-beat"></i></button>
            </form>
        </div>
    );
}

export default CreateArea;
