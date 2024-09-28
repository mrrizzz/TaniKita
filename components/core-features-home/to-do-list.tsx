import React, { useState, useEffect } from 'react';
type ToDoItem = {
  id: number;
  task: string;
  completed: boolean;
};

const ToDoList = () => {
  const initialToDos: ToDoItem[] = [
    { id: 1, task: 'Watering chili plants', completed: false, },
    { id: 2, task: 'Fertilizing chili plants', completed: false },
    { id: 3, task: 'Watering mustard plants', completed: false },
    { id: 4, task: 'Fertilizing mustard plants', completed: false },
    { id: 5, task: 'Watering mustard plants', completed: true },
    { id: 6, task: 'Fertilizing mustard plants', completed: true },
  ];

  const [toDos, setToDos] = useState<ToDoItem[]>([]);
  const [done, setDone] = useState<ToDoItem[]>([]);

  useEffect(() => {
    const activeToDos = initialToDos.filter((todo) => !todo.completed);
    const completedToDos = initialToDos.filter((todo) => todo.completed);

    setToDos(activeToDos);
    setDone(completedToDos);
  }, []);

  const handleCheck = (id: number) => {
    const taskToMove = toDos.find((todo) => todo.id === id);

    if (taskToMove) {
      setDone((prevDone) => [...prevDone, { ...taskToMove, completed: true }]);

      setToDos((prevToDos) => prevToDos.filter((todo) => todo.id !== id));
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-primary mb-8">Today's To-do List</h2>

      <div className="px-7">
        {toDos.map((todo) => (
          <div key={todo.id} className="mt-2">
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-600 hover:cursor-pointer"
                checked={todo.completed}
                onChange={() => handleCheck(todo.id)}
              />
              <span className="ml-2 text-gray-700">{todo.task}</span>
            </label>
          </div>
        ))}
      </div>

      {done.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold ">Done</h3>
          <div className='px-7'>
            <ul className="mt-2 space-y-1">
              {done.map((task) => (
                <li key={task.id} className="flex items-center">
                  <svg className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-2 line-through text-gray-500">{task.task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToDoList;
