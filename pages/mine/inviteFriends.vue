<template>
	<view class="inviteFriends" :style="{'padding-top':statusBarHeight}">
		<view class="header" :style="{'top':statusBarHeight}">
			<view @click="goBack">
				<image src="../../static/image/account/left.png" alt="">
			</view>
			<view class="title">
				邀请好友
			</view>
		</view>

		<view class="content">
			<view class="code">
				<image src="imgUrl" alt="">
			</view>
			<view class="user">
				<view>快点加入我们吧</view>
				<view>推广人：{{iphone}}</view>
			</view>
		</view>
	</view>
</template>
<script>
	import bar from '../../components/bar.vue'
	import {
		pushPathMixin,
		getSystemInfoMixin
	} from '../../util/mixin.js'
	export default {
		name: 'inviteFriends',
		mixins: [pushPathMixin, getSystemInfoMixin],
		data() {
			return {
				imgUrl: '',
				iphone: '15394977822',
				statusBarHeight: 0,
				height: ''
			}
		},
		created() {
			const {
				statusBarHeight
			} = this.getSystemInfo();
			this.statusBarHeight = statusBarHeight + 'px'
		},
		components: {
			bar
		}
	}
</script>
<style lang="less" scoped>
	.inviteFriends {
		height: 100vh;
		background: url('../../static/image/mine/inviteFriends.png');
		background-size: 100% 100%;

		.header {
			position: fixed;
			top: 0;
			left: 0;
			height: 45px;
			display: flex;
			align-items: center;
			z-index: 99;

			image {
				margin-left: 50rpx;
				width: 19rpx;
				height: 35rpx;
				display: block;
				margin-right: 245rpx;
			}

			.title {
				color: #fff;
				font-size: 30rpx;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
			}
		}

		.content {
			position: fixed;
			bottom: 23rpx;
			left: 39rpx;
			display: flex;

			.code {
				width: 202rpx;
				height: 202rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 5rpx;
				margin-right: 27rpx;
			}

			.user {
				margin-top: 100rpx;
				color: #fff;
				font-size: 28rpx;
				font-weight: 400;

				view {
					&:first-child {
						margin-bottom: 10rpx;
					}
				}
			}
		}
	}
</style>
