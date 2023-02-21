const mongoose = require('mongoose');

/*mongoose.connect('mongodb://127.0.0.1:27017/angular-auth',{

});
*/
var mongoURI = "mongodb://localhost/vueling";
var MongoDB = mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
MongoDB.then(db => console.log('database is connected')).catch(err => console.log(err));

/*MongoDB.on('error', function(err) { console.log(err); });
MongoDB.once('open', function() {
  console.log("mongodb connection open");
});*/