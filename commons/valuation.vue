<template>
	<view class="subject">
		<view class="valuation-top">
			<view class="login-box"><image class="valuation-login" src="https://s2.ax1x.com/2020/01/16/lvSxNq.png" /></view>
			<view class="valuation-head">请选择类目进行自助估价（多选）</view>
			<view class="option">
				<view class="box option-top">
					<view class="box-flex">
						<view
							class="option-card option-left"
							v-for="(quoted, quoted_key) in quoted_list"
							:class="{ 'option-activ': quoted_list[quoted_key].activ }"
							@click="quoted_click(quoted, quoted_key)"
							:key="quoted_key"
						>
							<view class="option-circle"><i class="iconfont webpage" /></view>
							<view class="option-head">{{ quoted.quoted_list_name }}</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view>
					<!-- <view class="box-flex">
						<view class="option-card option-centre">
							<view class="option-circle"><i class="iconfont apply" /></view>
							<view class="option-head">移动应用</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-right">
							<view class="option-circle"><i class="iconfont official_accounts" /></view>
							<view class="option-head">微信公众号</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view>
				</view>
				<view class="box option-bottom">
					<view class="box-flex">
						<view class="option-card option-left">
							<view class="option-circle"><i class="iconfont applet" /></view>
							<view class="option-head">微信小程序</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-centre">
							<view class="option-circle"><i class="iconfont front_end" /></view>
							<view class="option-head">前端项目</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view>
					<view class="box-flex">
						<view class="option-card option-right">
							<view class="option-circle"><i class="iconfont other" /></view>
							<view class="option-head">其它项目</view>
							<view class="option-gougou"><i class="iconfont gougou" /></view>
						</view>
					</view> -->
				</view>
				<!-- 未激活加 disabled="ture" -->
				<button hover-class="app-btn-hover" @click="nextStep" class="app-btn ">下一步</button>
			</view>
		</view>
		<view class="app-list box" @click="offerBtn">
			<view class="box-flex app-list-left">Web网页、移动应用</view>
			<view class="box-flex box app-list-right">
				<view class="list-right-text box-flex">查看报价单</view>
				<view class="list-right-icon box-flex"><i class="iconfont advance" /></view>
			</view>
		</view>
	</view>
</template>

<script>
import Bottom from './bottom/bottom';
import { mapState, mapMutations } from 'vuex';
import { quoted_list_find } from '@/api/quoted_list.js';
export default {
	components: {
		Bottom
	},
	data() {
		return {
			quoted_list: [],
			click_index: []
		};
	},
	onLoad() {},
	computed: {
		...mapState(['token', 'userId', 'role'])
	},
	methods: {
		//====请求区
		quoted_list_find() {
			quoted_list_find().then(res => (this.quoted_list = res.data));
		},
		//=========逻辑区
		offerBtn() {
			// 报价单按钮
			uni.navigateTo({
				url: '/pages/offer/offer'
			});
		},
		nextStep() {
			const quoted_click_data_list = [];
			this.quoted_list.forEach(item => {
				if (item.activ) {
					quoted_click_data_list.push(item.id);
				}
			});
			// 下一步按钮
			uni.navigateTo({
				url: '/pages/evaluate/evaluate?quoted_id=' + JSON.stringify(quoted_click_data_list)
			});
		},
		quoted_click(data, quoted_key) {
			//类目点击
			this.$set(this.quoted_list[quoted_key], 'activ', !this.quoted_list[quoted_key].activ);
		}
	},
	created() {
		if (!this.token) {
			uni.redirectTo({
				url: '../../pages/login/login'
			});
		} else {
			this.quoted_list_find();
		}
		// console.log(getApp().globalData.text);
	}
};
</script>

<style scoped>
.subject {
	background: #f6f7f9;
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
	border: 1px solid #f2f2f2;
	margin: 10upx 10upx;
}

.option-centre {
	display: block;
	margin: 0 auto;
}

.option-right {
	float: right;
}

.option-left {
	float: left;
}
.option-circle {
	/* background: #EBF9FA; */
	background: #f8f8f8;
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

.option-bottom {
	margin-bottom: 50upx;
}

.option-gougou {
	text-align: right;
	font-size: 28upx;
	display: none;
}

.option-activ {
	border: 1px solid #4abec8;
}

.option-activ .option-circle {
	background: #ebf9fa;
}

.option-activ .option-circle .iconfont {
	color: #4abec8;
}

.option-activ .option-head {
	color: #4abec8;
}

.option-activ .option-gougou {
	display: block;
}

.option-activ .gougou {
	color: #4abec8;
}
</style>
