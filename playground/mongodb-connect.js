const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	// db.collection('Todos').insertOne({
	// 	text: 'Something to do',
	// 	completed: false
	// }, (err,result) => {
	// 	if(err){
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops,undefined,2));
	// });
	// db.close();
	// db.collection('Users').insertOne({
	// 	name: 'Lam',
	// 	age: 20,
	// 	location: 'MN'
	// },(err,res) => {
	// 	if(err){
	// 		return console.log('Unable to insert Users',err);
	// 	}
	// 	console.log(JSON.stringify(res.ops[0]._id.getTimestamp(),undefined,2));
	// });
	db.collection('Todos').find().toArray().then((docs) => {
		console.log('Todos');
		console.log(JSON.stringify(docs,undefined,2));
	},(err) => console.log('Unable to fetch todos',err)); //returns a mongodb cursor
	//db.close();
});