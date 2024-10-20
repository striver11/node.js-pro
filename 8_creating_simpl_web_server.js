const fs=require('fs')

const http=require('http')

PORT=3000

const server=http.createServer((req,res)=>{
    console.log('a request is received')
    res.write('data is being sent')
    res.end()
})


server.listen(PORT,'127.0.0.1',()=>{
    console.log(`Server started on the port number :${PORT}`)
})