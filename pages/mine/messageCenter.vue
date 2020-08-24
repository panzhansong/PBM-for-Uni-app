<template>
	<view class="messageCenter">
		<bar @leftClick="goBack" title="消息中心" @rightClick="readAll" rightTitle="全部已读"></bar>
		<view class="ul">
			<view  class="li" @click="pushPath('/pages/mine/messageRemind')">
				<view class="messageRemind">
					<view>
						<image src="../../static/image/mine/message3.png">
							<text>12</text>
					</view>
					<text>消息提醒</text>
				</view>
				<view class="right"></view>
			</view>
			<view class="li" @click="pushPath('/pages/mine/announcement')">
				<view class="systemMessage">
					<view>
						<image src="../../static/image/mine/message2.png">
							<text>1</text>
					</view>
					<text>系统公告</text>
				</view>
				<view class="right"></view>
			</view>
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
			return {
				
			}
		},
		methods:{
			readAll(){
				//
			}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.messageCenter {
		.ul {
			.li {
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid rgba(220, 220, 220, .32);
				color: #333333;
				padding: 30rpx 45rpx 40rpx;
				box-sizing: border-box;

				view {
					display: flex;
					align-items: center;
					>view {
						position: relative;
						image {
							width: 45rpx;
							height: 40rpx;
							margin: 0 auto;
							display: block;
						}
						text {
							position: absolute;
							width: 34rpx;
							height: 34rpx;
							border-radius: 50%;
							background: #F34C37;
							top: 0;
							right: -10rpx;
							color: #fff;
							text-align: center;
							line-height: 34rpx;
							font-size: 20rpx;
							font-weight: 200;
						}
					}
					text {
						color: #333333;
						font-size: 28rpx;
						font-weight: bold;
					}
				}
				.messageRemind {
					>view {
						width: 86rpx;
						height: 86rpx;
						background: rgba(51, 137, 250, 1);
						border-radius: 50%;
						margin-right: 36rpx;
					}
				}
				.systemMessage {
					>view {
						width: 86rpx;
						height: 86rpx;
						background: rgba(255, 199, 50, 1);
						border-radius: 50%;
						margin-right: 36rpx;
					}
				}
				.right {
					width: 11rpx;
					height: 20rpx;
					background: url(../../static/image/mine/right.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
