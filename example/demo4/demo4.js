// 获取请求的地址

const Koa = require('koa') ;
const app = new Koa() ;

app.use(async (ctx,next)=>{
    let url = ctx.request.url ;
        ctx.body = `<h3>${url}</h3>`
})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})