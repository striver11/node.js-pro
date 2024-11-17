const fs=require('fs')


const http=require('http')
const html=fs.readFileSync('Templates/index.html','utf-8')

//step 1 create server

const server=http.createServer((request,response)=>{
    response.end(html);
    console.log('A new Request received')
})

//step 2: start the server
server.listen(8000,'127.0.0.1',()=>{
    console.log('Server has started')
})


//routing a can be done in 2 ways 
//1.file based url   -->www.nodeapp.com/about.html
//2.Resource based url  -->here we map a url pattern to request handler  -->www.nodeappp.com/About

/* 
Routing
Routing basically means implementing different actions for different URLs
These actions can be implemented in different ways , for example ,by creating a function

 */