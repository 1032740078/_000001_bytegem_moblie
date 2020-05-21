import request from './index'


/*
 * search
 * 用户登陆
 * */
export const user_login = (
	username,
	password
) => {
	return request.post(
		'/api/v1/users/login', {
			data: {
				username,
				password
			}
		}
	).then(res => res.data)
}
