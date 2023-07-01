import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <form
          className="top"
          onSubmit={
            isUpdating
              ? () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating)
              : () => addToDo(text, setText, setToDo)
          }
        >
          <input
            type="text"
            placeholder="Add ToDos..."
            value={text}
            required
            onChange={(e) => setText(e.target.value)}
          />

          <button type="submit" className="add">
            {isUpdating ? "Update" : "Add"}
          </button>
        </form>

        <div className="list">
          {toDo.map((item) => (
            <ToDo
              key={item._id}
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)}
              deleteToDo={() => deleteToDo(item._id, setToDo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
