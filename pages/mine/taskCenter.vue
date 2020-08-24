<template>
	<view class="taskCenter">
		<bar title="任务中心" @leftClick="goBack"/>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import { pushPathMixin } from '../../util/mixin.js'
	export default {
		mixins:[pushPathMixin],
		components:{
			bar
		}
	}
</script>

<style>
</style>
