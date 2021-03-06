	import {Meteor} from  "meteor/meteor" 	
import { check } from "meteor/check"
import { TasksCollection } from './TasksCollections' 	


Meteor.methods({
	'tasks.insert'(tasks) {
		check(tasks, String);

		if (!this.userId) {
			throw new Meteor.Error('Not authorized.');
		}

		TasksCollection.insert({
			text,
			createdAt: new Date,
			userId: this.userId,
		})
	},

	'tasks.remove'(taskId) {
		check(taskId, String);

		if (!this.userId) {
			throw new Meteor.Error('Not authorized.');
		}

		TasksCollection.remove(taskId);
	},

	'tasks.setIsChecked'(taskId, isChecked) {
		check(taskId, String);
		check(isChecked, Boolean);

		if (!this.userId) {
			throw new Meteor.Error('Not authorized.');
		}

		TasksCollection.update(taskId, {
			$set: {
				isChecked
			}
		});
	}
});
