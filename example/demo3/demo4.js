const Koa = require('koa') ;
const loggerAsync = require('./middleware');
const app = new Koa();

app.use(loggerAsync()) ;

app.use(async (ctx)=>{
    ctx.body = '<h3>hello world!</h3>'
})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})