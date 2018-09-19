// 获取get请求的数据
const Koa = require('koa') ;
const app = new Koa() ;

app.use(async (ctx)=>{
    const c_query = ctx.query ;
    const c_queryString = ctx.querystring ;
    const c_req_query = ctx.request.query ;
    const c_req_queryString = ctx.request.querystring ;
    const URL = ctx.url ;
         ctx.body = {
             URL,
             c_query,
             c_queryString,
             c_req_query,
             c_req_queryString
         }

})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})