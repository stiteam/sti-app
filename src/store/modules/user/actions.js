/**
 * actions用来描述发生了什么，执行了什么动作
 * 
 * 异步操作要定义在action
 */
import * as types from '../types'

/**
 * 创建异步操作
 * promise中间件，返回promise对象，自动获取resolve的值
 * @return {[type]} [description]
 */
export async function login() {

	let respone = await fetch('http://localhost:4000/app/wfront/blog').then(res => {

		return {

            name: 'zhangdi',
            organization: '360',
            isLogin: true
        }
	}, () => {

		return {

            name: '匿名用户',
            organization: '',
            isLogin: false
        }
	})

	return {

		type: types.TYPE_BLOG_LIST,
		user: respone.user
	}
}