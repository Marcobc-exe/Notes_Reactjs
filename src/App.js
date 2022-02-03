import Note from "./Note";
import { useState, useEffect } from "react";

const App = () => {
  //if (typeof notes === "undefined" || notes.length === 0 || notes === null) return "No tenemos notas que mostrar!"

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState("")

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
      setNotes(json)
    })
  }, [])

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const noteToAddToState = {
      id: notes.length + 1,
      title: newNote,
      body: newNote
    }
    setNotes(notes.concat(noteToAddToState))
    setNewNote("")
    /*
      setNotes([
        ...notes,
        noteToAddToState
      ])
    */
  }


  // El último botón de un formulario funcionará como un <Submit>
  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {
          notes.map(note => <Note key={note.id} {...note} />)
        }
      </ol>

      
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange}/>
        <button>Crear nota</button>
      </form>
    </div>
  );
}

export default App;
