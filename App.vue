<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	@import url("static/css/iconfont.css");

	/*每个页面公共css */
	page {
		font-size: 24upx;
		color: #333;
		font-family: 'PingFangSC-Regular', 'Source Han Sans CN' !important;
	}

	.font-smoke {
		/*深灰色字体*/
		color: #666;
	}

	.font-gray {
		/*浅灰色字体*/
		color: #888;
	}

	.font-bold {
		/* 加粗 */
		font-weight: 700;
	}

	.subject {
		/* 视图窗口 */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 44px;
		overflow: auto;
		padding-bottom: 20upx;
	}

	.inside-view {
		/* 内视图窗口 */
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0px;
		overflow: auto;
		padding-bottom: 20upx;
	}

	/* 布局 */
	.box {
		display: flex;
		display: -webkit-flex;
	}

	.box-flex {
		flex: 1;
	}

	/* 按钮 */
	.app-btn {
		height: 84upx;
		background: #4CBEC8;
		border-radius: 8upx;
		color: #fff;
		font-size: 36upx;

	}

	.app-btn-hover {
		background: #32A5AF;
	}

	.app-btn::after {
		border: 0upx !important;
	}

	/* 列表 */
	.app-list {
		padding: 0 32upx;
		height: 96upx;
		line-height: 96upx;
		background: #fff;
	}

	.app-list-left {
		font-size: 26upx;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		min-width: 60%;
		max-width: 60%;
	}

	.app-list-right {
		text-align: right;
	}

	.list-right-icon {
		max-width: 26upx;
		min-width: 26upx;
	}

	.list-right-text {
		font-size: 24upx;
		color: #9B9B9B;
	}

	.list-right-icon .advance {
		font-size: 26upx;
		color: #9B9B9B;
	}

	/*苹果x适配 H5APP*/
	@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}

	}

	/*苹果x适配 微信*/
	@media only screen and (device-width: 375px) and (device-height: 724px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}

	}

	/*苹果xs适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}

	}

	/*苹果xs适配 微信*/
	@media only screen and (device-width: 414px) and (device-height: 808px) and (-webkit-device-pixel-ratio: 3) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}

	}

	/*苹果xr适配 H5APP*/
	@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}
	}

	/*苹果xr适配 微信*/
	@media only screen and (device-width: 414px) and (device-height: 808px) and (-webkit-device-pixel-ratio: 2) {
		.bottom {
			padding-bottom: 34px !important;
		}

		.subject {
			bottom: 78px;
		}
	}
</style>
