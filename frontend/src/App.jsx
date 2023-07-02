import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import {
  addToDo,
  completeToDo,
  deleteToDo,
  getAllToDos,
  updateToDo,
} from "./utils/HandleApi";

function App() {
  const [toDos, setToDos] = useState([]);
  const [text, setText] = useState("");
  const [toDoId, setToDoId] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getAllToDos(setToDos);
  }, []);

  const updateMode = (_id, text) => {
    setIsUpdate(true);
    setToDoId(_id);
    setText(text);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>

        <div className="top">
          <input
            type="text"
            placeholder="Add ToDos.."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div
            className="add"
            onClick={() => {
              isUpdate
                ? updateToDo(toDoId, text, setText, setIsUpdate, setToDos)
                : addToDo(text, setText, setToDos);
            }}
          >
            {isUpdate ? "Update" : "Add"}
          </div>
        </div>

        <div className="list">
          {toDos?.map((item) => (
            <ToDo
              key={item?._id}
              text={item.text}
              status={item.status}
              deleteToDo={() => deleteToDo(item._id, setToDos)}
              updateMode={() => updateMode(item._id, item.text)}
              completeTodo={() =>
                completeToDo(item?._id, !item?.status, setToDos)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
