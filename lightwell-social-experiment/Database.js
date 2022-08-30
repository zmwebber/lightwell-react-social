// const http = require('http')
// const port = 5000

// const server = http.createServer(function(req, res) {
//     res.write("You've hit the node server");
//     res.end();
// })

// server.get('/', (req, res) => {
//     res.json({message: "GET " + res});
// })

// server.listen(port, function(error) {
//     if (error){
//         console.log("Error: Server not started. ", error)
//     } else {
//         console.log("Server is listening at localhost:" + port)
//     }
// })

import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))