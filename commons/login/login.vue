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
				console.log(res.data.body);
				//======
				uni.setStorageSync('token', res.data.body.token);
				this.token(res.data.body.token);
				//======
				uni.setStorageSync('userId', res.data.body.userId);
				this.userId(res.data.body.userId);
				//======
				uni.setStorageSync('role', res.data.body.role);
				this.role(res.data.body.role);
			});
		}
	}
};
</script>

<style lang="less"></style>
