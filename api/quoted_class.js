import request from './index'


/*
 * search
 * 报价模块分类
 * */
export const quoted_class_find = params => {
	console.log(params)
	return request.post(
		'/api/v1/quoted_class/find', {
			data: {
				id: params.id
			}
		}
	).then(res => res.data)
}
