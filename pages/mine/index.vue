<template>
	<view class="mine" :style="{'margin-top':$store.state.statusBarHeight}">
		<view class="content">
			<view class="header">
				<view class="top">
					<image class="userSrc" :src="user.avatar  ? user.avatar : userSrc" alt />
					<view class="center">
						<view class="name">
							<view class="h1" v-if="user.nickName">{{ user.nickName }}</view>
							<image v-if="user.level == 0" class="rank" src="../../static/image/mine/level0.png" alt />
							<image v-if="user.level == 1" class="rank" src="../../static/image/mine/level1.png" alt />
							<image v-if="user.level == 2" class="rank" src="../../static/image/mine/level2.png" alt />
							<image v-if="user.level == 3" class="rank" src="../../static/image/mine/level3.png" alt />
							<image v-if="user.level == 4" class="rank" src="../../static/image/mine/level4.png" alt />
						</view>
						<view class="info">
							<image v-if="user.primaryAuthStatus === 1" src="../../static/image/mine/certification.png">
							<image v-else src="../../static/image/mine/noCertification.png">
							<view class="h6">{{user.primaryAuthStatus === 1 ? '已认证' : '未认证'}}</view>
							<image v-if="user.authPayStatus === 0 " src="../../static/image/mine/activation.png">
							<image v-else src="../../static/image/mine/noactivation.png" style="margin-left:0.13rpx">
							<view class="h6">{{user.authPayStatus === 0 ? '已激活' : '未激活' }}</view>
						</view>
					</view>
					<view class="right" @click="pushPath('/pages/mine/messageCenter')">
						<image src="../../static/image/mine/message.png" alt="">
							<text style="color:#333333;">消息</text>
					</view>
				</view>
				<view class="card">
					<image src="../../static/image/mine/cardCore.png" alt="">
						<view class="balance">
							<view class="h1">余额(PBM)</view>
							<view class="h1">{{user.sweets}}</view>
						</view>
				</view>
				<view class="bot">
					<view class="li">
						<view>
							<text>{{ user.equipActive }}</text>
							<view class="p">个人算力</view>
						</view>
					</view>
					<view class="li">
						<view>
							<text>{{ user.teamActive }}</text>
							<view class="p">个人矿力</view>
						</view>
					</view>
					<view class="li">
						<view>
							<text>{{ user.directValidNum }}</text>
							<view class="p">直推人数</view>
						</view>
					</view>
				</view>
			</view>
			<view class="inviteFriends" @click="pushPath('/pages/mine/inviteFriends')">
				<view class="message">
					<view class="h1"><text>邀请好友</text>注册</view>
					<view class="h2">邀请好友注册即可享受分红</view>
				</view>
				<image src="../../static/image/mine/gift.png" alt="">
			</view>
			<view class="lists">
				<view class="li" @click="pushPath('/pages/mine/team')">
					<view class="box">
						<image src="../../static/image/mine/team.png" alt srcset />
						<view class="p">我的团队</view>
					</view>
					<em></em>
				</view>
				<view class="li" @click="pushPath('/pages/mine/taskCenter')">
					<view class="box">
						<image src="../../static/image/mine/taskCenter.png" alt srcset />
						<view class="p">任务中心</view>
					</view>
					<em></em>
				</view>
				<view class="li">
					<!-- <view class="li" @click="pushPath('/history/0')"> -->
					<view class="box">
						<image src="../../static/image/mine/order.png" alt srcset />
						<view class="p" style="margin-right:300rpx;">交易订单</view>
						<view class="h6">立即查看</view>
					</view>
					<em></em>
				</view>

				<view class="li" @click="pushPath('/pages/mine/identification')">
					<view class="box">
						<image src="../../static/image/mine/icon3.png" alt srcset />
						<view class="p">实名认证</view>
					</view>
					<em></em>
				</view>
				<view class="li" @click="pushPath('/pages/mine/PaymentBind')">
					<view class="box">
						<image src="../../static/image/mine/payMentBind.png" alt srcset />
						<view class="p">支付绑定</view>
					</view>
					<em></em>
				</view>
				<!-- <view>
		              <view  class="box">
		                <img src="../../static/image/mine/icon4.png" alt srcset />
		                <view class="p">我的账单</view>
		              </view >
		              <em></em>
		            </view> -->
				<view class="li" @click="pushPath('/pages/mine/onlineMessage')">
					<view class="box">
						<image src="../../static/image/mine/icon5.png" alt srcset />
						<view class="p" style="margin-right:260rpx;">在线留言</view>
						<view class="h6">解决你的问题</view>
					</view>
					<em></em>
				</view>
				<view class="li" @click="pushPath('/pages/mine/systemSetup')">
					<view class="box">
						<image src="../../static/image/mine/set.png" alt srcset />
						<view class="p">设置</view>
					</view>
					<em></em>
				</view>
				<view class="li" @click="logOut">
					<view class="box">
						<image src="../../static/image/mine/logout.png" alt srcset />
						<view class="p">退出</view>
					</view>
					<em></em>
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
				user: '',
				userSrc: require("../../static/image/mine/avatar.png"),
				userInfo: ''
			}
		},
		onLoad() {

		},
		created() {
			this.userInfo = uni.getStorageSync('userInfo')
		},
		mounted() {
			this.getCustInfo();
		},
		methods: {
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
			logOut() {
				uni.navigateTo({
					url: '/pages/account/login'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.mine {
		background: #F7F7F7;
	}

	.content {
		width: 100%;
		height: auto;

		.header {
			height: 500rpx;
			background: rgba(255, 255, 255, 1);
			box-sizing: border-box;
			padding: 40rpx 30rpx 0;
			margin-bottom: 20rpx;

			.top {
				display: flex;
				flex-wrap: nowrap;
				width: 100%;

				.name,
				.info {
					display: flex;
				}

				.info {
					margin-top: 20rpx;
					margin-left: 20rpx;
					align-items: center;

					image {
						width: 23rpx;
						height: 27rpx;
						margin-right: 13rpx;
						margin-top: 5rpx;
					}

					.h6 {
						font-size: 20rpx;
						font-weight: 400;
						margin-right: 13rpx;
					}
				}

				.right {
					width: 112rpx;
					height: 46rpx;
					background: rgba(255, 255, 255, 1);
					box-shadow: 0px 3rpx 13rpx 0rpx rgba(72, 74, 77, 0.22);
					border-radius: 23rpx;
					padding: 0 16rpx;
					box-sizing: border-box;
					display: flex;
					align-items: center;

					image {
						width: 24rpx;
						height: 28rpx;
						margin-right: 9rpx;
					}

					text {
						font-size: 22rpx;
						font-weight: 400;
					}
				}

				.info {
					width: 480rpx;
					color: #333333;
				}

				.userSrc {
					display: block;
					width: 61rpx;
					height: 61rpx;
					border-radius: 50%;
				}

				.h1 {
					font-size: 30rpx;
					font-weight: 800;
					color: rgba(51, 51, 51, 1);
					margin: 0 8rpx 0 20rpx;
				}

				.rank {
					display: block;
					width: 42rpx;
					height: 50rpx;
				}
			}

			.card {
				width: 678rpx;
				height: 180rpx;
				margin: 18rpx auto 0;
				background: url('../../static/image/mine/balance_bg.png');
				background-size: 100% 100%;
				padding: 53rpx 0 51rpx 39rpx;
				box-sizing: border-box;
				display: flex;

				image {
					width: 93rpx;
					height: 76rpx;
					margin-right: 28rpx;
				}

				.balance {
					.h1 {
						&:nth-child(1) {
							font-size: 26rpx;
							font-weight: 500;
							color: rgba(255, 254, 254, 1);
							margin-bottom: 5rpx;
						}

						&:nth-child(2) {
							color: #FFFEFE;
							font-size: 38rpx;
						}
					}
				}
			}

			.bot {
				width: 100%;
				height: 142rpx;
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-between;

				.li {
					flex: 1;
					display: flex;
					flex-wrap: nowrap;
					align-items: center;
					text-align: center;

					view {
						width: 100%;
					}

					image {
						display: block;
						width: 42rpx;
						height: 42rpx;
						margin-right: 14rpx;
					}

					.p {
						font-size: 24rpx;
						font-weight: bold;
						color: rgba(102, 102, 102, 1);
						margin-top: 20rpx;
					}

					text {
						display: block;
						font-size: 28rpx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
					}
				}
			}
		}

		.inviteFriends {
			display: flex;
			width: 750rpx;
			height: 159rpx;
			background: rgba(255, 255, 255, 1);
			justify-content: space-between;
			margin-bottom: 20rpx;

			.message {
				margin-top: 44rpx;
				margin-left: 70rpx;

				.h1 {
					color: #010217;
					font-weight: bold;

					text {
						color: #FF9322;
						font-size: 38rpx;
						margin-right: 5rpx;
					}
				}

				.h2 {
					color: #9FA4B2;
					margin-top: 10rpx;
					font-size: 24rpx;
					font-weight: bold;
				}
			}

			image {
				width: 174rpx;
				height: 139rpx;
				margin-right: 47rpx;
				margin-top: 3rpx;
			}
		}

		.lists {
			.li {
				display: flex;
				flex-wrap: nowrap;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				height: 100rpx;
				background: rgba(255, 255, 255, 1);
				box-sizing: border-box;
				padding: 0 34rpx 0 65rpx;

				&:nth-child(2) {
					margin-bottom: 20rpx;
				}

				&:last-child {
					margin-bottom: 50rpx;
				}

				.box {
					display: flex;
					flex-wrap: nowrap;
					align-items: center;

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
