import axios from 'axios'

const baseURL = "https://todoapp-backend-4jsh.onrender.com"

const getToDoList = (setTask) => {
    axios.get(`${baseURL}/view`)
        .then(({data}) => {
            console.log("data = ", data);
            setTask(data)
        })
        .catch((err) => console.log(err))
}

const addTask = (text, setText, setTask) => {
    axios.post(`${baseURL}/add`, {text})
        .then((data) => {
            console.log(data);
            setText("")
            getToDoList(setTask)
        })
        .catch((err) => console.log(err))
}

const updateTask = (taskId, text, setText, setTask, setIsUpdating) =>{
    axios.post(`${baseURL}/update`, {_id: taskId, text})
        .then((data) => {
            console.log(data);
            setText("")
            setIsUpdating(false)
            getToDoList(setTask)
        })
        .catch((err) => console.log(err))
}

const deleteTask = (taskId, setTask) =>{
    axios.post(`${baseURL}/delete`, {_id: taskId})
        .then((data) => {
            console.log("Task deleted successfully");
            getToDoList(setTask)
        })
        .catch((err) => console.log(err))
}

export {getToDoList, addTask, updateTask, deleteTask}