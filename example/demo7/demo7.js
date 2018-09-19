// cookie的设置和获取
const Koa = require('koa');
const app = new Koa() ;

app.use(async (ctx)=>{
    if(ctx.url==="/index"){
        ctx.cookies.set(
            'cid',
            'i am a cookie',
            {
                domain:'localhost',
                path:'/index',
                maxAge:10*60*1000,
                expires:new Date('2018-09-19'),
                httpOnly:false,
                overwrite:false
            }
        )
        ctx.body = '<h3>hello cookies</h3>'
    }else if(ctx.url === '/index/cookie'){
        ctx.body = `<h3>${ctx.cookies.get('cid')}</h3>`
    }
    else{
        ctx.body = '<h3>hello world!</h3>'
    }
})

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})