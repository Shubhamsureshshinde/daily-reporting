import React , {useState} from 'react';
import { Task } from './Task.jsx';
import {useTracker} from "meteor/react-meteor-data"
import { PLayersCollection, TasksCollection } from '../api/TasksCollections.js';
import Playor from "./Playor.jsx"
import Taskform from './Taskform.jsx';
import { MongoNetworkError } from 'mongodb';
import meteor from "meteor/meteor"

// const tasks =[
// 	{id:1, text:"first task"},
// 	{id:2, text:"second task"},
// 	{id:3, text:"third task"}
// ]
// const toggleChecked = ({ _id, isChecked }) => {
//   Meteor.call(_id, {
//     $set: {
//       isChecked: !isChecked
//     }
//   })
// };
const toggleChecked = ({ _id, isChecked }) =>

  Meteor.call('tasks.setIsChecked', _id, !isChecked);

const deleteTask = ({ _id }) => Meteor.call('tasks.remove', _id);

// const deleteTask = ({ _id }) => TasksCollection.remove(_id);
export const App = () => {
	const [hideComplete,setHidecomplete]= useState(false)
	const hideCompleteFilter = {isChecked:{$ne:true}}
	const tasks = useTracker(()=>TasksCollection.find(hideComplete? hideCompleteFilter:{},{sort:{createdAt:-1} }).fetch());
	const pendingTasksCount= useTracker (()=>TasksCollection.find(hideCompleteFilter).count())
  const pendingTasksTitle = `${
    pendingTasksCount ? ` (${pendingTasksCount})` : ''
  }`;




	return (
	<div>
      <h1> Welcome to Meteor!</h1>
    <ul>
     { tasks.map(task => <Task key={ task._id } onCheckboxClick={toggleChecked} onDeleteClick=	 
		 {deleteTask}task={ task }/>) }
    </ul>
   	<Taskform />
	<div className='filter'>
		<button onClick={()=>setHidecomplete(!hideComplete)}>
{hideComplete ? "show all": "hide Complete"}
		</button>
		<h1> To Do List {pendingTasksTitle}</h1>
	</div>
  </div>
	)
}
  
;
