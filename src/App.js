import React, { useState } from "react";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Note from "./components/Note"
import CreateArea from "./components/CreateArea";


function App(){
    const [notes , setNotes]= useState([])

    function addText(newNote){
        setNotes( prevNote => {
            return [...prevNote ,newNote]
        })
    }


    function deleteNote(id){
      setNotes(prevNote => {
       return prevNote.filter((noteItem, index)=> {
            return index !== id;
        })
      })
    }


    return (
        <div>
            <Header /> 
            <Note onAdd={addText}  />
            {notes.map((noteItem, index) => {
                return <CreateArea key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />
            })}
            <Footer />
        </div>
);

}

export default App;