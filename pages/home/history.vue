<template>
	<view class="history">
		<bar title="历史记录" @leftClick="goBack"></bar>
		<view class="content">
			<view class="nav">
				<view :class="type === 1 ? 'active' : ''" @click="change(1)">充值记录</view>
				<view :class="type === 2 ? 'active' : ''" @click="change(2)">提币记录</view>
			</view>

			<view class="ul">
				<view v-for="(item,index) in list" :key="index" class="li">
					<view class="p">充币<text>PBM</text></view>
					<view class="div">
						<view>
							<view>时间</view><view>11:03 06/26</view>
						</view>
						<view>
							<view>状态</view><view>已完成</view>
						</view>
						<view>
							<view>数量</view><view>1772.84</view>
						</view>
					</view>
				</view>
			</view>

			<view class="nofind" v-if="list.length === 0">
				<image src="../../static/image/home/nofind.png" alt="">
			</view>
		</view>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	export default {
		data() {
			return {
				type: 1,
				list: [
					{
						
					}
				]
			}
		},
		onLoad(option) {
			this.type = Number(option.type)
		},
		methods: {
			change(type) {
				this.type = type
				this.list = []
			}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.nav {
		display: flex;
		align-items: center;
		padding: 30rpx 20rpx 20rpx;
		border-bottom: 1rpx solid rgba(220, 220, 220, .33);
		box-sizing: border-box;

		>view {
			font-size: 30rpx;
			color: #666666;
			font-weight: bold;
			cursor: pointer;
			&.active {
				color: #151822;
				font-size: 40rpx;
			}

			&:nth-child(1) {
				width: 200rpx;
			}
		}
	}

	.ul {
		margin: 0 20rpx;
		.li {
			padding: 30rpx 0;
			box-sizing: border-box;
			border-bottom: 1rpx solid rgba(220, 220, 220, .33);
			>.p {
				color: #333333;
				font-weight: bold;
				font-size: 26rpx;
				text {
					display: inline-block;
					margin-left: 13rpx;
				}
			}
			.div {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 30rpx;
				>view {
					&:first-child {
						view {
							text-align: left;
						}

					}
					> view{
						font-size: 24rpx;
						&:first-child{
							color: #999999;
							text-align: center;
							margin-bottom: 5rpx;	
						}
						&:last-child{
							color:#333;
							font-size: 22rpx;
							font-weight: bold;
						}
					}
				}
			}
		}
	}

	.nofind {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 200rpx;

		image {
			width: 364rpx;
			height: 366rpx;
		}
	}
</style>
