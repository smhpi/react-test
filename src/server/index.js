import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();
let db = require('./db')

app.use(express.static('dist'));

app.use('/graphql', GraphQLHTTP({
    schema
}));

db.connect('mongodb://localhost:27017/mydb', function(err, database) {
  if (err) {
    console.log('Unable to connect to Mongo.')
    process.exit(1)
  } 

    app.listen(3000, () => console.log('Listening on port 3000!'))
    app.get('/api', (req, res) => { 
      let collection = req.database.collection('links');
      collection.find().toArray((err, links) => {
        if (err) {
          console.log('Unable to connect to Mongo.')
          process.exit(1)
        } 
        res.json(links);
      })
      res.send('Hello Express')});
});
