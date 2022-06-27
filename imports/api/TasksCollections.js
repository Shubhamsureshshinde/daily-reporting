import mongo from "meteor/mongo"

export const TasksCollection = new Mongo.Collection("tasks")
export const PLayersCollection = new Mongo.Collection("info")