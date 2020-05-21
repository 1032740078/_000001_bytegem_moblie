import request from './index'


/*
 * search
 * 报价目录查找list
 * */
export const quoted_list_find = params => {
	return request.post(
		'/api/v1/quoted_list/find', {
			data: {
				limit: 20,
				page: 0,
			}
		}
	).then(res => res.data)
}

/*
 * search
 * 报价目录查找单个
 * */
export const quoted_list_find_D = params => {
	return request.post(
		'/api/v1/quoted_list/find', {
			data: {
				id: params.id
			}
		}
	).then(res => res.data)
}
/*
 * search
 * 报价目录查找自己下所有
 * */
export const quoted_list_find_S = params => {
	return request.post(
		'/api/v1/quoted_list/find', {
			data: {
				allId: params.allId
			}
		}
	).then(res => res.data)
}
