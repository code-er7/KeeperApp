import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notee from "./Notee";
import CreateArea from "./CreateNote";
import { server } from "..";
import axios from "axios";



function App() {
    const [Notes, setNotes] = React.useState([]);
    const [newData, setNewData] = React.useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`${server}/notes/all`);
                const data = response.data.notes;
                setNotes(data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [newData])   

    async function  addNote(newNote) {
        if (newNote.title.length === 0 & newNote.content.length === 0) {
            return null;
        }
        try {
            const response = await axios.post(`${server}/notes/new`, {
                title:newNote.title,
                content:newNote.content
            });
            console.log(response.data); // Handle the response data
          } catch (error) {
            console.error(error);
          }

          if(newData===true)setNewData(false);
          else setNewData(true);
       
    }
    async function deleteNote(id) {
        // console.log("delete was triggered" , id);
        console.log(id);
        try {
            const response = await axios.delete(`${server}/notes/del/${id}`);
            console.log(response.data); // Handle the response data
          } catch (error) {
            console.error(error);
          }
          if(newData===true)setNewData(false);
          else setNewData(true);
    }

    return <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {Notes.map((listItem) => {
            // console.log(listItem._id)
            return (<Notee
                key={listItem._id}
                id={listItem._id}
                title={listItem.title}
                content={listItem.content}
                onDelete={deleteNote} />)
        })}
        <Footer />
    </div>
}
export default App;