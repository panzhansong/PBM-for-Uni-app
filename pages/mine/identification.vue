<template>
	<view class="identification">
		<bar  @leftClick="goBack" title="实名认证"/>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import { pushPathMixin } from '../../util/mixin.js'
	export default {
		mixins:[pushPathMixin],
		data() {
			return {
				
			}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
</style>
