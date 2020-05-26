class TencentMap {
    constructor() {
        this.elements;
        this.mapKey;
        this.mapVer = '2.exp';
        this.mapApi = 'https://map.qq.com/api/js';
    }

    load(elements, config) {
        if (elements) {
            this.elements = elements
        }
        if (!this.elements) {
            throw new Error('DOM elements must define')
        }
        if (typeof config == 'object') {
            if (config.mapKey) {
                this.mapKey = config.mapKey
            }
            if (config.mapVer) {
                this.mapVer = config.mapVer
            }
            if (config.mapApi) {
                this.mapApi = config.mapApi
            }
        }
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.id = 'InitQQMap'
        script.src = this.mapApi + '?v=' + this.mapVer + '&key=' + this.mapKey + '&callback=InitQQMap'
        const head = document.getElementsByTagName('head')[0] || document.body
        const consts = document.getElementById(script.id)
        if (consts) {
            head.removeChild(consts)
        }
        head.appendChild(script)
        window.QQMapAuthorVue = 'Jared.Yan (Yanhuaiwen@163.com)'
        return new Promise((resolve, reject) => {
            window.InitQQMap = () => {
                try {
                    if (typeof resolve == 'function') {
                        resolve(window.qq || {})
                    } else {
                        throw new Error('resolve must function')
                    }
                } catch (e) {
                    reject(e)
                }
            }
        })
    }
}
export default new TencentMap()