import request from './index'


/*
* search
* 用户登陆
* */
export function user_login(
    username,
    password
) {

    return new Promise((resolve, reject) => {
        request.post(
            '/api/v1/users/login',
            {
                data: {
                    username,
                    password
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
