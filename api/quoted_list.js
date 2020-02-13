import request from './index'


/*
 * search
 * 报价目录查找
 * */
export function quoted_list_find() {

	return new Promise((resolve, reject) => {
		request.post(
			'/api/v1/quoted_list/find', {
				data: {
					limit: 20,
					page: 0,
				}
			}
		).then((res) => {
			// console.log(res)
			// 请求成功
			resolve(res)
		}).catch((error) => {
			// 请求失败
			console.log(error)
			reject(error)
		})
	})
}
