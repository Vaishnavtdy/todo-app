import axios from "axios";

const baseUrl = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log("data---->", data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setTodo) => {
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err));
};

const updateToDo = (_id, text, setText, setTodo, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id, text })
    .then((data) => {
      console.log(data);
      setText("");
      setIsUpdating(false);
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setTodo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      console.log(data);
      getAllToDo(setTodo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
