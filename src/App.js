import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [showAdd, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'July 9th at 4:20pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting',
      day: 'July 7th at 8:00pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Football Tournament',
      day: 'July 11th at 7:00am',
      reminder: true
    },
    {
      id: 4,
      text: 'Birthday Party',
      day: 'July 17th at 5pm',
      reminder: true
    }
  ])

  //addtask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])

  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder }
          : task))
  }

  return (
    <div className="container">
      <Header onShowAdd={() => setShowAdd(!showAdd)} valueShowAdd={showAdd} />
      {showAdd && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Reminders'}
    </div>
  );
}


export default App;
