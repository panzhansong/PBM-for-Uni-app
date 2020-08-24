<template>
	<view class="forgetPassword">
		<bar @leftClick="goBack" />
		<view class="logo">
			<image src="../../static/image/account/logo.png" />
			<view class="title">忘记密码</view>
		</view>
		<view class="from">
			<view class="inputs phone">
				<input type="text" maxlength="11" v-model.trim="phone" placeholder="请输入手机号" placeholder-style="color:#999"/>
			</view>
			<view class="inputs">
				<view class="pass">
					<input type="password" v-model.trim="password" placeholder="请输入短信验证码" placeholder-style="color:#999"/>
					<view @click="getImageCode">
					    <img :src="image"  />
					</view>
				</view>
			</view>
			<view class="inputs" style="margin-bottom: 11rpx;">
				<view class="pass">
					<input type="password" v-model.trim="password" placeholder="请输入登录密码" placeholder-style="color:#999"/>
				</view>
			</view>
			<view @click="pushPath('/pages/account/forgetPasswod')" class="forgetPassword">忘记密码?</view>
		</view>
		<button @click="login()">登录</button>
		<view class="register">
			<view @click="pushPath('/pages/account/register')"><text>还没有账号？</text>立即注册</view>
		</view>
	</view>
</template>

<script>
	import { pushPathMixin } from '../../util/mixin.js';
	import bar from '../../components/bar.vue';
	export default {
		mixins: [pushPathMixin],
		data() {
			return {
				phone:'',
				password: '',
				image: ''
			}
		},
		onLoad() {

		},
		methods: {
			login(){
				uni.switchTab({
					url:'/pages/home/index'
				})
			},
			getImageCode() {
				//
			}
		},
		components:{
			bar
		}
	}
</script>

<style lang="less" scoped>
	.forgetPassword{
		box-sizing: border-box;
		padding: 0 90rpx;
		overflow: hidden;
		.logo{
			image{
				display: block;
				width: 121rpx;
				height: 64rpx;
				margin-top: 112rpx;
				margin-bottom: 50rpx;
			}
			.title{
				font-size:38rpx;
				font-weight:bold;
				color:rgba(51,51,51,1);
				line-height:73rpx;
			}
		}
		.inputs{
			width: 100%;
			height: 68rpx;
			line-height: 68rpx;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			margin: 39rpx auto;
			border-bottom: 1rpx solid #f5f5f5;
			.pass{
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			input{
				font-size: 24rpx;
				background: none;
				border: none;
				-webkit-box-sizing: border-box;
				box-sizing: border-box;
				font-weight: 700;
				color: #333;	
			}
		}
		.forgetPassword{
			text-align: right;
			font-size:22rpx;
			font-weight:bold;
			color:rgba(153,153,153,1);
			line-height:70rpx;
			opacity:0.7;
			margin-bottom: 65rpx;
			cursor: pointer;
		}
		button{
			width:566rpx;
			height:83rpx;
			background:rgba(74,134,240,1);
			border-radius:42rpx;
			font-size:30rpx;
			font-weight:bold;
			color:rgba(255,255,255,1);
			line-height:82rpx;
			margin-bottom: 45rpx;
		}
		.register{
			font-size:22rpx;
			font-weight:bold;
			color:#4A86F0;
			line-height:70rpx;
			text-align: center;
			cursor: pointer;
			text{
				color:rgba(102,102,102,1);
			}
		}
	}
</style>
