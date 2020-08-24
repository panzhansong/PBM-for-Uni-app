<template>
  <view class="register">
	<bar @leftClick="goBack"/>
	<view class="content">
		<view class="logo">
			<image src="../../static/image/account/logo.png" />
			<view class="title">新人注册</view>
		</view>
		<view class="from">
			<view class="inputs phone">
				<input type="text" maxlength="11" v-model.trim="phone" placeholder="请输入手机号" placeholder-style="color:#999"/>
			</view>
			<view class="inputs">
				<view class="pass">
					<input type="password" v-model.trim="password" placeholder="请输入短信验证码" placeholder-style="color:#999"/>
				</view>
			</view>
			<view class="inputs">
				<view class="pass">
					<input type="password" v-model.trim="password" placeholder="请设置登录密码" placeholder-style="color:#999"/>
				</view>
			</view>
			<view class="inputs">
				<view class="pass">
					<input type="password" v-model.trim="password" placeholder="请输入邀请人手机号码" placeholder-style="color:#999"/>
				</view>
			</view>
			<view class="agree">
				<view class="image" @click="flag = !flag">
					<image :src="flag ? require('../../static/image/account/xz.png') : require('../../static/image/account/wxz.png')  " mode=""></image>
				</view>
				<view class="read">
					点击“注册”即表示您接受《服务协议》
				</view>
				
			</view>
		</view>
		<button @click="register">注册</button>
		<view class="register">
			<view @click="pushPath('/pages/account/login')"><text>已有账号？</text>立即登录</view>
		</view>
	</view>
  </view>
</template>

<script>
import { pushPathMixin } from '../../util/mixin.js';
import bar from '../../components/bar.vue';
export default {
  name: "register",
  mixins: [pushPathMixin],
  data() {
    return {
	  setNav:{
	  	background:'#fff',
		leftImageUrl:"/static/image/account/leftBack.png"
	  },	
      phone: "",
      password: "",
      parentPhone: "",
      parentNumberReadonly: false,
      time: 60, // 发送验证码倒计时
      sendDisabled: false,
      code: "",
      uuid: "",
      image: "",
      imageCode: "",
      flag: false,
    };
  },
  created() {
    // if (this.$route.fullPath.indexOf("?") != -1) {
    //   this.goBack();
    // }
  },
  // watch: {
  //   $route(val, oldval) {
  //     if (oldval.fullPath.indexOf("?") != -1) {
  //       this.agreePopup = false;
  //     }
  //   },
  // },
  mounted() {
    //this.getRegisterCode();
  },
  methods: {
    regP() {
      this.flag = !this.flag;
    },
    //图片验证码
    // getRegisterCode() {
    //   this.$ajax(this.$api.getRegisterCode, {}, {}).then((res) => {
    //     if (res.code == 200) {
    //       this.uuid = res.data.uuid;
    //       this.image = res.data.image;
    //     } else {
    //       Toast({ message: res.message, position: "bottom" });
    //     }
    //   });
    // },
    //发送验证码
    getSmsCode() {
      if (!this.$validator.isPhone(this.phone)) {
        Toast({ message: "请填写正确的手机号码！", position: "bottom" });
        return;
      }
      if (this.$validator.isPhone(this.phone)) {
        this.$ajax(
          this.$api.sms,
          {
            mobile: this.phone,
            msgType: "1",
          },
          {}
        ).then((res) => {
          if (res.code == 200) {
            Toast({ message: res.msg, position: "bottom" });
            //倒计时
            let vm = this;
            vm.sendDisabled = true;
            let interval = window.setInterval(function () {
              if (vm.time-- <= 0) {
                vm.time = 60;
                vm.sendDisabled = false;
                window.clearInterval(interval);
              }
            }, 1000);
          } else {
            Toast({ message: res.msg, position: "bottom" });
          }
        });
      } else {
        Toast({ message: "请检查手机号码是否输入正确！", position: "bottom" });
      }
    },
    //注册
    register() {
      // if (!this.$validator.isPhone(this.phone)) {
      //   Toast({ message: "请填写正确的手机号码！", position: "bottom" });
      //   return;
      // }
      // if (!this.code) {
      //   Toast({ message: "请填写短信验证码！", position: "bottom" });
      //   return;
      // }
      // if (!this.$validator.isPassword(this.password)) {
      //   Toast({
      //     message: "请填写6-12位数字或字母组成的登录密码！",
      //     position: "bottom",
      //   });
      //   return;
      // }
      // if (!this.parentPhone) {
      //   Toast({ message: "请输入邀请人手机号码！", position: "bottom" });
      //   return;
      // }
      // if (!this.flag) {
      //   Toast({ message: "请选择同意服务协议！", position: "bottom" });
      //   return;
      // }
      // this.$ajax(
      //   this.$api.register,
      //   {
      //     mobile: this.phone,
      //     msgVerCode: this.code,
      //     password: this.password,
      //     inviteCode: this.parentPhone,
      //   },
      //   {}
      // ).then((res) => {
      //   if (res.code == 200) {
      //     Toast({ message: res.msg, position: "bottom" });
      //     sessionStorage.setItem("phone", this.phone);
      //     //密码加密
      //     localStorage.setItem(
      //       Base64.encode("password"),
      //       Base64.encode(this.password)
      //     );
      //     this.$router.replace("/login");
      //   } else {
      //     Toast({ message: res.msg, position: "bottom" });
      //   }
      // });
    },
  },
  components:{
	bar
  }
};
</script>

<style lang="less" scoped>
	.register{
		width: 100%;
		.goback{
			margin-left:40rpx;
			text-align: left;
			image {
				width: 28rpx;
			    margin-top: 20rpx;
				height: 35rpx;
			}
		}
		.content{
			box-sizing: border-box;
			padding:  0 90rpx;
		}
		.logo{
			image{
				display: block;
				width: 121rpx;
				height: 64rpx;
				margin-top: 146rpx;
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
			border-bottom: 2rpx solid #f5f5f5;
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
			margin-top: 33rpx;
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
		.agree{
			display: flex;
			align-items: center;
			image{
				width: 26rpx;
				height: 26rpx;
				display: block;
				margin-left: 32rpx;
			}
			.read{
				margin-left: 18rpx;
				font-size:22rpx;
				font-weight:bold;
				color:rgba(153,153,153,1);
				line-height:70rpx;
			}
		}
	}
</style>
