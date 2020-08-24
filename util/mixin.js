/**
 * 列表页面公共逻辑混入
 * @param {String} url 请求地址
 * @param {Object} params 除去pageNo、pageSize外的其他接口需要的参数
 * @param {Boolean} nextPage 是否是加载下一页（用于区分初始渲染、上拉加载、下拉刷新）
 * @return status, pageNo, pageSize, listData
 */
export const getListMixin = {
	data() {
		return {
			status: 'more',
			/* 上拉加载状态 */
			pageNo: 1,
			/* 当前页码 */
			pageSize: 10,
			/* 每页数据条数 */
			listData: [],
			/* 列表数据数组 */
			createTime: '',
			/* 列表第一条数据的时间戳 */
		}
	},
	methods: {
		// #ifdef APP-PLUS
		switchPullRefresh(isSupport) {
			const pages = getCurrentPages();
			const page = pages[pages.length - 1];
			const currentWebview = page.$getAppWebview();

			currentWebview.setStyle({
				pullToRefresh: {
					support: isSupport,
					style: plus.os.name === 'Android' ? 'circle' : 'default'
				}
			});
		},
		// #endif
		getList(getListService, params, nextPage) {
			this.status = 'loading';
			// #ifdef APP-PLUS
			this.switchPullRefresh(false);
			// #endif
			if (nextPage) {
				this.pageNo += 1;
			} else {
				this.pageNo = 1;
			}
			const {
				pageNo,
				pageSize,
				createTime
			} = this;
			const data = {
				pageNo,
				pageSize,
				...params
			};
			if (pageNo !== 1) {
				data.createTime = createTime;
			}
			getListService(
				data,
				(res) => {
					// #ifdef APP-PLUS
					this.switchPullRefresh(true);
					// #endif
					uni.stopPullDownRefresh();
					const list = res.rows;
					this.createTime = list.length ? list[list.length - 1].createTime : '';
					this.listData = this.pageNo === 1 ? list : this.listData.concat(list);
					this.status = this.listData.length < res.total ?
						'more' : 'noMore';
				},
				() => {
					// #ifdef APP-PLUS
					this.switchPullRefresh(true);
					// #endif
					uni.stopPullDownRefresh();
					uni.showToast({
						title: '获取列表数据失败,请稍后再试',
						icon: 'none',
						position: 'top',
						duration: 1500
					});
					this.status = 'more';
				}
			)
		}
	},
}

/**
 * 格式化月日混入 2020-01-01 => 01-01
 * @param {String} date 日期字符串
 * @return {String} 月日字符串
 */
export const formatMonthDayMixin = {
	filters: {
		formatMonthDay(date) {
			if (date && date.length === 10) {
				return date.substring(5)
			} else {
				return '-----'
			}
		}
	},
}

/**
 * 格式化年混入 2020-01-01 => 2020年
 * @param {String} date 日期字符串
 * @return {String} 年字符串
 */
export const formatYearMixin = {
	filters: {
		formatYear(date) {
			if (date && date.length === 10) {
				return date.substring(0, 4) + '年'
			} else {
				return '-----'
			}
		}
	},
}

/**
 * 格式化金额 前面加￥
 * @param {String} money 金额字符串
 * @return {String} 金额字符串
 */
export const formatMoneyMixin = {
	filters: {
		formatMoney(money) {
			return money ? `￥${money}` : '￥0'
		}
	}
}

/**
 * 详情页面公共逻辑混入
 * @param {String} url 请求地址
 * @param {Object} params 除去pageNo、pageSize外的其他接口需要的参数
 * @param {Boolean} nextPage 是否是加载下一页（用于区分初始渲染、上拉加载、下拉刷新）
 * @return status, pageNo, pageSize, listData
 */
