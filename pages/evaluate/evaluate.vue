<template>
	<view class="inside-view">
		<!-- 底部步骤条 -->
		<view class="progress">
			<view class="progress-bar" :class="{ 'bar-radius': sum === number }" :style="'width:' + (number / sum) * 100 + '%;'">{{ number }}/{{ sum }}</view>
		</view>
		<view v-for="(quoted_list, quoted_list_list_key) in quoted_list_list" :key="quoted_list_list_key">
			<!-- 大标题 -->
			<view class="evaluate-list">
				<view class="chunk" />
				{{ quoted_list.quoted_list_name }}模块选择
			</view>
			<view v-for="(quoted_class, quoted_class_key) in quoted_list.quoted_class" :key="quoted_class_key">
				<!-- 列表未展开 -->
				<view class="app-list box">
					<view class="box-flex app-list-left">{{ quoted_class.quoted_class_name }}（多选）</view>
					<view style="float: right;width: 100%;text-align: right;">
						{{ quoted_class.quoted_module | quoted_module_activa_munber }}/{{ quoted_class.quoted_module.length }}
					</view>
					<!-- 未展开时显示 -->
					<!-- <view class="box-flex box app-list-right">
						<view class="list-right-text box-flex">邮箱、手机邮箱</view>
						<view class="list-right-icon box-flex"><i class="iconfont advance" /></view>
					</view> -->
				</view>
				<view class="option"></view>
				<!-- 选中状态 多class list-activa -->
				<!-- <view class="option-list box list-activa">
					<view class="box-flex option-list-left">定位获取</view>
					<view class="box-flex option-list-right"><i class="iconfont wenhao" @click="show_floating_window" /></view>
				</view> -->
				<!-- 未选中 -->
				<view
					class="option-list box"
					:class="{ 'list-activa': quoted_module.active ? true : false }"
					v-for="(quoted_module, quoted_module_key) in quoted_class.quoted_module"
					:key="quoted_module_key"
					@click="quoted_module_click(quoted_module, quoted_module_key)"
				>
					<view class="box-flex option-list-left">{{ quoted_module.quoted_module_name }}</view>
					<view class="box-flex option-list-right"><i class="iconfont wenhao" /></view>
				</view>
			</view>
		</view>

		<!-- 弹窗提示 -->
		<floating_window v-if="floating_window_show" @hide_windows="floating_window_show = false" />
	</view>
</template>

<script>
import floating_window from '../../commons/evaluate/floatingWindow.vue';
import { quoted_class_find } from '@/api/quoted_class.js';
import { quoted_list_find_D, quoted_list_find_S } from '@/api/quoted_list.js';
import { quoted_module_find } from '@/api/quoted_module.js';
export default {
	components: {
		floating_window
	},
	data() {
		return {
			number: '2',
			sum: '7',
			floating_window_show: false,
			quoted_id_list: [],
			// quoted_class_list: [],
			quoted_list_list: []
			// quoted_module_list: []
		};
	},
	async onLoad(data) {
		console.log(JSON.parse(data.quoted_id));
		this.quoted_id_list = JSON.parse(data.quoted_id);
		await this.quoted_list_find_S(this.quoted_id_list);
	},
	filters: {
		quoted_module_activa_munber(quoted_module) {
			let mun = 0;
			quoted_module.forEach(item => {
				if (item.active) mun++;
			});
			return mun;
		}
	},
	methods: {
		async quoted_list_find_D(id, key) {
			const res = await quoted_list_find_D({ id });

			if (res.data.length >= 0) {
				this.quoted_list_list.push(res.data);
				this.quoted_class_find(id, key);
				console.log('list->', this.quoted_list_list);
			}
		},
		async quoted_list_find_S(allId) {
			const res = await quoted_list_find_S({ allId });
			if (res.data.length >= 0) {
				this.quoted_list_list = res.data;
			}
		},

		async quoted_class_find(id, list_key) {
			//报价模块分类
			const res = await quoted_class_find({ id });
			if (res.data.length >= 0) {
				if (res.data.length > 0) {
					// this.quoted_list_list[0][list_key].quoted_class = [];
					this.$set(this.quoted_list_list[0][list_key], 'quoted_class', []);
				}
				res.data.forEach((item, key) => {
					console.log(this.quoted_list_list[0][list_key]);
					this.quoted_list_list[0][list_key].quoted_class.push(item);
					console.log('class=>', list_key, key);
					this.quoted_module_find(item.id, list_key, key);
				});
			}
		},

		async quoted_module_find(quoted_class_id, list_key, class_key) {
			const res = await quoted_module_find({ quoted_class_id });
			if (res.data.length >= 0) {
				// this.quoted_class_list[key].quoted_module.push(...res.data);
				this.$set(this.quoted_list_list[0][list_key].quoted_class[class_key], 'quoted_module_list', res.data);
				console.log('module=======');
				console.log(quoted_class_id, list_key, class_key);
				console.log(this.quoted_class_list[key]);
				console.log(res.data);
				console.log('=======');
			}
		},
		//======
		show_floating_window() {
			this.floating_window_show = true;
		},
		quoted_module_click(quoted_module, quoted_module_key) {
			console.log(quoted_module, quoted_module_key);
			if (quoted_module.active) {
				this.$set(quoted_module, 'active', false);
			} else {
				this.$set(quoted_module, 'active', true);
			}
		}
	}
};
</script>

<style scoped>
.progress {
	background: #f6f7f8;
	height: 28upx;
	line-height: 28upx;
}

.progress-bar {
	background: #4cbec8;
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
	border-bottom: 1upx solid #e5e5e5;
	font-size: 30upx;
	font-weight: 400;
}

.evaluate-list .chunk {
	display: inline-block;
	background: #4cbec8;
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
	background: #f7f7f8;
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
	border: 1upx solid #4ebec8;
	background: #f5ffff;
	color: #4ebec8;
}
</style>
