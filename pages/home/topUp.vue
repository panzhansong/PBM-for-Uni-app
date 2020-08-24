<template>
	<view class="topUp">
		<bar title="冲币" @leftClick="goBack" @rightClick="pushPath('/pages/home/history?type=2')" rightImageUrl="/static/image/home/record.png" />
		<view class="content">
			<view class="title">
				<view class="name">
					<text>{{name}}</text>
				</view>
				<view class="select">
				</view>
			</view>
			<view class="border"></view>
			<view class="myCode">
				<view @click="showTradingImg(imgQr)" class="img">
					<image :src="imgQr" alt />
				</view>
				<view class="btn1">
					<view @click="showTradingImg(imgQr)">保存二维码</view>
				</view>
				<view class="copyUrl">充值地址</view>
				<view class="copy_btn">{{url}}</view>
				<view class="btn2">
					<image src="../../static/image/home/copy.png" alt="">
						<text id="btn_Share" @click="copy">复制地址</text>
				</view>
			</view>
		</view>
		<view class="fonts">
			<view>
				<image src="../../static/image/home/warm.png" alt="" class="warm">
					<text>温馨提示：</text>
			</view>
			<view>1.请勿向上述地址充值任何ERC20-USDT非资产，否则资产将不可找回。</view>
			<view>2.您充值至上述地址后，需要整个网络节点的确认，12次网络确认后到账，12次网络确认后可提币。</view>
			<view>3.您的充值地址不会发生改变，但是为了保证自身数字资产的安全，请每次充值来此复制地址！</view>
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

				name: 'PBM',
				imgQr: '',
				url: '0xU6WCHJRQIYH5YNBLRGJUWK2I0YN5NWWRRH'
			}
		},
		methods: {
			showTradingImg() {},
			copy() {}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.topUp {
		background: #f4f4f6;
		height: 100vh;
	}

	.content {
		width: 671rpx;
		margin: 25rpx auto;
		height: 826rpx;
		background: #fff;
		box-shadow: 0 3rpx 6rpx 0 hsla(0, 0%, 58%, .1);

		.title {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 100rpx;

			.name {
				margin-left: 89rpx;
				font-size: 28rpx;
				font-weight: bold;
				color: rgba(51, 51, 51, 1);
			}
		}

		.border {
			width: 572rpx;
			height: 1px;
			background: rgba(238, 238, 238, 1);
			margin: 0 auto;
			position: relative;

			&::after,
			&::before {
				position: absolute;
				top: -20rpx;
				width: 38rpx;
				height: 38rpx;
				background: rgba(244, 244, 246, 1);
				border-radius: 50%;
				content: "";
			}

			&::before {
				left: -70rpx;
			}

			&::after {
				right: -70rpx;
			}
		}
	}

	.myCode {
		text-align: center;

		.img {
			width: 260rpx;
			height: 260rpx;
			margin: 92rpx auto 45rpx;
			border: 1rpx solid #ccc;

			image {
				width: 260rpx;
				height: 260rpx;
				display: block;
			}
		}

		.btn1 {
			view {
				width: 239rpx;
				height: 58rpx;
				margin: 0 auto 60rpx;
				border: 2rpx solid rgba(66, 147, 243, 1);
				font-size: 24rpx;
				font-weight: bold;
				color: #4293F3;
				line-height: 58rpx;
			}
		}

		.btn2 {
			display: flex;
			width: 150rpx;
			margin: 0 auto;

			image {
				width: 32rpx;
				height: 32rpx;
				margin-right: 23rpx;
			}

			text {
				font-size: 24rpx;
				font-weight: 500;
				color: rgba(78, 138, 242, 1);
			}
		}

		.copyUrl {
			font-size: 26rpx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1)
		}

		.copy_btn {
			margin: 24rpx 0;
			font-size: 24rpx;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	.fonts {
		width: 660rpx;
		margin: 0 auto;
		font-size: 20rpx;
		font-weight: bold;
		color: rgba(102, 102, 102, 1);
		line-height: 34rpx;

		view {

			&:first-child {
				display: flex;
				margin-bottom: 25rpx;
			}

			text {}

			.warm {
				width: 32rpx;
				height: 32rpx;
				margin-right: 23rpx;
			}
		}
	}
</style>
