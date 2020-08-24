<template>
	<view class="transfer">
		<bar @leftClick="goBack" @rightClick="pushPath('/pages/home/transferRecord')" rightImageUrl="/static/image/home/history.png" />
		<view class="content">
			<view class="h1">转账</view>
			<view class="record">
				<view>
					<view class="h2">账号</view>
					<view>
						<input type="text" v-model="account" placeholder="请输入对方账号" maxlength="11" />
					</view>
				</view>
				<view>
					<view class="h2">数量<text>（扣除手续费 30%）</text></view>
					<view>
						<input type="text" v-model="num" placeholder="最小提币数量5" />
						<text class="text">PBM <text class="border">|</text> <text @click="handleClickGetAll" class="button">全部</text></text>
					</view>
				</view>
			</view>
			<view class="h3">可用 {{user.sweets}}PBM</view>
		</view>
		<view class="saveok" @click="usdtTransfer">
			确认转账
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
				setNav: {
					background: '#fff',
					leftImageUrl: "/static/image/account/leftBack.png",
					imageUrl: true,
					rightImageUrl: '/static/image/home/history.png'
				},
				user: '',
				account: '',
				num: ''
			}
		},
		methods: {
			handleClickGetAll() {

			},
			usdtTransfer() {

			}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.content {
		padding: 0 25rpx;
		margin-top: 36rpx;
		box-sizing: border-box;

		.h1 {
			color: #131521;
			font-size: 50rpx;
			font-weight: bold;
			margin-bottom: 88rpx;

			span {
				font-size: 24rpx;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}

		.record {
			width: 690rpx;
			margin-top: 26rpx;

			>view {
				border-bottom: 1rpx solid rgba(210, 210, 210, 1);
				margin-top: 50rpx;

				&:nth-child(3) {
					border: none;
				}

				.h2 {
					color: #333333;
					font-size: 28rpx;
					margin-bottom: 45rpx;
					font-weight: 500;
				}

				>view {
					display: flex;

					input {
						width: 100%;
						margin-bottom: 40rpx;
						color: #333;
						border: none;
						font-size: 28rpx;
					}

					input::-webkit-input-placeholder {
						font-size: 28rpx;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
					}

					.text {
						display: block;
						width: 240rpx;
						color: #333333;
						font-size: 28rpx;
						font-weight: bold;

						.border {
							margin: 0 15rpx;
						}

						.button {
							cursor: pointer;
						}
					}
				}
			}
		}

		.h3 {
			text-align: right;
			color: #3A76E2;
			margin-top: 25rpx;
			margin-right: 17rpx;
			font-size: 24rpx;
			font-weight: bold;
		}
	}

	.saveok {
		width: 696rpx;
		height: 100rpx;
		background: rgba(103, 144, 249, 1);
		border-radius: 10rpx;
		text-align: center;
		position: fixed;
		bottom: 92rpx;
		left: 27rpx;
		line-height: 100rpx;
		color: #fff;
		font-size: 32rpx;
	}
</style>
