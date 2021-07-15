import rpc from '../rpc'
import upload from './upload'

// 注册api
let modules = {
    upload,
}

let api = {}

for (let key in modules) {
    let module = modules[key]
    for (let item in module) {
        let config = module[item]
        let url = config.url
        if (!url) {
            console.error('url cant be null!')
            continue
        }
        api[item] = (data, headers, params, c) => {
            config.method = config.method ? config.method : 'post'
            config.data = data || {}
            config.headers = headers || {}
            config.params = params || {}
            if (c) {
                Object.assign(config, c)
            }
            return rpc.request(config)
        }
    }
}

export default api
