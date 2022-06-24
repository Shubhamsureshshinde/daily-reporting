import React from 'react';
import { Hello } from './Hello.jsx';
import { Task } from './Task.jsx';

const tasks =[
	{id:1, text:"first task"},
	{id:2, text:"second task"},
	{id:3, text:"third task"}
]


export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
		  <ul>
      { tasks.map(task => <Task key={ task.id } tasks={ task }/>) }
    </ul>
  </div>
);
