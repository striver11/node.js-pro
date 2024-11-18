const { error } = require('console');
const fs=require('fs')

const http=require('http')

const html=fs.readFileSync('Templates/index.html','utf-8')
let products=JSON.parse(fs.readFileSync('Data/products.json','utf-8'))

//step1: create a server
const server=http.createServer((req,res)=>{
    let path=req.url;
    if(path=='/' || path.toLocaleLowerCase() ==='/home'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello , World'
        });
       res.end(html.replace('{{%CONTENT%}}','You are in HOME page'))
    }
    else if(path.toLocaleLowerCase()==='/about'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}','You are in About page'))
    }
    else if(path.toLocaleLowerCase()=='/contact'){
        res.writeHead(200,{
            'Content-Type':'text/html',
            'my-header':'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}','You are in Contact page'))
    }
    else if(path.toLocaleLowerCase()=='/products'){
        res.writeHead(200,{
            'Content-Type':'application/json',
        });
/* 
        fs.readFile('Data/products.json','utf8',(error,data)=>{
           let products= JSON.parse(data)                               // this will read the json file for every request means 1000 request 1000 times reading it is not effecient so we are going to do it above see before server created
           res.end(data)
        })
         */

        res.end('your are in the products page')
        console.log(products)
    }else{
        res.writeHead(400,{
            'Content-Type':'text/html',
            'my-header':'Hello , World'
        });
        res.end(html.replace('{{%CONTENT%}}','Error 404: Page not found')) //this is called the fallback route
    }
})


//step2:start the server
server.listen(8000,'127.0.0.1',()=>{
    console.log('server started on port 8000')
})