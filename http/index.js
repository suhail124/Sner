const http = require('http');
const fs = require("fs");

const server = http.createServer((req,res) => {
    //console.log(req.url);
    if(req.url == "/"){
        res.end("Hello from the other side ~ Adele");
    }
    else if(req.url == "/about"){
        res.end("Just testing");
    }
    else if(req.url == "/userApi"){
        fs.readFile(`./userApi/userapi.json`,"utf-8",(err,data)=>{
        console.log(data);
        res.end(data);
        });
    }
   else{
       res.writeHead(404, {"Content-type" : "text/html"});
       res.end("<h1>404 Error  page</h1>");
   }
}); 

server.listen(5000,'0.0.0.0', () =>{
    console.log("listening to port no 5000");
});