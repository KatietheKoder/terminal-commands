const terminalCommands = require('./terminal-commands');
const http = require('http');
const port = 3000;

const requestHandler = (request, response) => {
    response.end(`Handling a request on port ${port}`);
};

const server = http.createServer(requestHandler);

server.listen(port, error => {
    if (error)
        throw error;

    console.log(`Server successfully started!`);
});

terminalCommands.ls();
terminalCommands.touch('zebra-file.txt');
terminalCommands.mkdir("snake-folder");