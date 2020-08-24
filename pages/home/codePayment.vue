<template>
	<view class="codePayment">
		<bar @leftClick="reLaunch('/pages/home/index')" />
		<view>扫码付款</view>
		<view class="wrap">
			<view>请核对后进行填写</view>
			<view class="inputs">
				<text>付款金额</text>
				<input type="text" v-model.trim="money" placeholder="付款金额不低于10" />
			</view>
			<view class="dsc">扣除{{PBM}}PBM（{{user.payServiceFee * 100}}%手续费）</view>
			<view class="inputs">
				<text>验证码</text>
				<view class="row">
					<input style="width: 50%;" type="text" v-model="code" placeholder="请输入手机验证码！" />
					<text v-if="!sendDisabled" @click.stop="getSmsCode">获取验证码</text>
					<text v-if="sendDisabled">{{time}}s</text>
				</view>
			</view>
			<view class="btn" @click="checkPayScanStatus">确定付款</view>
		</view>
	</view>
</template>

<script>
	import bar from '../../components/bar.vue'
	import {
		pushPathMixin
	} from '../../util/mixin.js';
	export default {
		mixins: [pushPathMixin],
		data() {
			return {
				code: '',
				user: '',
				userInfo: uni.getStorageSync('userInfo'),
				sendDisabled: false,
				time: 60,
				money: ''
			}
		},
		create() {
			const pages = getCurrentPages();
			const {
				code
			} = pages[pages.length - 1].options;
			this.code = code;

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
				});
			},
			getSmsCode() {
				//
			},
			checkPayScanStatus() {
				//
			},
			scannPay(){
				//
			}
		},
		components: {
			bar
		},
		computed: {
			PBM() {
				let PBM = 0
				if (this.money) {
					PBM = Number((this.money / this.user.currentPrice) * (1 + this.user.payServiceFee)).toFixed(2)
				}
				return PBM
			}
		}
	}
</script>

<style lang="less" scoped>
	.codePayment {}
</style>
