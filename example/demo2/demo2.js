// async/await 将异步代码采用同步的方式开发

// 用来记录代码执行的耗时

const getAsync = () =>{
    return new Promise((resolve,reject)=>{
        try {
            const startTime  = Date.now() ;
                  setTimeout(() => {
                    const endTime = Date.now() ;
                    const durationTime = endTime - startTime ;
                    resolve(durationTime)
                  }, 2000);
        } catch (error) {
                  reject(error)
        }
    })
}

const getAsyncTime = async () =>{
     const data = await getAsync() ;
           return data ;
}

const getAsyncData = async () =>{
     const  data = await getAsyncTime() ;
     console.log(data);
}

getAsyncData()