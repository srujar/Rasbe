// let express = require("express");
// let app = express();
// const bodyParser = require("body-parser");
// let path = require('path');
// let session = require("express-session");
// var cors = require('cors');



// let http = require("http");
// const json = require("qs");
// let server = http.createServer(app);

// app.use(cors());
// app.use(session({
//     secret: 'jq_session',
//     resave: false,
//     saveUninitialized: true,
//     httpOnly: true,
//     cookie: { secure: false, maxAge: 60000000 }
// }));

// const port = process.env.PORT || 3100;

// server.listen(port, () => {
//     console.log(`started on port: ${port}`);
// });

// app.use('/', express.static('./www'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.post('/login', function(req, res) {
//     console.log('This is is req-body', req.body);
//     let username = ["Sunil", "Vishwa", "Srikant"];
//     let userkey = ["test", "test1", "test2"];
//     let login_status = false;

//     let userlogin = {
//         userName: req.body.userName,
//         password: req.body.password
//     };

//     console.log(userlogin);

//     for (let i = 0; i < username.length; i++) {
//         if (userlogin.userName === username[i] && userlogin.password === userkey[i]) {
//             login_status = true;
//             break;
//         }
//     }
//     if (login_status === true) { res.json("Yes"); } else { res.json("No"); }
// });

// app.post('/calculate', function(req, res) {

//     console.log(req.body);
//     let result = eval(req.body.value);
//     res.json({ result });


// })

let express = require('express');
let app = express();
let errorhandler = require('errorhandler');
const bodyParser = require('body-parser');
let http = require('http');
let server = http.createServer(app);
let socketIO = require('socket.io');

let path = require('path');
let cors = require('cors');
app.use(cors());

let io = socketIO(server);

const port = process.env.port || 3000;

// server.listen(port);



app.use(errorhandler());
app.use('/', express.static('./www'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



server.listen(port, () => {
    console.log(`started on port: ${port}`)
});






app.post('/calculator1', (req, res) => {
    //console.log("test");
    console.log(req.body);
    ///// Take all values from frontend
    let value1 = parseInt(req.body.val1);
    let value2 = parseInt(req.body.val2);
    let operand = req.body.operand;
    ///// Use compute function to get result

    //let result = 

    ///// Send back the response

    res.json(compute(value1, value2, operand));
});


io.on('connection', (socket) => {
    console.log('New user connected');
});




function compute(val1, val2, operand) {
    let result;
    switch (operand) {
        case '*':
            result = val1 * val2;
            return result;
        case '/':
            result = val1 / val2;
            return result;
        case '+':
            result = val1 + val2;
            return result;
        case '-':
            result = val1 - val2;
            return result;
    }
}




// var http = require('http');
// var date = require('./myfirstmodule')
// let express = require('express');
// let app = express();

//app
// function (req, res) {
//     console.log(req);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently:" +date.myDateTime());
//   console.log(date.myDateTime());
// //   res.end('Hello World!');
// }
// http.createServer(app).listen(3000)
// console.log("test 1");



// app.get("/test",(req,res)=>{

//     console.log("srikanth")

// });

// app.get("/test1",(req,res)=>{

//     console.log("firoz")

// });