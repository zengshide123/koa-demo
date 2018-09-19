// 快速入门,简单使用koa框架
const Koa = require('koa') ;
const app = new Koa();



app.use(async function (ctx,next) {
     ctx.body = '<h3>hello KOA</h3>'   
})

app.listen(3000,()=>{
    console.log('success at 3000 port');
})