const http = require ('http');
const server = http.createServer((req, res)=>
{
    console.log ('usuario conectado')
    res.end('conexion correcta')
})
server.listen(3000,()=>
{
    console.log('servidor esperando')
})