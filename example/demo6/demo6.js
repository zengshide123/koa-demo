// 处理静态资源
const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa() ;

app.use(static(path.resolve(__dirname,'./static')));

app.use(async (ctx)=>{
    ctx.body = `<h3>hello world!</h3>`
})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})