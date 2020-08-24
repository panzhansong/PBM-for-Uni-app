<template>
	<view class="messageDetail">
		<bar @leftClick="goBack"/>
		<view class="content">
			<view class="title">冲币成功</view>
			<view class="time">2020-12-12 12:10</view>
			<view class="main">恭喜您，您于2020-12-12 12:11 成功充币恭喜您，成功充币恭喜您， 成功充币，内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容。</view>
		</view>
	</view>
</template>
<script>
	import bar from '../../components/bar.vue';
	import { pushPathMixin } from '../../util/mixin.js';
	export default {
		mixins:[pushPathMixin],
		data() {
			return {
				
			}
		},
		components:{
			bar
		}
	}
</script>
<style lang="less" scoped>
	.messageDetail {
		background: #F8F8F8;
		height: 100vh;

		.content {
			margin-top: 45rpx;
			color: #333333;

			.title {
				font-weight: bold;
				font-size: 32rpx;
				text-align: center;
			}

			.time {
				margin-top: 16rpx;
				color: #333333;
				font-size: 22rpx;
				text-align: center;
				font-weight: 300;
			}

			.main {
				width: 620rpx;
				margin: 40rpx auto 0;
				color: #333333;
				line-height: 34rpx;
				font-size: 26rpx;
			}
		}
	}
</style>
