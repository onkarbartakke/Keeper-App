import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = React.useState([]);

  function AddNote(note) {
    setInput((prevValue) => {
      return [...prevValue, note];
    });
  }
  function deleteNote(id) {
    setInput((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return id !== index;
      });
    });
  }
  function noteItem(input, index) {
    return (
      <Note
        key={index}
        id={index}
        title={input.title}
        content={input.content}
        onDelete={deleteNote}
      />
    );
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddNote} />

      {input.map(noteItem)}
      <Footer />
    </div>
  );
}

export default App;
