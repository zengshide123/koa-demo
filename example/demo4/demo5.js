// 简单的路由封装
const Koa = require('koa') ;
const fs = require('fs') ;
const path = require('path') ;
const app = new Koa() ;


/**
 * 异步读取本地文件
 * page 本地文件名
 */
function render (page) {
    return new Promise((resolve,reject)=>{
        let viewURL = path.resolve(__dirname,`views/${page}`) ;
        fs.readFile(viewURL,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

/**
 * router 根据请求地址获取相应的html
 * view 请求的地址
 */

 async function router(view) {
     switch (view) {
         case '/':
            return html = await render('index.html')
             break;
         case '/todo':
            return html = await render('todo.html')
             break;
         default:
            return html = await render('404.html')
             break;
     }
 }  


 /**
  * 使用中间件 router
  */

app.use(async (ctx,next)=>{
    let html = await router(ctx.request.url);
        ctx.body = html;
})

/**
 * 监听3000端口
 */

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})