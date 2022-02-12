import Validations from "./Validatios";

export default class SignupValidation{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    checkValidation(){
        let error = [];

        if(!Validations.checkEmail(this.email)){
            error['email'] = 'Invalid Email';
        }

        if(!Validations.minLength(this.password, 6)){
            error['password'] = 'password at least 6 char';
        }

        return error;
    }
}