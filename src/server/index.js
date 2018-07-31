import express from 'express';
import schema from './data/schema';
import GraphQLHTTP from 'express-graphql';

let app = express();

app.use(express.static('dist'));

app.use('/graphql', GraphQLHTTP({
    schema
}));

app.listen(3000, () => console.log('Listening on port 3000!'))
    app.get('/api', (req, res) => { 
        res.send('Hello Express')});
