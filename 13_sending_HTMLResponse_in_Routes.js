const fs=require('fs')

const http=require('http')

const html=fs.readFileSync('Templates/index.html','utf-8')

//step1: create a server
const server=http.createServer((req,res)=>{
    let path=req.url;
    if(path=='/' || path.toLocaleLowerCase() ==='/home'){
       res.end(html.replace('{{%CONTENT%}}','You are in HOME page'))
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.end(html.replace('{{%CONTENT%}}','You are in About page'))
    }
    else if(path.toLocaleLowerCase()=='/contact'){
        res.end(html.replace('{{%CONTENT%}}','You are in Contact page'))
    }else{
        res.end(html.replace('{{%CONTENT%}}','Error 404: Page not found')) //this is called the fallback route
    }
})


//step2:start the server
server.listen(8000,'127.0.0.1',()=>{
    console.log('server started on port 8000')
})