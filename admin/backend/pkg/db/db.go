package db

import (
	"context"
	"log"

	"../types"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

// GetClient returns a MongoDB Client
func GetClient() *mongo.Client {
	clientOptions := options.Client().ApplyURI("mongodb://db:27017")
	client, err := mongo.NewClient(clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Connect(context.Background())
	if err != nil {
		log.Fatal(err)
	}
	return client
}

// ReturnAllTasks return all documents from the collection Tasks
func ReturnAllTasks(client *mongo.Client, filter bson.M) []*types.Task {
	var tasks []*types.Task
	collection := client.Database("quiz").Collection("tasks")
	cur, err := collection.Find(context.TODO(), filter)
	if err != nil {
		log.Fatal("Error on Finding all the documents", err)
	}
	for cur.Next(context.TODO()) {
		var task types.Task
		err = cur.Decode(&task)
		if err != nil {
			log.Fatal("Error on Decoding the document", err)
		}
		tasks = append(tasks, &task)
	}
	return tasks
}

// AddNewTask insert a new Task in the Tasks Collection
func AddNewTask(client *mongo.Client, task types.Task) interface{} {
	collection := client.Database("quiz").Collection("tasks")
	insertResult, err := collection.InsertOne(context.TODO(), task)
	if err != nil {
		log.Fatalln("Error on inserting new Task", err)
	}
	return insertResult.InsertedID
}