export const getDetailMixin = {
	data() {
		return {
			credentialModels: {},
			/* 所有日期的图表数据 */
			inviteInfo: {},
			/* 结算详情 */
			credentialRes: {},
			/* 图表数据 */
			loadingInfo: false,
			/* 加载中 */
			loadingChart: false,
			/* 加载中 */
			awardActual: 0,
			/* 累计奖励总额 */
		}
	},
	methods: {
		getChartData(data, dateStr) { /* 获取图表数据 */
			this.loadingChart = true;
			getInviteChartData(
				data,
				(res) => {
					this.credentialModels = res.credentialModels || {};
					if (this.credentialModels[dateStr]) {
						this.credentialRes = this.credentialModels[dateStr];
					} else {
						const dateArray = Object.keys(this.credentialModels);
						const lastDate = dateArray[dateArray.length - 1];
						this.credentialRes = this.credentialModels[lastDate] || {};
						this.dateStr = lastDate; /* 如果当前日期没有数据，就取第一天的数据，并把当前日期改为有数据的最后一天，这里与被混入页面会有一点耦合 */
					}
					this.awardActual = res.awardActual || 0;
					this.loadingChart = false;
				},
				() => {
					uni.showToast({
						title: '获取曲线数据失败,请稍后再试',
						icon: 'none',
						position: 'top',
						duration: 1500
					});
					this.loadingChart = false;
				}
			)
		},
		getInviteInfo(buyId) { /* 获取详情数据 */
			this.loadingInfo = true;
			getInviteInfo({
					buyId
				},
				(res) => {
					this.inviteInfo = res;
					this.loadingInfo = false;
				},
				() => {
					uni.showToast({
						title: '获取详情数据失败,请稍后再试',
						icon: 'none',
						position: 'top',
						duration: 1500
					});
					this.loadingInfo = false;
				}
			)
		},
		showVoucher() { /* 查看凭证预览图片 */
			const credentialRes = this.credentialRes;
			if (credentialRes) {
				if (credentialRes.fileUrls && credentialRes.fileUrls[0]) {
					const urls = credentialRes.fileUrls;
					uni.previewImage({
						urls,
						current: urls[0],
					});
				} else {
					uni.showToast({
						title: '未上传图片，请核实！',
						icon: 'none',
						position: 'top',
						duration: 2000
					});
				}
			}
		}
	},
	computed: {
		chartsData() { /* 组装折线图数据 */
			const credentialRes = this.credentialRes;
			let chartsData = {
				categories: [],
				series: []
			};
			if (credentialRes && credentialRes.assessmentCurves && credentialRes.performCurves && credentialRes.periodPredicts) {
				chartsData = {
					categories: credentialRes.assessmentCurves.reTimes || [],
					series: [{
						name: '基线负荷',
						data: credentialRes.periodPredicts.periodSumObjs || [],
						color: '#4EA5FF',
						show: false,
						legendShape: 'circle',
					}, {
						name: '考核负荷',
						data: credentialRes.assessmentCurves.periodSumObjs || [],
						color: '#ff6633',
						show: true,
						legendShape: 'circle',
					}, {
						name: '执行负荷',
						data: credentialRes.performCurves.periodSumObjs || [],
						color: '#02B8B5',
						show: true,
						legendShape: 'circle',
					}]
				}
			}
			return chartsData
		},
		tagClass() { /* tag标签样式切换 */
			return this.inviteInfo.proState ? statusClass[this.inviteInfo.proState] : ''
		},
		isShowButton() { /* 是否显示查看凭证按钮 */
			return !!(this.inviteInfo.proState == '6' && this.credentialRes.fileUrls)
		},
		range() { /* 可被选择的日期 */
			return Object.keys(this.credentialModels)
		}
	}
}


export const pushPathMixin = {
	methods: {
		pushPath(path) {
			uni.navigateTo({
				url: path
			});
		},
		goBack() {
			uni.navigateBack({
				delta: 1
			})
		},
		reLaunch(path){
			uni.reLaunch({
				url: path
			});
		}
		
	}
}
export const getSystemInfoMixin = {
	methods: {
		getSystemInfo() {
			let result = ''
			uni.getSystemInfo({
				success: function(res) {
					result = res;
				},
			})
			return result
		},
	}
}
