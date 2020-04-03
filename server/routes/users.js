const express = require("express");
const isEmpty = require("lodash/isEmpty");/*lodash是一个遍历的工具库*/
const validator = require("validator");/*validator是一个请求参数校验的库*/
const router = express.Router();


const validatorInput = (data) =>{
    let errors = {};
    if(validator.isEmpty(data.username)){
        errors.username = "请填写用户名"
    }
    if(!validator.isEmail(data.email)){
        errors.email = "请填写邮箱"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "请填写密码"
    }
    if(validator.isEmpty(data.passwordConfirmation)){
        errors.passwordConfirmation = "请确认密码"
    }
    if(!validator.equals(data.password,data.passwordConfirmation)){
        errors.passwordConfirmation = "两次密码不同"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}


router.post("/",(req,res) =>{
	/*req.body就是传递过来得参数*/
    const { errors,isValid } = validatorInput(req.body);
    if(!isValid){
        /**
         * 返回的数据类型
         * {
         *   username:"请输入用户ing"
         *      ...
         * }
         */
        res.status(400).json(errors);
    }
})

module.exports = router;