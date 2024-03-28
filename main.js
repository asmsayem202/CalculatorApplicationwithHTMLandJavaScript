var express = require('express');
var formidable = require('formidable');


var app = express();

app.use(express.static(__dirname + "/wwwroot"));
app.get("/", function (rq, rs) {
    rs.sendFile(__dirname + "/wwwroot/default.html");
})

app.post('/', function (req, res) {

    var frmP = new formidable.IncomingForm();


    frmP.parse(req, function (e, f) {

        var opt = f.Operation;
        var n1 = Number(f.N1);
        var n2 = Number(f.N2);
        var result;
        var expression;

        if (opt == 'add') {
            result = n1 + n2;
        }
        else if (opt == 'sub') {
            result = n1 - n2;
        }
        else if (opt == 'mul') {
            result = n1 * n2;
        }
        else {
            result = n1 / n2;
        }

        var resData = { "Value": result };

        res.writeHead(200, { 'content-type': "application/json" });
        res.end(JSON.stringify(resData));
        //res.writeHead(200, { 'content-type': "text/plain" });
        //res.end(result.toString());
        console.log(result);
    })



})




console.log(__dirname);
console.log(__filename);


app.listen(88);
console.log('app started');