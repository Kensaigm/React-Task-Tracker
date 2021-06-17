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
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
