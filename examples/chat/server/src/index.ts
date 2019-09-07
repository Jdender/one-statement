((<
    Express extends typeof import('express'),
    Http extends typeof import('http'),
    SocketIO extends typeof import('socket.io'),
>(
    createApp: Express = require('express'),
    { createServer }: Http = require('http'),
    createIo: SocketIO = require('socket.io'),

    PORT = 8080,

    app = createApp(),
    server = createServer(app),
    io = createIo(server),

    broadcast = (msg: string) => (
        console.log(msg),
        io.emit('message', msg)
    ),
) => (
    io.on('connection', socket => (

        broadcast(`> User joined`),

        socket.on('message', (msg: string) =>

            broadcast(msg)
        ),

        socket.on('disconnect', () =>

            broadcast(`> User left`)
        )
    )),

    server.listen(PORT, () => 
        console.log(`Listening on *:${PORT}`)
    )
))());
