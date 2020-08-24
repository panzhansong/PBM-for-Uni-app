<!-- 矿机商城 -->
<template>
	<view class="myMill">
		<bar @leftClick="goBack" title="矿机商城" rightTitle="一键收矿" @rightClick="akKeyToReceiveMine" :rightTitleStyle="rightTitleStyle"></bar>
		<view class="content">
			<view class="nav">
				<view class="active">运行中</view>
				<view class="active">已过期</view>
			</view>
			<view class="store" v-if="list.length">
				<view class="li" v-for="(item,i) in list" :key="i">
					<view class="mach">
						<image v-if="item.equipId == 1" src="../../static/image/shoppingMall/image00.png" alt srcset />
						<image v-if="item.equipId == 2" src="../../static/image/shoppingMall/image01.png" alt srcset />
						<image v-if="item.equipId == 3" src="../../static/image/shoppingMall/image02.png" alt srcset />
						<image v-if="item.equipId == 4" src="../../static/image/shoppingMall/image03.png" alt srcset />
						<image v-if="item.equipId == 5" src="../../static/image/shoppingMall/image04.png" alt srcset />
						<image v-if="item.equipId == 6" src="../../static/image/shoppingMall/image05.png" alt srcset />
						<view class="txt">
							<view class="name">
								<view class="category_name">
									{{item.equipName}}
								</view>
								<view class="zuping" @click="rentToHire(item)">
									租聘
								</view>
							</view>
							<view class="ul">
								<view class="lis">
									租金
									<text>{{item.needSweets}}</text>
								</view>
								<view>
									总产
									<text>{{item.totalProfit}}</text>
								</view>
								<view>
									算力
									<text>{{item.equipActive}}</text>
								</view>
								<view>
									运行时长
									<text>{{item.period*24}}(小时)</text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="no_data" v-show="list.length===0">
			<image src="../../static/image/home/nofind.png" alt />
		</view>

	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import {
		pushPathMixin
	} from '../../util/mixin.js';
	export default {
		mixins: [pushPathMixin],
		data() {
			return {

				rightTitleStyle: {
					width: "136rpx",
					height: "47rpx",
					background: "#41D5FF",
					borderRadius: "10rpx",
					color: '#fff',
					lineHeight: '47rpx',
					textAlign: 'center'
				},
				// userInfo: JSON.parse(localStorage.getItem("userInfo")),
				// version: this.$information.VERSION,
				list: [],
				isLoading: false,
				equipId: "",
				exchangePopups: false,
				payPwd: "",
				needSweets: ""
			};
		},
		watch: {
			$route(val, oldval) {
				if (val.fullPath.indexOf("?") == -1) {
					this.exchangePopups = false;
				}
			},
		},

		mounted() {
			//this.getMinerList();
		},
		methods: {

			akKeyToReceiveMine() {}
		},
		components: {
			bar
		}
	};
</script>
<style lang='less' scoped>
	.myMill {
		.nav{
			
			
		}
		.store {
			width: 100%;
			height: auto;
			box-sizing: border-box;
			padding: 22rpx 30rpx;
			background: #FAF9F9;

			.li {
				width: 6.9rpx;
				height: 235rpx;
				background: rgba(255, 255, 255, 1);
				box-shadow: 0rpx 11rpx 17rpx 1rpx rgba(1, 0, 2, 0.07);
				border-radius: 10rpx;
				margin-bottom: 22rpx;
				overflow: hidden;

				.mach {
					width: 100%;
					display: flex;

					image {
						width: 236rpx;
						height: 228rpx;
					}

					.txt {
						padding: 37rpx 43rpx 32rpx 32rpx;
						box-sizing: border-box;
						width: 100%;

						.name {
							display: flex;
							justify-content: space-between;
							align-items: center;
							width: 100%;
							margin-bottom: 50rpx;

							.category_name {
								font-weight: bold;
								color: rgba(51, 51, 51, 1);
							}

							.zuping {
								width: 136rpx;
								height: 47rpx;
								background: rgba(65, 213, 255, 1);
								box-shadow: 1rpx 6rpx 8rpx 0rpx rgba(65, 213, 255, 0.47);
								border-radius: 10rpx;
								text-align: center;
								line-height: 47rpx;
							}
						}

						.ul {
							display: flex;
							justify-content: space-between;
							align-items: center;

							.lis {
								height: 48rpx;
								white-space: nowrap;
								font-size: 22rpx;
								font-weight: bold;
								color: #666666;

								text {
									display: block;
									font-size: 22rpx;
									font-weight: 400;
									color: rgba(117, 54, 0, 1);
									margin-top: 15rpx;
								}
							}

						}
					}
				}
			}
		}

		.popup_exchange {
			width: 4.68rpx;
			height: 5.08rpx;
			background: rgba(255, 255, 255, 1);
			border-radius: 0.17rpx 0.17rpx 0.67rpx 0.17rpx;
			padding: 0.24rpx 0.61rpx 0 0.42rpx;
			box-sizing: border-box;

			.img {
				img {
					display: block;
					width: 3.65rpx;
					height: 2.47rpx;
				}
			}

			p {
				margin-top: 0.4rpx;
				color: rgba(51, 51, 51, 1);
				text-align: center;
				font-size: 0.24rpx;
				height: 0.3rpx;
				line-height: 0.3rpx;

				span {
					color: #4D8AF2;
				}
			}

			.button {
				display: flex;
				margin-top: 0.84rpx;
				padding-left: 1.84rpx;
				box-sizing: border-box;

				.ok {
					color: #6790F9;
					margin-right: 0.62rpx;
				}

				.cancel {
					color: #666666;
				}
			}
		}

		.no_data {
			image {
				display: block;
				width: 400rpx;
				margin: 100rpx auto 0;
			}
		}
	}
</style>
