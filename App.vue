
<script>
	import { mapMutations } from 'vuex';
	export default {
		created(){
			const _this = this
			uni.getSystemInfo({
				success: function(res) {
					_this.getSystemInfo({
						source: res.platform === 'ios' ? 1 : 2,
						statusBarHeight: res.statusBarHeight + 'px'
					})
				},
			})
		},
		methods:{
			...mapMutations({
			      getSystemInfo: 'getSystemInfo' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
			}),
		}
	}
	
</script>
<style lang="less">
	.uni-tabbar { 
	    .uni-tabbar-border { 
	        height: 0;
	    }
	}
</style>
