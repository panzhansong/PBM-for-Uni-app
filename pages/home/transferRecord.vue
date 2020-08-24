<template>
	<view class="transferRecord">
		<bar title="转帐记录" @leftClick="goBack" ></bar>
		<view class="content">
			<view class="ul">
				<view v-for="(item,index) in list" :key="index" class="li">
					<view>
						<view class="name">{{item.remark}}</view>
						<view class="amount">{{item.num}}PBM</view>
					</view>
					<view>
						<view class="time">{{item.createTime | formatDate}}</view>
						<view class="status">{{item.status === 1 ? '转账成功' : '转账失败'}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue';
	import { pushPathMixin} from '../../util/mixin.js'
	export default {
		mixins:[pushPathMixin],
		data() {
			return {
				user: '',
				list: [{}]
			}
		},
		filters: {
			formatDate(time) {
				const date = new Date(time);
				const y = date.getFullYear();
				const m = date.getMonth() + 1;
				const d = date.getDate();
				const h = date.getHours();
				const mm = date.getMinutes();
				const s = date.getSeconds();
				return y + '-' + m + '-' + d + ' ' + h + ':' + mm + ':' + s;
			}
		},
		components: {
			bar
		}
	}
</script>

<style lang="less" scoped>
	.content {
		color: #333;
		position: relative;
		top: 0;
		padding: 23rpx 50rpx 0 40rpx;
		box-sizing: border-box;

		.ul {
			.li {
				margin-bottom: 50rpx;

				>view {
					display: flex;
					justify-content: space-between;
					align-items: center;

					&:first-child {
						margin-bottom: 10rpx;
					}

					.name {
						font-size: 28rpx;
						font-weight: bold;
						color: rgba(51, 51, 51, 1)
					}

					.amount {
						font-size: 30rpx;
						color: rgba(51, 51, 51, 1);
						font-weight: bold;
					}

					.time {
						font-size: 22rpx;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
					}

					.status {
						font-size: 20rpx;
						font-weight: 500;
						color: rgba(243, 76, 55, 1);
					}
				}
			}
		}
	}
</style>
