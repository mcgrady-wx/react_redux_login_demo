const express = require("express");
const app = express();
const users = require("./routes/users")
const login = require("./routes/login")
const debug = require("debug")("my-application");
const bodyParser = require("body-parser") /*解决post请求传递参数*/

app.use(bodyParser.json());
app.use("/api/users",users);
app.use("/api/login",login);

app.listen(3030,(req,res) =>{
    debug("服务器运行在3030端口上");
})