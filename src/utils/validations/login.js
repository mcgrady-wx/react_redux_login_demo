import validator from "validator"//校验的库
import isEmpty from "lodash/isEmpty"

const validateInput = (data) =>{
    let errors = {};
    //输入框空白验证
    if(validator.isEmpty(data.username)){
        errors.username = "请输入用户名"
    }
    if(validator.isEmpty(data.password)){
        errors.password = "请输入密码"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}

export default validateInput