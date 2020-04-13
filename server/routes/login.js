const express = require("express");
const sqlFn = require("../mysql")
const router = express.Router();


router.post("/",(req,res) =>{
    const { username,password } = req.body;
    const sql = "select * from user where `username`=? AND `password`=?";
    const arr = [username,password];
    sqlFn(sql,arr,function(data) {
        if(data.length>0){
            res.json({success:true})
        }else{
            res.status(401).json({ errors:{form:"用户名密码错误"}})
        }
    })
})

module.exports = router;