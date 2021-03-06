import request from '@/js_sdk/cooke-request/request/request.js'
import store from '../store'

// 全局配置
request.setConfig({
	baseUrl: 'http://127.0.0.1:7001', // 此为测试地址，需加入到域名白名单，或者更改为您自己的线上地址即可
	dataType: 'json', // 可删除，默认为json
	responseType: 'text', // 可删除，默认为text
	// 设置请求头，支持所有请求头设置，也可不设置，去掉header就行
	header: {
		'content-type': 'application/json;charset=utf-8',
		'Authorization': 'Bearer ' + store.state.token || ''
	}
})

// 设置请求拦截器
let request_time = 0
request.interceptors.request(config => {
	// 配置参数和全局配置相同，此优先级最高，会覆盖在其他地方的相同配置参数

	// 追加请求头，推荐
	// config.header['content-type'] = 'application/json';
	// config.header.token = 'token from interceptors';

	// 覆盖请求头
	// config.header = {
	// 'content-type': 'application/json',
	// 'token': 'token from interceptors'
	// }

	// return false; // 终止请求
	// return Promise.reject('error from request interceptors'); // 向外层抛出错误，用catch捕获


	uni.showLoading({
		title: '加载中...'
	});
	request_time++
	return config; // 返回修改后的配置，如未修改也需添加这行
})

// 设置响应拦截器
request.interceptors.response(res => {
	// 接收请求，执行响应操作
	// 您的逻辑......
	request_time--
	if (request_time === 0) {
		uni.hideLoading();
	}
	// console.log('响应拦截器=>', res)
	// if (res.statusCode !== 200) {
	// 	uni.showToast({
	// 		title: res.errMsg
	// 	});
	// 	console.log(res)
	// }

	switch (res.statusCode) {
		case 200:
			break
		case 401:
			uni.redirectTo({
				url: '../../pages/login/login'
			});
		break
		default:
		uni.showToast({
			title: res.errMsg
		});
		

	}
	// return false;    // 阻止返回,页面不会接收返回值
	// return {message: '自定义值，来自拦截器'};   // 返回您自定义的值，将覆盖原始返回值
	// return Promise.reject('error from response interceptors') // 向外层抛出错误，用catch捕获
	return res; // 原样返回
})

export default request
