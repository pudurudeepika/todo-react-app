// import React from "react";
// import { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// // import "./App.css";

// const TodoApp = () => {
//     const [tasks, setTasks] = useState([]);
//     const [newTask, setNewTask] = useState("");

//     const addTask = () => {
//         if(newTask.trim() !== "") {
//             setTasks([...tasks, { text: newTask, completed: false}]);
//             setNewTask("");
//         }
//     };

//     const toggleTask = (index) => {
//         const UpdatedTasks = tasks.map((task, i) =>
//             i === index?{...tasks, completed :!task.completed}:task
//         );
//         setTasks(UpdatedTasks);
//     };

//     const deleteTask = (index) => {
//         const UpdatedTasks = tasks.filter((task, i)=>i !== index);
//         setTasks(UpdatedTasks);
//     };

//     return (
//         <div className="todo-container d-flex flex-column align-items-center justify-content-center min-vh-100" style={{
//             backgroundImage: "url('/images/background.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             height: "100vh"
//             }}>
//                 <div className="card p-4 shadow-lg" style={{width:"400px", background: "rgba(255, 255, 255, 0.8)", borderRadius: "10px"}}>
//                     <h3 className="text-center text-primary">To-Do List</h3>
//                     <div className="input-group mb-3">
//                         <input 
//                         type="text"
//                         className="form-control"
//                         placeholder="Add a new task..."
//                         value={newTask}
//                         onChange={(e) => setNewTask(e.target.value)}
//                         ></input>
//                         <button className="btn btn-success" onClick={addTask}>Add</button>
//                     </div>

//                     <ul className="list-group">
//                         {tasks.map((task, index) => (
//                             <li key={index} className={`list-group-item d-flex justify-content-between a-items-center ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
//                             <span onClick={()=> toggleTask(index)} style={{cursor: "pointer"}}>{task.completed ? 'text-decoration-line-through text-muted' : ''}`</span>
//                             <button className="btn btn-danger btn-sm" onClick={() => deleteTask(index)}>X</button>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>

//         </div>
//     );
// };

// export default TodoApp;
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...tasks, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };
  

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div
      className="todo-container d-flex flex-column align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(90deg, rgba(123, 145, 136, 0.7), rgba(63, 58, 58, 0.9))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <h1 className="text-white text-shadow mb-5 mt-0">📝 My To-Do List</h1>
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "400px",
          background: "linear-gradient(90deg, rgba(223, 230, 227, 0.7), rgba(255, 255, 255, 0.9))",
          borderRadius: "10px",
        }}
      >
        <h3 className="text-center text-dark mb-5">To-Do List</h3>
        <div className="input-group mb-5">
        <input
            type="text"
            className="form-control"
            placeholder="📌Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button className="btn btn-success" onClick={addTask}>
            Add
          </button>
        </div>
        <ul className="list-group">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`list-group-item d-flex justify-content-between align-items-center ${
                task.completed ? "text-decoration-line-through text-muted" : ""
              }`}
              style={{
                borderRadius: "8px",
                marginBottom: "5px",
                transition: "0.3s",
              }}
            ><span
                onClick={() => toggleTask(index)}
                style={{ cursor: "pointer", flexGrow: 1 }}
              >
                {task.text}
              </span>
              <button
                className="btn text-white fw-bold"
                style={{ borderRadius: "50%" }}
                onClick={() => deleteTask(index)}
              >
                ❎
              </button>
              <button 
              className="btn text-white fw-bold"
              style={{ borderRadius: "50%"}}
              onClick={() => toggleTask(index)}>
                ✅
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
