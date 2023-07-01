import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notee from "./Notee";
import CreateArea from "./CreateNote";
function App() {

    const [Notes, setNotes] = React.useState([]);
    function addNote(newNote) {
        if(newNote.title.length === 0 & newNote.content.length === 0){
            return null;
        }
        setNotes((prevNote) => {
            return [...prevNote, newNote];
        })
    }
    function deleteNote(id) {
        // console.log("delete was triggered" , id);
        setNotes((prevNotes)=>{
           return prevNotes.filter((noteItem , indexI)=>{
                return indexI!==id ;
            })
        })
        
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {Notes.map((listItem, index) => {
            return (<Notee
                key={index}
                id={index}
                title={listItem.title}
                content={listItem.content}
                onDelete={deleteNote} />)
        })}
        <Footer />
    </div>
}
export default App;