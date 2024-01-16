import React from 'react'
import {nanoid} from 'nanoid'
import Components from './navComp'
export default function Navbar() {
    const [notes,setNotes]=React.useState([{id:0,title:"default",body:"default layouts"}])
    const [noteTitle,setNoteTitle]=React.useState([{ title:"",id:"" }])
    const [displayOn,setDisplayOn]=React.useState(false)
    const [currId,setCurrId]=React.useState(0)
    function CreateNote(){
        setNotes((prev)=> {
            const newNote={
                id:nanoid(),
                title:"Note",
                body:""
            }
            return [newNote,...prev]
        })
    }
   React.useEffect(()=> {
    setNoteTitle(()=> {
        const title= notes.map((t)=> {
            return {id:t.id,title:t.title}
        })
        return title
    })
   },[notes]
    
   )
   function handleChange(event){
        const {name,value}=event.target
        setNotes((oldNote)=> {
                const newN=oldNote.map((note)=> note.id===currId? {...note,[name]:value}:note)
                return newN
        })
   }
   function SubHandle(event){
            const {name,value}=event.target
            setNotes((oldNotes)=>  oldNotes.map((note)=> note.id===currId?{...note,[name]:value}:note))
   }
   function Delnote(id){
            setNotes((prev)=> prev.filter((note)=> note.id != id))
   }
   const Nvalue=notes.find((note)=>  note.id===currId)||notes[0]
   function show(){
    setDisplayOn((prev)=> !prev)
}
    return (
       <div className="nav-bar">
            <h1 className="title">START WRITING NOTE IN ONE PLACE</h1>
             <div className="box-note">
           <div className="added-item">
           <p className="but-on" onClick={CreateNote}style={{cursor:"pointer"}}>CREATE NEW NOTE</p>
            <Components   notes={notes}
                        title={noteTitle}
                        currid={setCurrId}
                        currNow={currId}
                        delnote={Delnote}
                        DisplayOn={setDisplayOn}
                        
            />
           </div>
           <div className="input-box">
                <div className="rename-input" style={{display:displayOn? "block":"none"}} >
                 <input className="inpt-box" type="text" placeholder="Rename" onChange={SubHandle} name="title" value={Nvalue.title} />
                 <button onClick={show} className="ok-btn" >ok</button>
                 <p>Rename your note here</p>
                </div>
                <textarea
                 className="text-box"  
                 placeholder="Start typing here "
                 name="body"
                 onChange={handleChange}
                 value={Nvalue.body}
            
            ></textarea>
           </div>
           
        </div>
       </div>
    )
}