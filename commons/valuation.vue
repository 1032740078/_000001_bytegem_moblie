<template>
	<view class="subject">
		<view class="valuation-top">
			<view class="login-box">
				<image class="valuation-login" src="https://s2.ax1x.com/2020/01/16/lvSxNq.png"/>
			</view>
			<view class="valuation-head">
				请选择类目进行自助估价（多选）
			</view>
			<view class="option">
				<view class="box option-top">
					<view class="box-flex">
						<view class="option-card option-left option-activ">
							<view class="option-circle">
								<i class="iconfont webpage"/>
							</view>
							<view class="option-head">WEB网页</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-centre">
							<view class="option-circle">
								<i class="iconfont apply"/>
							</view>
							<view class="option-head">移动应用</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-right">
							<view class="option-circle">
								<i class="iconfont official_accounts"/>
							</view>
							<view class="option-head">微信公众号</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
				</view>
				<view class="box option-bottom">
					<view class="box-flex">
						<view class="option-card option-left">
							<view class="option-circle">
								<i class="iconfont applet"/>
							</view>
							<view class="option-head">微信小程序</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-centre">
							<view class="option-circle">
								<i class="iconfont front_end"/>
							</view>
							<view class="option-head">前端项目</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-right">
							<view class="option-circle">
								<i class="iconfont other"/>
							</view>
							<view class="option-head">其它项目</view>
							<view class="option-gougou">
								<i class="iconfont gougou"/>
							</view>
						</view>
					</view>
				</view>
				<!-- 未激活加 disabled="ture" -->
				<button hover-class="app-btn-hover" @click="nextStep" class="app-btn ">
					下一步
				</button>
			</view>
		</view>
		<view class="app-list box" @click="offerBtn">
			<view class="box-flex app-list-left">
				Web网页、移动应用
			</view>
			<view class="box-flex box app-list-right">
				<view class="list-right-text box-flex">
					查看报价单
				</view>
				<view class="list-right-icon box-flex">
					<i class="iconfont advance"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Bottom from "./bottom/bottom";
	export default {
		components: {
			Bottom
		},
		data() {
			return {}
		},
		onLoad() {

		},
		methods: {
			offerBtn(){
				// 报价单按钮
				uni.navigateTo({
					url: '/pages/offer/offer'
				});
			},
			nextStep(){
				// 下一步按钮
				uni.navigateTo({
					url: '/pages/evaluate/evaluate'
				});
			}
		}
	}
</script>

<style scoped>
	.subject {
		background: #F6F7F9;
	}

	.valuation-top {
		background: #fff;
		padding: 40upx 0 32upx 0;
		margin-bottom: 20upx;
	}

	.valuation-login {
		width: 280upx;
		height: 100upx;
		display: block;
		margin: 0 auto;
	}

	.valuation-head {
		text-align: center;
		font-size: 36upx;
		padding-top: 50upx;
	}

	.option {
		padding: 0 36upx;
	}

	.option-card {
		width: 198upx;
		height: 198upx;
		border-radius: 12upx;
		border: 1px solid #F2F2F2;
	}

	.option-centre {
		display: block;
		margin: 0 auto;
	}

	.option-right {
		float: right;
	}

	.option-circle {
		/* background: #EBF9FA; */
		background: #F8F8F8;
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		border-radius: 50%;
		text-align: center;
		display: block;
		margin: 22upx auto 12upx auto;
	}

	.option-circle .iconfont {
		font-size: 56upx;
		color: #666666;
	}

	.option-head {
		text-align: center;
		color: #666;
		font-size: 26upx;
	}

	.option-top {
		padding: 60upx 0 46upx 0;
	}
	.option-bottom{
		margin-bottom: 50upx;
	}
	.option-gougou{
		text-align: right;
		font-size: 28upx;
		display: none;
	}
	.option-activ{
		border: 1px solid #4ABEC8;
	}
	.option-activ .option-circle{
		background: #EBF9FA;
	}
	.option-activ .option-circle .iconfont{
		color: #4ABEC8;
	}
	.option-activ .option-head{
		color: #4ABEC8;
	}
	.option-activ .option-gougou{
		display: block;
	}
	.option-activ .gougou{
		color: #4ABEC8;
	}
</style>
