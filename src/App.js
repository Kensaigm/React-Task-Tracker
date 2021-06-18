import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        text: 'Check in Updates',
        day: 'June 25th at 5:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Code Review',
        day: 'June 28th at 8:00am',
        reminder: true,
      },
      {
        id: 3,
        text: 'Update Jira',
        day: 'Everyday at 4:30pm',
        remidner: false,
      }
    ]
  )

  const deleteTask = (id) => {
    console.log('delete request', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id
      ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder} /> : (<h3>No Tasks are scheduled at this time.</h3>)}
    </div>
  );
}

export default App;
