// /views的使用
const Koa = require('koa') ;
const path = require('path') ;
const views = require('koa-views');

const app = new Koa() ;

/**
 * 配置模板引擎
 */
app.use(views(path.join(__dirname,'./views'),{
    extension:'ejs'
}))

app.use(async (ctx) =>{
    let title = 'hello koa' ;
    await ctx.render('index',{
        title,
    })
})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})