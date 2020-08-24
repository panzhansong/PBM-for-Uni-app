<template>
	<view class="paymentBind">
		<bar title="支付绑定" @leftClick="goBack"></bar>
		<view class="lists">
			<view class="li">
				<view class="box">
					<view>
						<image src="../../static/image/mine/airPay.png" />
						<view class="p">支付宝</view>
					</view>
					<view class="h6">未绑定</view>
				</view>
				<em></em>
			</view>
			<view class="li">
				<view class="box">
					<view>
						<image src="../../static/image/mine/wechat.png" />
						<view class="p">微信</view>
					</view>
					<view class="h6">未绑定</view>
				</view>
				<em></em>
			</view>
		</view>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import {
		pushPathMixin
	} from '../../util/mixin.js'
	export default {
		mixins: [pushPathMixin],
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.paymentBind {
		width: 100%;
		height: 100vh;
		background-color: #FAF9F9;

		.lists {
			.li {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-between;
				width: 720rpx;
				height: 100rpx;
				box-sizing: border-box;
				margin: 0 15rpx;
				border-bottom: 1px solid #ECEEF5;
				padding: 0 40rpx 0 24rpx;

				&:last-child {
					border: none
				}

				.box {
					width: 600rpx;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					align-items: center;

					>view {
						display: flex;
						flex-wrap: nowrap;
						align-items: center;
					}

					image {
						display: block;
						width: 37rpx;
						height: 37rpx;
						margin-right: 37rpx;
					}

					.p {
						font-size: 28rpx;
						font-weight: 600;
						color: rgba(51, 51, 51, 1);
					}

					.h6 {
						color: #9BA0AD;
						font-size: 26rpx;
					}
				}

				em {
					display: block;
					width: 27rpx;
					height: 29rpx;
					background: url(../../static/image/mine/arrow.png) no-repeat;
					background-size: 100% 100%;
				}
			}
		}
	}
</style>
