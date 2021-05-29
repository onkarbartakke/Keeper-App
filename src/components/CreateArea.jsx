import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content
        };
      } else {
        return {
          title: prevValue.title,
          content: value
        };
      }
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />

        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
