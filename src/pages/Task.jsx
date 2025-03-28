import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInputValue, setTaskInputValue] = useState("");
  const [taskDescInputValue, setTaskDescInputValue] = useState("");

  // Function to remove a task by index
  const removeTask = (indexToRemove) => {
    setTasks((prevTasks) => prevTasks.filter((_, index) => index !== indexToRemove));
  };
  

  return (
    
    <div className=' w-full h-screen flex flex-col items-center gap-2 bg-gray-200  dark:bg-black '>
      <nav className='h-10 w-full bg-blue-400 flex items-center justify-between  text-2xl font-bold px-2'>
      <h1 >Task Manager</h1>
      
      </nav>
    
      <div className='task-box w-[70%] p-5 rounded-lg flex flex-col items-center gap-6 border border-gray-300 shadow-lg bg-white dark:bg-black '>
        {/* Input Fields */}
        <div className='w-full flex justify-evenly flex-col md:flex-row'>
          <div className="labels flex flex-col gap-7 font-bold">
            <label className='p-2 dark:text-white' htmlFor="taskInput">Task</label>
            <label className='p-2 dark:text-white' htmlFor="taskDescription">Task Description</label>
          </div>

          <div className='w-[70%]'>
            <div className="inputs flex flex-col gap-5">
              <input className=' dark:text-white border-2 border-gray-800 focus:border-red-500 focus:shadow-lg focus:shadow-red-300 outline-none transition duration-300 p-2 rounded-md text-lg placeholder-gray-600 dark:placeholder-gray-300' 
                type="text" 
                id="taskInput" 
                placeholder='Enter task' 
                value={taskInputValue} 
                onChange={(e) => setTaskInputValue(e.target.value)} 
                
              />

              <input className=' dark:text-white border-2 border-gray-800  focus:border-red-500 focus:shadow-lg focus:shadow-red-300 outline-none transition duration-300 p-2 rounded-md text-lg placeholder-gray-600 dark:placeholder-gray-300' 
                type="text" 
                id="taskDescription" 
                placeholder='Enter task description' 
                value={taskDescInputValue} 
                onChange={(e) => setTaskDescInputValue(e.target.value)} 
                
              />
            </div>
          </div>
        </div>

        {/* Add Task Button */}
        <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300'
          onClick={() => {
            if (taskInputValue.trim() !== "") {
              setTasks([...tasks, { task: taskInputValue, description: taskDescInputValue }]);
              setTaskInputValue("");
              setTaskDescInputValue("");
            }
          }}
        >
          Add New Task
        </button>
      </div>

      {/* Task List */}
      <div className='w-[70%] flex flex-col gap-3' dark:bg-black>
        {tasks.length === 0 ? (<p className='text-gray-500 text-center'>No tasks available</p>) : (tasks.map((element, index) => (
                <div key={index}>
                    <div className='border-2 flex flex-col p-3 rounded-lg shadow-sm bg-white dark:bg-red-200'>
                        <span className='font-bold text-lg'>Task {index + 1}</span>
                        <span><span className='font-bold'>Task:</span> {element.task}</span>
                        <span><span className='font-bold'>Description:</span> {element.description}</span>

                        {/* Remove Task Button  */}
                        <button 
                        className='mt-2 bg-red-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition duration-300'
                        onClick={() => removeTask(index)}
                        >
                        Remove Task
                        </button>
                    </div>
                </div>
            ))
        )}
      </div>
    </div>
  );
};

export default App;
