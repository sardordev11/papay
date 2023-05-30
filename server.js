const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongoose = require("mongoose");

let db;
const connectionString = process.env.MONGO_URL;
mongoose.connect(
    connectionString, 
    {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}, 
(err, goose) => {
    if(err) console.log("ERROR on connection MongoDB");
    else {
        
        console.log("MongoDB connection succeed");
        //console.log(goose);
        const app = require("./app");
        const server = http.createServer(app);
        let PORT = process.env.PORT || 3003;
        server.listen(PORT, function () {
        console.log(
        `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );

      }); 
    }
  }
);

