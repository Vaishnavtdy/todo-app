import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDos = (setToDoS) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data-->", data);
    setToDoS(data);
  });
};

const addToDo = (text, setText, setToDos) => {
  axios.post(`${baseUrl}/create`, { text }).then((data) => {
    console.log("data--->", data);
    setText("");
    getAllToDos(setToDos);
  });
};

const updateToDo = (toDoId, text, setText, setIsUpdate, setToDoS) => {
  axios
    .post(`${baseUrl}/update`, {
      _id: toDoId,
      text: text,
    })
    .then((data) => {
      console.log("data-->", data);
      setText("");
      setIsUpdate(false);
      getAllToDos(setToDoS);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteToDo = (_id, setToDoS) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log("data--->", data);
      getAllToDos(setToDoS);
    })
    .catch((err) => {
      console.log(err);
    });
};

const completeToDo = (_id, status, setToDoS) => {
  axios
    .post(`${baseUrl}/update`, { _id, status })
    .then((data) => {
      console.log("data--->", data);
      getAllToDos(setToDoS);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { getAllToDos, addToDo, updateToDo, deleteToDo, completeToDo };
