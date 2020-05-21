import request from './index'


/*
 * search
 * 报价模块
 * */
export const quoted_module_find = params => {
	console.log(params)
	return request.post(
		'/api/v1/quoted_module/find', {
			data: {
				quoted_class_id: params.quoted_class_id,
				page: 0,
				limit: 100,
			}
		}
	).then(res => res.data)
}
