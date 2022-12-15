// ./express-server/app.js
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import SourceMapSupport from 'source-map-support';
// import routes
import todoRoutes from './routes/todo.server.route';
import tweetRoutes from './routes/tweet.route';
// define our app using express
const app = express();
// allow-cors
app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
// configure app
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));
// set the port
const port = process.env.PORT || 5000;
// connect to database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://twitter-clone:TwitterCloneAdmin!23@twitterclonecluster.ebs6r7m.mongodb.net/Social?retryWrites=true&w=majority');
// add Source Map Support
SourceMapSupport.install();
app.use('/api', todoRoutes);
app.use('/api', tweetRoutes);
app.get('/', (req,res) => {
  return res.end('Api working');
})
// catch 404
app.use((req, res, next) => {
  res.status(404).send('<h2 align=center>Page Not Found!</h2>');
});
// start the server
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});