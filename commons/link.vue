<template>
	<view class="subject">
		<view class="link-card">
			<view class="box card-top">
				<view class="box-flex card-top-left">
					<image class="profile" src="https://s2.ax1x.com/2020/01/22/1E9UB9.jpg"/>
				</view>
				<view class="box-flex card-top-right">
					<view class="card-head">张小凡</view>
					<view class="card-text">游戏原画</view>
					<view class="card-text">广州字节宝软件有限公司</view>
				</view>
			</view>
			<view class="card-bottom">
				<view class="card-lite box">
					<view class="box-flex card-icon">
						<i class="iconfont phone"/>
					</view>
					<view class="card-bottom-text box-flex">18613184619</view>
				</view>
				<view class="card-lite box">
					<view class="box-flex card-icon">
						<i class="iconfont wechat"/>
					</view>
					<view class="card-bottom-text box-flex">A_cyDm</view>
				</view>
				<view class="card-lite box">
					<view class="box-flex card-icon">
						<i class="iconfont qq"/>
					</view>
					<view class="card-bottom-text box-flex">448203815</view>
				</view>
				<view class="card-lite box">
					<view class="box-flex card-icon">
						<i class="iconfont mailbox"/>
					</view>
					<view class="card-bottom-text box-flex">byteBounce@163.com</view>
				</view>
				
			</view>
		</view>
		<view class="link-btn">
			<button class="app-btn">马上联系</button>
		</view>
	</view>
</template>

<script>
</script>

<style scoped>
	.subject{
		padding: 52upx 36upx 0 36upx;
		background: #F6F7F9;
	}
	.link-card{
		border-radius: 8upx;
		background: #fff;
		box-shadow: 0 8upx 20upx rgba(0,0,0,0.16);
		padding: 44upx 20upx;
	}
	.link-btn{
		padding-top: 100upx;
	}
	.card-top{
		border-bottom: 1px solid #F3F3F3;
		padding-bottom: 40upx;
	}
	.card-top-left{
		min-width: 154upx;
		max-width: 154upx;
	}
	.profile{
		width: 154upx;
		height: 154upx;
		border-radius: 50%;
	}
	.card-top-right{
		padding-left: 20upx;
	}
	.card-head{
		font-size: 40upx;
		padding:5upx;
	}
	.card-text{
		font-size: 26upx;
		color: #666;
		padding: 5upx;
	}
	.card-bottom{
		padding-top: 22upx;
	}
	.card-lite{
		height: 50upx;
		line-height: 50upx;
		font-size: 26upx;
	}
	.card-icon{
		min-width: 44upx;
		max-width: 44upx;
	}
	.card-icon .iconfont{
		font-size: 30upx;
		color: #4CBEC8;
	}
	.card-bottom-text{
		color: #666;
	}
	
</style>
