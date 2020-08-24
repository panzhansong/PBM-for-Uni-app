<template>
	<view class="home">
		<!-- <view class="statusBarHeight" :style="{'height':statusBarHeight}"></view> -->
		<view class="top">
			<image src="../../static/image/home/kv.png" mode=""></image>
			<view class="scan" @click="scan" :style="{'margin-top':$store.state.statusBarHeight}"></view>
		</view>
		<view class="content">
			<view class="total">
				<view class="left">
					<view @click="openEye" class="p">
						总资产金额(pbm)
						<image :src="flag ? require('../../static/image/home/eye.png') : require('../../static/image/home/eyes.png') "
						 alt srcset />
					</view>
					<view v-if="flag" class="h1">{{user.sweets || 0}}</view>
					<view v-if="!flag" class="h1">*************</view>
					<view v-if="flag" class="span">≈&nbsp;{{user.sweets * user.currentPrice || 0}}&nbsp;CNY</view>
					<view v-if="!flag" class="span">******CNY</view>
				</view>
				<view class="transfer" @click="pushPath('/pages/home/transfer')"></view>
			</view>
			<view class="nav">
				<view>
					<!-- <li @click="pushPath('/pages/home/snapup')"> -->
					<image src="../../static/image/home/qg.png" alt srcset />
					<text>抢购</text>
				</view>
				<view @click="pushPath('/pages/home/topUp')">
					<image src="../../static/image/home/cb.png" alt srcset />
					<text>充币</text>
				</view>
				<view @click="pushPath('/pages/home/extract')">
					<image src="../../static/image/home/tb.png" alt srcset />
					<text>提币</text>
				</view>
				<view>
					<!-- <li @click="pushPath('/pages/home/PBMStore')"> -->
					<image src="../../static/image/home/sc.png" alt srcset />
					<text>PBM商城</text>
				</view>
			</view>
			<view class="banner">
				<view class="ul">
					<view>
						<image src="../../static/image/home/qkcx.png" mode=""></image>
					</view>
					<view>
						<image src="../../static/image/home/znhy.png" mode=""></image>
					</view>
				</view>
				<view class="pbmZf">
					<image src="../../static/image/home/pbmZ.png" mode=""></image>
				</view>
			</view>
			<view class="lists">
				<view>
					<text>名称</text>
					<text>最新价</text>
					<text>跌涨幅</text>
				</view>
				<view v-for="(item,index) in markets" :key="index">
					<text>
						{{item.code}}
					</text>
					<text>{{item.price}}</text>
					<text>
						<text class="btn" :style="item.chg > 0 ? 'background: #03AD8F;' : 'background: #D14B64;'">{{item.chg}}%</text>
					</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	import {
		pushPathMixin,
		getSystemInfoMixin
	} from '../../util/mixin.js';
	export default {
		mixins: [pushPathMixin, getSystemInfoMixin],
		data() {
			return {
				statusBarHeight: 0,
				flag: true,
				user: '',
				userInfo: '',
				markets: []
			}
		},
		onLoad() {

		},
		created() {
			this.userInfo = uni.getStorageSync('userInfo');
		},
		mounted() {
			this.getCustInfo();
			this.getPriceList();
		},
		methods: {
			openEye() {
				this.flag = !this.flag;
			},
			// 获取个人信息
			getCustInfo() {
				const {
					sign
				} = this.encryption({},
					this.userInfo.userId,
					this.userInfo.tokenId,
					this.userInfo.appKey
				);
				this.fetch.post('/api/cust/getCustInfo', {}, '', sign).then((res) => {
					this.user = res;
					this.CNY = (this.user.sweets * this.user.currentPrice).toFixed(2);
				});
			},
			getPriceList() {
				this.fetch.post('/api/anon/basic/getHomePriceList', {}, '', '').then((res) => {
					this.markets = res.list;
				})
			},
			scan() {
				const _this = this;
				uni.scanCode({
					success: function(res) {
						_this.pushPath(`/pages/home/codePayment?code=${res.result}`)
					}
				})
			}
		},
		onPullDownRefresh() {
			console.log('refresh');
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		}
	}
</script>

