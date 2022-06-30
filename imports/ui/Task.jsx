import React from 'react';
export const Task =({ task, onCheckboxClick, onDeleteClick})=>{
	console.log(task)
	return <li>
		<input type={"checkbox"} 
		        checked={!!task.isChecked}            
						onClick={()=>onCheckboxClick(task)} readOnly/>
				<span>{task.text} </span>
				<span> 				<button onClick={()=>onDeleteClick(task)}>deleting Tasks</button>
</span>
		</li>
}