// session的使用
const Koa = require('koa') ;
const session = require('koa-session-minimal') ;
const MySqlSession = require('koa-mysql-session') ;

const app = new Koa() ;

/**
 * 配置mysql来存储session
 */
let sessionStore = new MySqlSession({
    user:'root',
    password:'password',
    database:'koa_session_demo',
    host:'127.0.0.1',
})
/**
 * cookie配置
 */
let cookie = {
    maxAge:'',
    expires:'',
    path:'',
    domain:'',
    httpOnly:'',
    overwrite:'',
    secure:'',
    sameSite:'',
    signed:'',
}
/**
 * 使用session中间件
 */
app.use(
    session({
        key:'SESSION_ID',
        store:sessionStore,
        cookie
    })
)

app.use(async (ctx)=>{
    if(ctx.url === '/set'){
        ctx.session = {
            user_id:Math.random().toString(36).substr(2),
            count:0
        }
        ctx.body = ctx.session
    }else if(ctx.url === '/'){
        ctx.session.count = ctx.session.count+1;
        ctx.body = ctx.session
    }
})
app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})