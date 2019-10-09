package main

import (
	"context"
	"log"

	"./pkg/db"
	"./pkg/types"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

func main() {
	client := db.GetClient()

	err := client.Ping(context.Background(), readpref.Primary())
	if err != nil {
		log.Fatal("Couldn't connect to the database", err)
	} else {
		log.Println("Connected!")
	}

	router := gin.Default()

	router.GET("/api/ping", func(context *gin.Context) {
		context.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.POST("/api/add-task", func(context *gin.Context) {
		text := context.PostForm("text")
		missedWord := context.PostForm("missed-word")
		options := context.PostFormArray("options")

		task := types.Task{
			Text:       text,
			MissedWord: missedWord,
			Options:    options,
		}
		insertedID := db.AddNewTask(client, task)
		log.Println(insertedID)

		context.JSON(200, gin.H{
			"status":     "Task was added",
			"insertedID": insertedID,
			"taskData":   task,
		})
	})

	router.Run() // listen and serve on 0.0.0.0:8080
}

// heroes := db.ReturnAllTasks(client, bson.M{})
// for _, hero := range heroes {
// 	log.Println(hero.Name, hero.Alias, hero.Signed)
// }

// heroes = db.ReturnAllTasks(client, bson.M{"signed": true})
// for _, hero := range heroes {
// 	log.Println(hero.Name, hero.Alias, hero.Signed)
// }

// 	hero := ReturnOneHero(c, bson.M{"name": "Vision"})
// 	log.Println(hero.Name, hero.Alias, hero.Signed)

// 	hero = Hero{Name: "Stephen Strange", Alias: "Doctor Strange", Signed: true}
// 	insertedID := InsertNewHero(c, hero)
// 	log.Println(insertedID)

// 	hero = ReturnOneHero(c, bson.M{"alias": "Doctor Strange"})
// 	log.Println(hero.Name, hero.Alias, hero.Signed)

// 	heroesRemoved := RemoveOneHero(c, bson.M{"alias": "Doctor Strange"})
// 	log.Println("Heroes removed count:", heroesRemoved)

// 	hero = ReturnOneHero(c, bson.M{"alias": "Doctor Strange"})
// 	log.Println("Is Hero empty?", hero == Hero{})

// 	heroesUpdated := UpdateHero(c, bson.M{"signed": true}, bson.M{"alias": "Hawkeye"})
// 	log.Println("Heroes updated count:", heroesUpdated)

// 	hero = ReturnOneHero(c, bson.M{"alias": "Hawkeye"})
// 	log.Println(hero.Name, hero.Alias, hero.Signed)

// }

// // ReturnOneHero just one document from the collection Heroes
// func ReturnOneHero(client *mongo.Client, filter bson.M) Hero {
// 	var hero Hero
// 	collection := client.Database("civilact").Collection("heroes")
// 	documentReturned := collection.FindOne(context.TODO(), filter)
// 	documentReturned.Decode(&hero)
// 	return hero
// }

// // InsertNewHero insert a new Hero in the Heroes Collection
// func InsertNewHero(client *mongo.Client, hero Hero) interface{} {
// 	collection := client.Database("civilact").Collection("heroes")
// 	insertResult, err := collection.InsertOne(context.TODO(), hero)
// 	if err != nil {
// 		log.Fatalln("Error on inserting new Hero", err)
// 	}
// 	return insertResult.InsertedID
// }

// // RemoveOneHero remove one existing Hero
// func RemoveOneHero(client *mongo.Client, filter bson.M) int64 {
// 	collection := client.Database("civilact").Collection("heroes")
// 	deleteResult, err := collection.DeleteOne(context.TODO(), filter)
// 	if err != nil {
// 		log.Fatal("Error on deleting one Hero", err)
// 	}
// 	return deleteResult.DeletedCount
// }

// // UpdateHero update the info of a informed Hero
// func UpdateHero(client *mongo.Client, updatedData interface{}, filter bson.M) int64 {
// 	collection := client.Database("civilact").Collection("heroes")
// 	atualizacao := bson.D{{Key: "$set", Value: updatedData}}
// 	updatedResult, err := collection.UpdateOne(context.TODO(), filter, atualizacao)
// 	if err != nil {
// 		log.Fatal("Error on updating one Hero", err)
// 	}
// 	return updatedResult.ModifiedCount
// }
