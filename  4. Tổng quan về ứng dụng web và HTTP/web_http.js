const http = require("http")
const server = http.createServer((req,res)=>{
    res.write("<table border=\"1\"><tr><td>heloo word</td></tr></table>\n")
    res.end();
})
server.listen(3000, 'localhost');