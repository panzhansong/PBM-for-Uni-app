<template>
	<view class="onlineMessage">
		<bar @leftClick="goBack" title="在线留言" rightImageUrl="/static/image/mine/message1.png" @rightClick="pushPath('/pages/mine/answering')" />

		<view class="message_main">
			<image src="../../static/image/mine/cat.png">
				<view>您好，很抱歉没有为你您提供满意的服务，如需帮助，请留言。我们将尽快联系并解决您的问题。</view>
		</view>

	</view>
</template>

<script>
	import {
		pushPathMixin
	} from '../../util/mixin.js';
	import bar from '../../components/bar.vue';
	export default {
		mixins: [pushPathMixin],
		data() {
			return {}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.message_main {
		padding-top: 36rpx;
		text-align: center;
		padding-bottom: 40rpx;
		background: rgba(250, 250, 250, 1);

		image {
			width: 180rpx;
			height: 208rpx;
		}

		view {
			padding: 3rpx 80rpx;
			box-sizing: border-box;
			font-size: 24rpx;
			text-align: left;
			color: #333333;
		}
	}
</style>
