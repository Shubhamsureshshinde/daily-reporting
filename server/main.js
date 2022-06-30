import { Meteor } from 'meteor/meteor';
// import { LinksCollection } from '/imports/api/links';
import { Players, PLayersCollection, TasksCollection } from '../imports/api/TasksCollections';
import" api/tasksMethds.js"
import "imports/api/TasksPublication.js"


const insertTask = AA => TasksCollection.insert({ AB: AA })
Meteor.startup(() => {
	if (TasksCollection.find().count() === 0) {
		[
			"first Task",
			"second Task",
			"third Task",
			"fourth Task",
			"fifth Task",
			"sixth Task",
			"seventh Task"
		].forEach(insertTask)


}})



// function insertLink({ title, url }) {
//   LinksCollection.insert({title, url, createdAt: new Date()});
// }

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (LinksCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app'
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com'
//     });

//     insertLink({	
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com'
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com'
//     });
//   }
// });
