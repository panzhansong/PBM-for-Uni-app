<template>
	<view class="announcement">
		<bar @leftClick="goBack" title="系统公告" />
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import { pushPathMixin } from '../../util/mixin.js';
	export default {
		mixins:[pushPathMixin],
		components:{
			bar
		}
	}
</script>

<style>
</style>
