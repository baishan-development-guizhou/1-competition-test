import Koa from 'koa'

class Server {

  constructor (port) {
    const app = new Koa()
    app.use( async ( ctx ) => {
      ctx.body = 'hello koa2'
    })
    app.listen(port)
  }

}

new Server(3000)
console.log('[demo] start-quick is starting at port 3000')
