<template>
    <view class="bottom">
        <view class="nav-tab" :class="{'nav-tab-active':home===0}" @click="toIndex(0)">
            <view class="nav-icon">
                <view class="circle">
                    <i class="iconfont home"/>
                </view>
            </view>
            <view class="nav-text" :class="{'nav-tab-active':home===0}">
                主页
            </view>
        </view>
        <view class="nav-tab" :class="{'nav-tab-active':home===1}" @click="toIndex(1)">
            <view class="nav-icon">
                <view class="circle">
                    <i class="iconfont case"/>
                </view>
            </view>
            <view class="nav-text" :class="{'nav-tab-active':home===1}">
                案例
            </view>
        </view>
        <view class="nav-tab" :class="{'nav-tab-active':home===2}" @click="toIndex(2)">
            <view class="nav-icon">
                <view class="circle">
                    <i class="iconfont assess"/>
                </view>
            </view>
            <view class="nav-text" :class="{'nav-tab-active':home===2}">
                估价
            </view>
        </view>
        <view class="nav-tab" :class="{'nav-tab-active':home===3}" @click="toIndex(3)">
            <view class="nav-icon">
                <view class="circle">
                    <i class="iconfont relation"/>
                </view>
            </view>
            <view class="nav-text" :class="{'nav-tab-active':home===3}">
                联系
            </view>
        </view>
    </view>
</template>

<script>
    export default {
        components: {},
        data() {
            return {
                home: 3, //0===首页，1===案例，2===估价，3===联系
            }
        },
        onLoad() {

        },
        methods: {
            toPage(url) {
                uni.navigateTo({url})
            },
            toIndex(index) {
                this.$emit('toIndex', index)
                this.home = index
            }
        }
    }
</script>

<style scoped>

    .bottom {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 44px;
        box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.06);
        background: #fff;
        z-index: 10;
    }

    .nav-tab {
        text-align: center;
        width: calc(100% / 4);
        float: left;
    }

    .nav-icon {
        height: 30px;
        line-height: 30px;
        color: #888;
    }

    .nav-icon .iconfont {
        font-size: 20px;
    }

    .nav-text {
        font-size: 10px;
        line-height: 10px;
        height: 14px;
        padding-bottom: 3px;
        color: #888;
        font-weight: 400;
    }

    .nav-tab-active .nav-icon .circle {
        height: 38px;
        width: 38px;
        line-height: 38px;
        position: relative;
        top: -14px;
        left: calc(50% - 19px);
        border-radius: 50%;
        background: #4ABEC8;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
    }

    .nav-tab-active .nav-icon .iconfont {
        color: #fff;
    }

    .nav-tab-active .nav-text {
        color: #4ABEC8;
    }
</style>
