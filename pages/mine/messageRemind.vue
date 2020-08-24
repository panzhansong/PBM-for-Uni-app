<template>
	<view class="messageRemind">
		<bar @leftClick="goBack" title="消息提醒"></bar>
		<view>
			<view>
				<view>
					<view class="time">
						07-22 12:10
					</view>
					<view class="main">
						<view class="title">
							<view>冲币成功</view>
							<text></text>
						</view>
						<view class="content">
							恭喜您，您于2020-12-12 12:11 成功充币842...
						</view>
						<view class="readDetail" @click="pushPath('/pages/mine/messageDetail')">
							<view>查看详情</view>
							<text></text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import { pushPathMixin} from '../../util/mixin.js';
	import bar from '../../components/bar.vue';
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
	.messageRemind {
		width: 100%;
		height: 100vh;
		background: #F8F8F8;

		>view {
			>view {
				.time {
					width: 173rpx;
					height: 34rpx;
					text-align: center;
					line-height: 34rpx;
					background: rgba(229, 229, 229, 1);
					border-radius: 17rpx;
					color: #fff;
					font-size: 20rpx;
					margin: 36rpx auto 26rpx;
				}

				.main {
					width: 696rpx;
					height: 236rpx;
					background: rgba(255, 255, 255, 1);
					border-radius: 20rpx;
					margin: 0 auto;
					padding: 28rpx;
					box-sizing: border-box;

					.title {
						margin-bottom: 25rpx;
						display: flex;
						justify-content: space-between;
						align-items: center;

						>view {
							color: #333333;
							font-size:30rpx;
							font-weight:bold;
							color:rgba(51,51,51,1);
						}

						>text {
							width: 12rpx;
							height: 12rpx;
							background: rgba(243, 76, 55, 1);
							border-radius: 50%;
						}
					}

					.content {
						width: 100%;
						color: #999999;
						padding-bottom: 20rpx;
						border-bottom: 1rpx solid rgba(229, 229, 229, .68);
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
						font-size:26rpx;
						font-weight:500;
						color:rgba(153,153,153,1);
					}

					.readDetail {
						display: flex;
						justify-content: space-between;
						align-items: center;
						color: #666666;
						margin-top: 20rpx;
						font-size:26rpx;
						>text {
							width:11rpx;
							height: 20rpx;
							background: url(../../static/image/mine/right.png) no-repeat;
							background-size: 100% 100%;
						}
					}
				}
			}
		}
	}
</style>
