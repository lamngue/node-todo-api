const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	db.collection('Users').findOneAndUpdate({_id: new ObjectID('5bc739ca0516e75b066b5e5d')},{
		$inc:{age: 1},$set:{name: 'Andrew'}
	},{returnOriginal:false}).then((res) => {
		console.log(res);
	});
});