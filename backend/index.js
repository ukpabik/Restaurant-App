import app from './server.js'
import mongodb from 'mongodb'
import dotenv from 'dotenv'
dotenv.config(); //Configure dotenv


const MongoClient = mongodb.MongoClient; //Getting access to mongo client

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.URI, {
  poolSize: 50, //Limited to 50 people at a time
  wtimeoutMS: 2500, //Timeout for responses being sent
  useNewUrlParse: true
})
.catch(error => {
  console.error(error.stack)
  process.exit(1);
})
.then(async client => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  }) //starting the webserver after connecting the database
})
