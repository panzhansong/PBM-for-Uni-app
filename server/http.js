import api from './api.js';
import state from '../store/state.js'
const fetch = {
	sever(params, method) {
		const { url, sign } = params;
		let { data } = params;
		data.source = state.source;
		let contentType = method === 'GET' ? 'application/json' : 'application/x-www-form-urlencoded';
		contentType = params.contentType || contentType;
		return new Promise((resolve, reject) => {
			uni.request({
				url: api.baseURL+ url,
				data: data,
				method: method,
				header: {
					'content-type': contentType,
					'tokenId': uni.getStorageSync("userInfo").tokenId || '',
					'userId': uni.getStorageSync("userInfo").userId || '',
					'sign': sign
				},
				success: (res) => {
					if(res.data.code === '200'){
						resolve(res.data.data)
					}else if(res.data.code === '403'){
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							position:'bottom'
						})
						uni.reLaunch({
							url:'/pages/account/login'
						})
					}else {
						uni.showToast({
							title:res.data.msg,
							icon:'none',
							position:'bottom'
						})
					}
				},
				fail: (err) => {
					reject(err)
				}
			})
		})
	},
	get(url, data = '',sign){
	    const params = { url, data,sign };
	    return this.sever(params,'GET')
	},
	post(url, data, contentType,sign){
	    const params = { url, data, contentType,sign };
	    return this.sever(params, 'POST')
	 }
}

export default fetch;
