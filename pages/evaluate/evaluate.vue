<template>
	<view class="inside-view">
		<!-- 底部步骤条 -->
		<view class="progress">
			<view class="progress-bar" :class="{'bar-radius':sum === number}" :style="'width:'+ (number / sum * 100) +'%;'">
				{{number}}/{{sum}}
			</view>
		</view>
		<!-- 大标题 -->
		<view class="evaluate-list">
			<view class="chunk" />
			Web网页模块选择
		</view>
		<!-- 列表未展开 -->
		<view class="app-list box">
			<view class="box-flex app-list-left">
				基础功能（多选）
			</view>
			<!-- 未展开时显示 -->
			<view class="box-flex box app-list-right">
				<view class="list-right-text box-flex">
					邮箱、手机邮箱
				</view>
				<view class="list-right-icon box-flex">
					<i class="iconfont advance" />
				</view>
			</view>
		</view>

		<!-- 列表展开 -->
		<view class="app-list box">
			<view class="box-flex app-list-left">
				附加功能（多选）
			</view>
			<!-- 展开时隐藏 -->
			<!-- <view class="box-flex box app-list-right">
				<view class="list-right-text box-flex">
					查看报价单
				</view>
				<view class="list-right-icon box-flex">
					<i class="iconfont advance"/>
				</view>
			</view> -->
		</view>
		<view class="option">
			<!-- 选中状态 多class list-activa -->
			<view class="option-list box list-activa">
				<view class="box-flex option-list-left">
					定位获取
				</view>
				<view class="box-flex option-list-right">
					<i class="iconfont wenhao" @click="show_floating_window" />
				</view>
			</view>
			<!-- 未选中 -->
			<view class="option-list box">
				<view class="box-flex option-list-left">
					语音识别
				</view>
				<view class="box-flex option-list-right">
					<i class="iconfont wenhao" />
				</view>
			</view>
		</view>

		<!-- 弹窗提示 -->
		<floating_window v-if="floating_window_show" @hide_windows="floating_window_show=false" />
	</view>
</template>

<script>
	import floating_window from "../../commons/evaluate/floatingWindow.vue"
	export default {
		components: {
			floating_window
		},
		data() {
			return {
				number: '2',
				sum: '7',
				floating_window_show: false,
			}
		},
		onLoad() {},
		methods: {
			show_floating_window() {
				this.floating_window_show = true
			},
		}
	}
</script>

<style scoped>
	.progress {
		background: #F6F7F8;
		height: 28upx;
		line-height: 28upx;
	}

	.progress-bar {
		background: #4CBEC8;
		color: #fff;
		text-align: right;
		border-radius: 0 14upx 14upx 0;
		padding-right: 20upx;
		box-sizing: border-box;
		font-size: 20upx;
	}

	.bar-radius {
		border-radius: 0;
	}

	.evaluate-list {
		padding: 0upx 32upx;
		height: 106upx;
		line-height: 106upx;
		border-bottom: 1upx solid #E5E5E5;
		font-size: 30upx;
		font-weight: 400;
	}

	.evaluate-list .chunk {
		display: inline-block;
		background: #4CBEC8;
		height: 32upx;
		width: 6upx;
		margin-right: 10upx;
		margin-bottom: -4upx;
	}

	.option {
		padding: 16upx 32upx 0 32upx;
	}

	.option-list {
		height: 96upx;
		background: #F7F7F8;
		border-radius: 8upx;
		line-height: 96upx;
		padding: 0 16upx;
		margin: 16upx 0 0 0;
	}

	.option-list-left {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 26upx;
	}

	.option-list-right {
		text-align: right;
		min-width: 40upx;
		max-width: 40upx;
		font-size: 20upx;
		color: #666;
	}

	.list-activa {
		border: 1upx solid #4EBEC8;
		background: #F5FFFF;
		color: #4EBEC8;
	}
</style>
