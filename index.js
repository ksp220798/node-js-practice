//default node.js with http method 
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req,res)=>{
   // console.log(req);
    if(req.url == '/check'){
        // const filePath = path.join(__dirname, 'index.html');
        // fs.readFile(filePath,(err,data)=>{
        //     if(err){
        //         res.statusCode(400);
        //         res.end("something went wrong");
        //     }else{
        //         res.write(data);
        //         res.write("<h2> hii i am from another thing</h2>")
        //         res.end();
        //     }
        // })
        res.end("hii i am from API");
    }

});

server.listen(300,()=>{ console.log("server runnig")


    const dd = http.get('http://localhost:300/check',(res)=>{
    let ds= "";
  //  console.log("check",res);
     res.on('data',(value)=>{
        ds+=value;
    })
    res.on('end',()=>{
     console.log("i send request",ds);
    })
})
});




