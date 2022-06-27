import React from 'react';
import { Task } from './Task.jsx';
import {useTracker} from "meteor/react-meteor-data"
import { PLayersCollection, TasksCollection } from '../api/TasksCollections.js';
import Playor from "./Playor.jsx"

// const tasks =[
// 	{id:1, text:"first task"},
// 	{id:2, text:"second task"},
// 	{id:3, text:"third task"}
// ]


export const App = () => {
	const tasks = useTracker(()=>TasksCollection.find({}).fetch());
	const info =useTracker (()=>PLayersCollection.find({}).fetch())
	return (
	<div>
    <h1> Welcome to Meteor!</h1>
    <ul>
     { tasks.map(task => <Task key={ task._id } task={ task }/>) }
    </ul>
	<ul>	{ info.map(Info => <Playor key={ Info._id } Info={ Info }/>) }</ul>
  </div>
	)
}
  
;
