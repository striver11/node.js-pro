const { error } = require('console');
const fs=require('fs')

const http=require('http')
const url=require('url');

const html=fs.readFileSync('Templates/index.html','utf-8')
let products=JSON.parse(fs.readFileSync('Data/products.json','utf-8'))
let productListHtml=fs.readFileSync('./Templates/product-list.html','utf-8')

let productHtmlArray=products.map((prod)=>{
    let output=productListHtml.replace('{{%IMAGE%}}',prod.productImage)
    output=output.replace('{{%NAME%}}',prod.name);
    output=output.replace('{{%MODELNAME%}}',prod.nodeName);
    output=output.replace('{{%MODELNO%}}',prod.modelNumber);
    output=output.replace('{{%SIZE%}}',prod.size);
    output=output.replace('{{%CAMERA%}}',prod.camera);
    output=output.replace('{{%PRICE%}}',prod.price);
    output=output.replace('{{%COLOR%}}',prod.color);
    output=output.replace('{{%ID%}}',prod.id);
    
    return output;
})

//step1: create a server
const server=http.createServer((req,res)=>{
    let {query,pathname:path}=url.parse(req.url,true)   //object destructuring syntax
   // console.log(x)
    //let path=req.url;   

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

        if(!query.id){
        let productResponseHtml=html.replace('{{%CONTENT%}}',productHtmlArray.join(','))
       // res.writeHead(200,{'Content-Type':'application/json',});// change this to text/html
       res.writeHead(200,{'Content-Type':'text/html',});
/* 
        fs.readFile('Data/products.json','utf8',(error,data)=>{
           let products= JSON.parse(data)                               // this will read the json file for every request means 1000 request 1000 times reading it is not effecient so we are going to do it above see before server created
           res.end(data)
        })
         */

        res.end(productResponseHtml)
        // console.log(productHtmlArray.join(','))
        }else{
            res.end('This is a product with ID='+query.id);
        }
       
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