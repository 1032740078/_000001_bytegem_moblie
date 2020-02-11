<template>
	<view class="inside-view">
		<view class="inform">
			<i class="iconfont notice"/>
			00:30:00内联系客户经理，即可领取价值500的现金优惠卷
		</view>
		<view class="price-box">
			<view class="price-top box">
				<view class="price-left box-flex">
					<p><span>￥</span>9000</p>
				</view>
				<view class="price-right box-flex">
					<span>重新询价</span>
				</view>
			</view>
			<view class="price-bottom">
				同行报价12000元，我们的报价比同行报价低3000元
			</view>
		</view>
		
		<view class="app-list box">
			<view class="box-flex app-list-left">
				优惠卷
			</view>
			<view class="box-flex box app-list-right">
				<view class="list-right-text box-flex">
					无
				</view>
				<view class="list-right-icon box-flex">
					<i class="iconfont advance"/>
				</view>
			</view>
		</view>
		
		<view class="offer-btn">
			<button hover-class="app-btn-hover" class="app-btn">马上开发</button>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.inside-view{
		background: #F6F7F9;
	}
	.inform{
		padding: 0 32upx;
		height: 50upx;
		line-height: 50upx;
		background: #fff7ee;
		font-size: 22upx;
		color: #666;
	}
	.inform .notice{
		display: initial;
		font-size: 24upx;
		color: #FFAE5A;
		margin-right: 14upx;
	}
	.price-box{
		background: #fff;
		height: 180upx;
		padding: 0upx 32upx;
		margin-bottom: 20upx;
	}
	.price-top{
		height: 130upx;
	}
	.price-bottom{
		height: 50upx;
		font-size: 22upx;
		line-height: 50upx;
		color: #888888;
	}
	.price-left{
		padding-top: 16upx;
	}
	.price-left p{
		font-size: 80upx;
		line-height: 114upx;
	}
	.price-left p span{
			font-size: 36upx;
	}
	.price-right{
		max-width: 150upx;
		text-align: right;
		font-size: 26upx;
		color: #4EBEC8;
		padding-top: 28upx;
	}
	.offer-btn{
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
		padding: 20upx 32upx;
	}
</style>
