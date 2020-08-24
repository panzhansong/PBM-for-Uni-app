<template>
	<view class="team">
		<bar @leftClick="goBack" title="我的团队"></bar>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import {
		pushPathMixin
	} from '../../util/mixin.js'
	export default {
		mixins:[pushPathMixin],
		data(){
			return {
				
			}
		},
		components:{
			bar
		}
	}
</script>

<style lang="less" scoped>
</style>
