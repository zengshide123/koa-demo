// 获取post请求的数据
// 需要借助koa-bodyparser中间件
const Koa = require('koa') ;
const bodyParser = require('koa-bodyparser') ;
const app = new Koa() ;

app.use(bodyParser());

app.use(async (ctx)=>{
        if(ctx.url === '/' && ctx.method === 'GET'){
                let html = `
            <h2>Koa post demo</h2>
            <form method="post" action="/">
                <p>userName</p>
                <input name="userName"/>
                <br/>
                <p>nickName</p>
                <input name="nickName"/>  
                <p>email</p>
                <input name="email"/>
                <br/>
                <input type="submit" value="提交"/>           
            </form>
    `;
         ctx.body = html ;
        }else if(ctx.url==="/"&& ctx.method === 'POST'){
            let postData = ctx.request.body ;
                ctx.body = postData ;
        }else{
            ctx.body = "<h3>not found</h3>"
        }
})
app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})

