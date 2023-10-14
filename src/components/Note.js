import React ,{ useState } from "react";


function Note(props) {
    
    const [ note, setNote ] = useState({
    title:"",
    content:""})



    function handleInput(event) {
        const { name, value } = event.target;

        setNote((prevNote)=> {
            return {
                ...prevNote,
                [name] : value
            }
        }); 
        
        
    }

    function handleSubmit (event){
        props.onAdd(note)

       
        event.preventDefault();
    }




    return (
    
    <div className="flex flex-col justify-center items-center m-7 w-[500px] ">
        <form action="" className="flex flex-col justify-center items-center   p-4 ">
        <input   onChange={handleInput} name="title"   value={note.title} className="p-2f shadow-2xl" placeholder="This is the title" />
        <textarea onChange={handleInput} name="content" value={note.content} className="p-1  shadow-2xl"  placeholder="This is the content" />
        <button onClick={handleSubmit} className="p-4 -my-11 ml-72" >add</button>
        </form>
    </div>

    );

}

export default Note;