<style lang="less" scoped>
	.home {
		.statusBarHeight {
			background-color: transparent;
		}

		.top {
			width: 100%;
			position: relative;

			image {
				width: 100%;
				height: 392rpx;
			}

			.scan {
				position: absolute;
				overflow: hidden;
				width: 36rpx;
				height: 34rpx;
				background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAiCAYAAAA3WXuFAAABVklEQVRYR+2YsS5EQRSGv78n0RAKSt5ht7CCeAGvoLQ06yFUaD2JUBCh1ItuFSQSkdD/MjI32ay95u61xWxyp7xz/jP//Gfm3DlHtleBW2CBv8erpKWEzchp2y/AYgL7BrRkuwucVljoWdJKBbtfJrb7wHIF7GEgtA+cReML4KME+Clpr4LTUYTOgdkS7BywE+e6w4Taku7rLFoXY7sF3JUR6ki6qeu8Ds72OnDdECpTbyoUOgBO4g42JBXxrHMkxsbY3gSuIrAXblk4VLuAQj6S9DS2138AbIeEHEgZeAgkshoNoVQ4GoWSCsW/fTjhOQyFa58LmR9BsiTUiUkpj5DlwGKQQ3PtUxFpFEoqZHseKMqbR0lfKdAk523PAGvRZz/koR5wHD9sSyoeS5Nct9SX7S3gMhocDZdBTdUxFY/8wVI6u5BlV0pn0WzIrh2TS8PqHWh/AwgQ0vG+1W/LAAAAAElFTkSuQmCC) no-repeat;
				background-size: 100% 100%;
				right: 40rpx;
				top: 40rpx;
			}
		}

		.content {
			.total {
				position: relative;
				top: -94rpx;
				width: 710rpx;
				height: 181rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0px 2rpx 18rpx 0px rgba(132, 132, 132, 0.17);
				overflow: hidden;
				box-sizing: border-box;
				padding: 30rpx 50rpx 30rpx 77rpx;
				margin: 0 auto;
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-between;

				.left {
					.p {
						font-size: 24rpx;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
						display: flex;
						align-items: center;
						margin-bottom: 25rpx;

						image {
							display: block;
							width: 40rpx;
							height: 20rpx;
							margin-left: 25rpx;
						}
					}

					.h1 {
						font-size: 40rpx;
						font-weight: bold;
						color: rgba(58, 118, 226, 1);
					}

					>.span {
						display: block;
						width: 100%;
						font-size: 28rpx;
						font-weight: 500;
						color: #666;
						text-align: right;
					}
				}

				.transfer {
					display: block;
					width: 134rpx;
					height: 52rpx;
					background: url(../../static/image/home/transfer.png) no-repeat;
					background-size: 100% 100%;
				}
			}

			.nav {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-around;
				position: relative;
				top: -40rpx;

				>view {
					text-align: center;

					image {
						display: block;
						width: 50rpx;
						height: 50rpx;
						margin: 0 auto;
					}

					text {
						display: block;
						font-size: 24rpx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						margin-top: 35rpx;
					}
				}
			}

			.banner {
				width: 100%;
				height: 371rpx;
				background: #f7f6fb;
				box-sizing: border-box;
				padding: 22rpx 0;

				.ul {
					width: 100%;
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;

					>view {
						image {
							width: 370rpx;
							height: 164rpx;
							display: block;
						}
					}
				}

				.pbmZf {
					image {
						width: 100%;
						height: 152rpx;
						display: block;
						margin-top: 10rpx;
					}
				}
			}

			.lists {
				width: 100%;
				height: auto;
				box-sizing: border-box;
				padding: 10rpx 20rpx;
				box-sizing: border-box;

				view {
					display: flex;
					flex-wrap: nowrap;
					justify-content: space-between;
					align-items: center;
					height: 110rpx;
					box-sizing: border-box;
					border-bottom: 1rpx solid rgba(229, 229, 229, 0.54);

					&:first-child {
						border-bottom: none;
						height: 60rpx;

						text {
							font-size: 24rpx;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
						}
					}

					text {
						display: block;
						width: 33%;
						text-align: center;
						font-size: 26rpx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);

						&:last-child {
							font-size: 24rpx;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}

						text {
							display: inline-block;

							&.btn {
								display: block;
								width: 132rpx;
								height: 46rpx;
								text-align: center;
								line-height: 46rpx;
								border-radius: 4rpx;
								font-size: 24rpx;
								font-weight: 500;
								color: rgba(255, 255, 255, 1);
								margin: 0 auto;
							}
						}
					}
				}

			}
		}
	}
</style>
