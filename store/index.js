// 使用:
// <script>  
//     import {  
//         mapState,  
//         mapMutations  
//     } from 'vuex';  

//     export default {  
//         computed: {  
//             ...mapState(['avatarUrl', 'login', 'userName'])  
//         },  
//         methods: {  
//             ...mapMutations(['logout'])  
//         }  
//     }  
// </script>
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		token: uni.getStorageSync('token'),
		userId: uni.getStorageSync('userId'),
		role: uni.getStorageSync('role'),
	},
	mutations: {
		token(state, data) {
			state.token = data
		},

		userId(state, data) {
			state.userId = data
		},

		role(state, data) {
			state.role = data
		},

	}
})
