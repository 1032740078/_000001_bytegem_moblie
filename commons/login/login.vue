<template>
	<view>登录中...</view>
</template>

<script>
import { user_login } from '@/api/login.js';
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	methods: {
		...mapMutations(['token', 'userId', 'role']),
		//用户登录
		user_login() {
			user_login('admin', '123456').then(res => {
				console.log(res.body);
				//======
				uni.setStorageSync('token', res.body.token);
				this.token(res.body.token);
				//======
				uni.setStorageSync('userId', res.body.userId);
				this.userId(res.body.userId);
				//======
				uni.setStorageSync('role', res.body.role);
				this.role(res.body.role);
				
				setTimeout(()=>{
					uni.navigateBack({
					    delta: 1
					});
				},1000)
			});
		}
	},
	created() {
		this.user_login()
	}
};
</script>

<style lang="less"></style>
