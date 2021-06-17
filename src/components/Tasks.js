import { useState } from 'react'

const Tasks = () => {
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

    return (
        <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks
