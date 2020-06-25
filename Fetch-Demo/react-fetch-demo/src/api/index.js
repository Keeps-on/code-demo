
import {httpGet,httpPost} from '../utils/http'

import base from './base'

const api = {
    getChentpin(){
        return httpGet(base.ownUrl + base.chengpin)
    },
    getLogin(params){
        return httpPost(base.ownUrl + base.login,params);
    }
}
export default api