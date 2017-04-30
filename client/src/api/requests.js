import axios from 'axios';

class Request {

    constructor() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        let AUTH_TOKEN = user ? user.Authorization : null;

        this.setCommonHeader('Authorization', AUTH_TOKEN);
    }

    setCommonHeader(key, value) {
        axios.defaults.headers.common[key] = value;
    }

    async call(config) {
        return new Promise(async (resolve, reject) => {

            let response = {};

            try {
                response = await axios(config);
                response.error = false;

                resolve(response);

            }
            catch(e) {
                response = e.response;
                response.error = true;

                reject(response);

            }

        });
    }

}

let request = new Request();

export default request;


