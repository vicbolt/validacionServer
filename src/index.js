require('./database')

const server = require('./server');

server.listen(server.get('PORT'), () => {
    console.log('Server is running on port: ', server.get('PORT'))
})