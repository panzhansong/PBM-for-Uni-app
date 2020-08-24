<template>
	<view class="extract">
		<bar 
			@leftClick="goBack"
			@rightClick="pushPath('/pages/home/history?type=1')"
			rightImageUrl="/static/image/home/record.png"
		/>
		<view class="content">
			<view class="titles">
				<view>提币</view>
			</view>
			<view class="select">
				<view @click="handleClickSelect">{{defaultCategory}}</view>
			</view>
			<view class="userInfo">
				<view>
					<view>可用</view>
					<view>{{user.sweets || 0}}</view>
				</view>
				<view>
					<view>折合（CNY）</view>
					<view>{{user.sweets * user.currentPrice || 0}}</view>
				</view>
			</view>
			<view class="bg">

			</view>
			<view class="selectCategory">
				<view class="select_1">选择提币方式</view>
				<view class="category">
					<view :class="defaultCategory === 'PBM' ? 'active' : ''">PBM</view>
					<view :class="defaultCategory === 'USDT' ? 'active' : ''" @click="exchangePopups = true">USDT</view>
				</view>
			</view>
			<view class="extract_form">
				<view class="li">
					<view class="title">提币地址（ERC20）</view>
					<input type="text" v-model="qrCode" placeholder="输入或长按黏贴地址" style="width:100%;" />
				</view>
				<view class="li flex">
					<view class="title">提币数量</view>
					<input type="number" v-model="num" placeholder="最小提币数量5" />
					<text @click="handleClickGetAll">全部</text>
				</view>
				<view class="li flex">
					<view class="title">手续费</view>
					<input type="text" v-model="poundage" disabled>
					<text>PBM</text>
				</view>
			</view>
			<view class="extract_1" style="margin-top: 30rpx">
				<view>
					<text>到账数量</text>
					<text>{{num - poundage}} PBM</text>
				</view>
				<view>
					<text>扣除资产</text>
					<text>{{num || 0}} PBM</text>
				</view>
			</view>
			<view class="main_bgs" @click="usdtTransfer">
				提币
			</view>
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
				defaultCategory: 'PBM',
				user: '',
				qrCode: '',
				num: '',
			}
		},
		methods: {
			handleClickSelect() {
				//
			},
			handleClickGetAll() {

			},
			usdtTransfer() {

			}
		},
		components: {
			bar
		},
			
		computed:{
		   poundage(){
		      let poundage = '';
		      if(this.num){
		        poundage = Number(this.num * this.user.serviceFee).toFixed(2)
		      }
		      return poundage
		    },
		  }
	}
</script>

<style lang="less" scoped>
	.titles {
		margin: 36rpx 0 0 25rpx;

		view {
			color: #000;
			font-size: 50rpx;
			font-weight: bold;
		}
	}

	.select {
		width: 710rpx;
		height: 80rpx;
		background: rgba(248, 247, 252, 1);
		border-radius: 6rpx;
		margin: 30rpx auto 20rpx;
		position: relative;
		text-align: center;
		line-height: 80rpx;
		font-size: 30rpx;
		cursor: pointer;

		&::after {
			content: "";
			position: absolute;
			width: 21rpx;
			height: 12rpx;
			background: url('../../static/image/home/down.png');
			background-size: 100% 100%;
			top: 30rpx;
			right: 290rpx;
		}
	}

	.bg {
		width: 100%;
		height: 16rpx;
		background: rgba(249, 250, 252, 1);
	}

	.userInfo {
		display: flex;
		padding: 0 20rpx;

		>view {
			flex: 1;
			text-align: center;

			view {
				font-size: 26rpx;

				&:nth-child(1) {
					color: #999999;
				}

				&:nth-child(2) {
					margin-top: 20rpx;
					color: #1C2124;
					font-weight: bold;
					margin-bottom: 40rpx;
				}
			}
		}
	}

	.selectCategory {
		padding: 40rpx 20rpx 0;

		.select_1 {
			color: #13161A;
			font-weight: bold;
			font-size: 26rpx;
			margin-bottom: 30rpx;
		}

		.category {
			display: flex;

			>view {
				width: 168rpx;
				height: 63rpx;
				border: 1rpx solid transparent;
				background: rgba(238, 238, 238, 1);
				border-radius: 6rpx;
				color: #14171E;
				line-height: 63rpx;
				text-align: center;
				margin-right: 12rpx;
				font-size: 28rpx;
				font-weight: bold;
				cursor: pointer;
				&.active {
					color: #3A76E2;
					border: 1rpx solid rgba(103, 144, 249, 1);
					background: #fff;
				}
			}
		}
	}

	.extract_form {
		margin: 56rpx 27rpx 0;
		.li {
			padding: 20rpx 0;
			border-bottom: 1px solid#E5E5E5;
			position: relative;
			.title {
				color: #333333;
				font-size: 26rpx;
				margin-bottom: 30rpx;
				font-weight: bold;
			}
			input {
				font-size: 28rpx;
				background: transparent;
				border: 0;
				color: #15191B;
			}
			/* WebKit browsers */
			input::-webkit-input-placeholder {
				color: #999999;
			}
			/* Mozilla Firefox 4 to 18 */
			input:-moz-placeholder {
				color: #999999;
			}

			/* Mozilla Firefox 19+ */
			input::-moz-placeholder {
				color: #999999;
			}

			/* Internet Explorer 10+ */
			input:-ms-input-placeholder {
				color: #999999;
			}
			
			text{
				position: absolute;
				top:90rpx;
				right: 0;
				color: #15181F;
				font-size: 28rpx;
			}
		}
	}
	.extract_1{
	  padding: 0 20rpx;
	  view{
	    color:#666666;
	    display: flex;
	    justify-content: space-between;
	    align-items: center;
	    margin-bottom: 50rpx;
	    text{
			font-size: 26rpx;
			&:last-child{
				color:#333333;
				font-weight: bold;
			}
	    }
	  }
	}
	.main_bgs {
	  width: 690rpx;
	  margin:0 auto 50rpx;
	  background:rgba(103,144,249,1);
	  font-size: 32rpx;
	  border-radius: 10rpx;
	  height: 100rpx;
	  line-height: 100rpx;
	  text-align: center;
	  color:#fff;
	}
</style>
