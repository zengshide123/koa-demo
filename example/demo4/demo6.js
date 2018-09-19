// 使用koa-router插件

const Koa = require('koa') ;
const fs = require('fs') ;
const Router = require('koa-router') ;
const path = require('path') ;

const app = new Koa() ;

const home = new Router();

home.get('/',async (ctx)=>{
    let html = `
        <ul>
            <li><a href="/page/helloworld">hello world</a></li>
            <li><a href="/page/404">404页面</a></li>
        </ul>
    `
     ctx.body = html ;
})

const page = new Router({
    prefix:'/page'
}) ;
page.get('/helloworld',async (ctx)=>{
    ctx.body = `<h3>hello world!</h3>`
})
    .get('/404',async (ctx)=>{
        ctx.body = `<h3>404页面</h3>`
    })

app.use(home.routes(),home.allowedMethods())
app.use(page.routes(),page.allowedMethods())

app.listen(3000,()=>{
    console.log(`successs at 3000 port`);
})