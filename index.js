const   http = require('http'),
        fs = require('fs'),
        port = 3000;

const requestHandler = (req, res) => {
    fs.writeFile('helloworld.txt', 'Hello to this great world \n', 'utf8', (err) => {
        if(err) {
            return console.log(`Error: ${err}`);
        }

        fs.readFile('helloworld.txt', (err, data) => {
            if(err) {
                return console.log(`Error: ${err}`);
            }

            res.end(data);
        });
    });
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err) {
        return console.log(`Error: ${err}`);
    }

    console.log(`Server listening on port ${port}`);
});
