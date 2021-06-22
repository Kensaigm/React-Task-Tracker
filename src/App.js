import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import Add from './components/AddTask'
import Footer from './components/Footer'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = async () => {
    const rs = await fetch('http://localhost:5000/tasks')
    const data = await rs.json()

    return data
  }

  const fetchTask = async (id) => {
    const rs = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await rs.json()
    return data
  }

  const addTask = async (task) => {
    const rs = await fetch(
      'http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    }
    )

    const data = await rs.json()

    setTasks([...tasks, data])
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: 'DELETE',
      })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {
      ...taskToToggle,
      reminder: !taskToToggle.reminder
    }

    const rs =
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(updTask),
      })

    const data = await rs.json()

    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: data.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <Add onAdd={addTask} />}
      {tasks.length > 0 ? (<Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} />) : (<h3>No Tasks are scheduled at this time.</h3>)}
      <Footer />
    </div>
  );
}

export default App;
