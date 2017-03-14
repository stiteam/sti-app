/**
 * actions用来描述发生了什么，执行了什么动作
 * 
 * 异步操作要定义在action
 */
import * as types from '../types'
import pinch from 'react-native-pinch'

/**
 * 创建异步操作
 * promise中间件，返回promise对象，自动获取resolve的值
 * @return {[type]} [description]
 */
export async function login() {

    // let respone = await fetch('http://localhost:4000/app/wfront/blog').then(res => {
    let respone = await pinch.fetch('https://10.187.101.154/ngsoc/admin/login?app=react-native', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: '{"username": "admin", "password": "Admin123"}',
        sslPinning: {
            cert: 'ngsoc'
        }
    })
    .then(res => {
        console.log(JSON.parse(res.bodyString));
        // return res.json()
    })
    .then(data => {
        return {
            name: data.data.username,
            // name: 'zhangdi',
            organization: '360',
            isLogin: true
        }
    })
    .catch(res => {

        console.log(res)

		return {

            name: '匿名用户',
            organization: '',
            isLogin: false
        }
	})

	return {

		type: types.TYPE_USER_LOGIN,
		user: respone.user
	}
}