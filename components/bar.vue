<template>
	<view>
		<view :style="{'height':titleBarHeight}"></view>
		<view class="header" :style="{'height':titleBarHeight,'padding-top':statusBarHeight,'background-color': backgroundColor}">
			<view class="header-main">
				<view class="header-back" @click="leftClick" >
					<image :src="leftImageUrl" :style="leftImageStyle" v-if="isShowBack === true"></image>
				</view>
				<view class="header-title" :style="{'color':titleFontColor}">{{title}}</view>
				<view class="header-right" @click="rightClick" :style="rightTitleStyle">
					<image :src="rightImageUrl" v-if="rightImageUrl"></image>
					<text v-if="rightTitle">{{rightTitle}}</text>
				</view>	
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		props: {
			isShowBack: {
				type: [Boolean, String],
				default: true
			},
			leftImageUrl: {
				type: String,
				default: '/static/image/account/leftBack.png'
			},
			leftImageStyle: {
				type: Object,
				default: function() {
					return {
						width: '19rpx',
						height: '35rpx',
						color: 'rgba(51, 51, 51, 1)'
					}
				}
			},
			title: {
				type: String,
				default: ''
			},
			titleFontColor: {
				type: String,
				default: 'rgba(51, 51, 51, 1)'
			},
			backgroundColor: {
				type: String,
				default: '#fff'
			},
			rightImageUrl: {
				type: String,
				default: ''
			},
			rightTitle: {
				type: String,
				default: ''
			},
			rightTitleStyle: {
				type: Object
			}

		},
		data() {
			return {
				statusBarHeight: 0,
				titleBarHeight: 0,
			}
		},
		created() {
			var that = this;
			uni.getSystemInfo({
				success: function(res) {
					if (res.model.indexOf('iPhone') !== -1) {
						that.titleBarHeight = (44 + res.statusBarHeight) + 'px';
					} else {
						that.titleBarHeight = (48 + res.statusBarHeight) + 'px';
					}
					that.statusBarHeight = res.statusBarHeight + 'px';
				},

			})
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			leftClick() {
				this.$emit('leftClick')
			},
			rightClick() {
				this.$emit('rightClick')
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		top: 0;
		position: fixed;
		width: 100%;
		z-index: 100;
		left: 0;
		padding: 0 30rpx;
		box-sizing: border-box;
	}

	.header .header-title {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		font-size: 32rpx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
	.header .header-main{
		position: relative;
		top:0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header-back {
		image {
			display: block;
		}
	}

	.header-right {
		font-size: 24rpx;
		font-weight: 500;
		image {
			width: 35rpx;
			height: 31rpx;
			display: block;
		}
	}
</style>
