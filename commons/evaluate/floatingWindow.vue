<template>
	<view class="floating">
		<view class="floating-lucency"/>
		<view class="floating-bottom">
			<view class="hint-top">
				<i class="iconfont close" @click="hide_windows"/>
			</view>
			<view class="hint-head">定位获取</view>
			<view class="picture">
				<image class="hint-picture" src="https://s2.ax1x.com/2020/01/28/1MMbid.jpg"/>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		components: {
		},
		data() {
			return {
			}
		},
		onLoad() {},
		methods: {
			hide_windows() {
				this.$emit('hide_windows')
			},
		}
	}
</script>

<style scoped>
	.floating{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.floating-lucency{
		background-color: rgba(0,0,0,0.5);
		height: calc(100% - 600upx);
	}
	.floating-bottom{
		height: 600upx;
		background: #fff;
		padding: 0 32upx 0upx 32upx;
		box-sizing:border-box;
	}
	.hint-top{
		text-align: right;
		height: 70upx;
		box-sizing: border-box;
		padding: 26upx 0 0 0;
	}
	.hint-top .close{
		font-size: 30upx;
		color: #888;
	}
	.hint-head{
		text-align: center;
		font-size: 28upx;
		height: 60upx;
	}
	.picture{
		width: 100%;
		height: calc(600upx - 150upx );
		box-sizing:border-box;
	}
	.hint-picture{
		width: 680upx;
		height: 450upx;
	}
</style>
