<template>
    <view class="content">
        <!-- 首页 -->
        <gem_home v-if="index===0"></gem_home>
        <!-- 案例 -->
        <gem_case v-if="index===1"></gem_case>
        <!-- 估价 -->
        <gem_valuation v-if="index===2"></gem_valuation>
        <!-- 联系 -->
        <gem_link v-if="index===3"></gem_link>
        <!-- 底部导航 -->
        <gem_bottom @toIndex="toIndex"></gem_bottom>
    </view>
</template>

<script>
    import gem_bottom from '../../commons/bottom/bottom.vue'
    import gem_case from '../../commons/case.vue'
    import gem_home from '../../commons/home'
    import gem_link from '../../commons/link.vue'
    import gem_valuation from '../../commons/valuation.vue'

    export default {
        components: {
            gem_bottom,
            gem_case,
            gem_home,
            gem_valuation,
            gem_link,
        },
        data() {
            return {
                index: 3, //0===首页，1===案例，2===估价，3===联系
            }
        },
        onLoad() {

        },
        methods: {
            toIndex(index) {
                this.index = index
            }
        }
    }
</script>

<style>

</style>
