	import meteor from "meteor/meteor0"
	import { TasksCollection } from './TasksCollections'

	Meteor.publish({"tasks" function PublishTaksk (){
		return TasksCollection.find(userId= this.userId)
	}})