const mutations = {
	getSystemInfo(state, payload) {
		state.source = payload.source;
		state.statusBarHeight = payload.statusBarHeight;
	},
	increment(state, payload) {
		state.count += payload.amount
	}
}
export default mutations;
