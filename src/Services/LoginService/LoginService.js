import axios from "axios";

class LoginService {
    constructor(account, password) {
        this.account = account;
        this.password = password;
    }

    login = async(url) => {

        const loginConfig = {
            
        }

        const loginPayload = JSON.stringify({
            "account":this.account,
            "password":this.password
        });

        try{
            const res = axios.post(url,loginPayload,)
        }catch(e){

        }
    }


}

export default LoginService;