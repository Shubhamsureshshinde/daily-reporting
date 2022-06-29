import React,{useState} from 'react';
import { TasksCollection } from '../api/TasksCollections';




const Taskform = () => {
	const [task,setTask]=useState("")
	 
	
	const habdleSubmit = e => {
    e.preventDefault();
		
    if (!task) return;

    TasksCollection.insert({
      task: task.trim(),
      createdAt: new Date ()
    });
  Meteor.call('tasks.insert', text);
    setTask("");

  };

	return (
		<div>
			<form onSubmit={habdleSubmit}>
				<input type="text" 
				onChange={(e)=>setTask(e.target.value)}
				 value={task}>

				 </input>
					<button type='submit'>Add Task</button>

			</form>
		</div>
	);
}

export default Taskform;
