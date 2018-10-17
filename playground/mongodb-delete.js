const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	//deleteMany
	// db.collection('Todos').deleteMany({text: 'eat lunch'}).then((res) => {
	// 	console.log(res);
	// });
	//deleteOne
	// db.collection('Todos').deleteOne({text: 'eat lunch'}).then((res) => {
	// 	console.log(res);
	// });
	//findOneAndDelete(find 1st record that matches the criteria)
	// db.collection('Todos').findOneAndDelete({completed: false}).then((res)=>{
	// 	console.log(res);
	// });
	// db.collection('Users').deleteMany({name: 'Lam'}).then((res) => {
	// 	console.log(res);
	// });
	// db.collection('Users').deleteOne({name: 'Mike'}).then((res) => {
	//  	console.log(res);
	// });
	db.collection('Users').findOneAndDelete({_id: new ObjectID('5bc5402624abdb25af63e2cf')}).then((res) => {
	  	console.log(res);
	});
});