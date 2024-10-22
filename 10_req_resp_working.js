const fs=require('fs').promises

const PORT=3000;

const http=require('http')

const server=http.createServer((req,res)=>{
    res.write(`<h1> this is home page</h1>`)

    fs.readFile('Templates/index.html','utf-8')
    .then(data=>{
        res.write(data)
        res.end()
    }) 
    .catch(err=>{
        res.write(`<h2>Error reading file</h2>`)
        res.end()
    })
    
    
})

server.listen(PORT,('127.0.0.1'),()=>{
    console.log(`Server started on the port number :${PORT}`)
})