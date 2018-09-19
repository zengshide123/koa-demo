// 简单中间件的分装
const Koa = require('koa') ;
const app = new Koa() ;

function asyncFunc(startTime) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const endTime = Date.now()
            const time = endTime - startTime ;
            resolve(time) ;
        }, 500);
    })
}

app.use(async (ctx,next)=>{
    const startTime = Date.now() ;
      await next() ;
    const data = await asyncFunc(startTime) ;
          ctx.body = `<h3>${data}</h3>`
})
app.use(async (ctx,next) =>{
    await asycFunc1()
})

function asycFunc1() {
    return new Promise((resolve)=>{
        setTimeout(resolve, 2000);
    })
}

app.listen(3000,()=>{
    console.log(`success at 3000 port`);
})
