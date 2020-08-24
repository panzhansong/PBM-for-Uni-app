// 加密方法
import config from '../package.json';
import md5 from 'js-md5';
import state from '../store/state.js';

var JsonpUtils = {
  version: '1.1.0',
  name: 'rongdu Jsonp Utils'
};

JsonpUtils.md5Sign = function md5Sign(params, appKey) {
  var element = "";
  var array = new Array();
  var arrayIndex = 0;
  params.source= state.source;
  if (appKey) {
    params.appKey = appKey;
  } else {
    alert("缺少秘钥");
    return;
  }
  for (var key in params) {
      if(params[key]!=''&&params[key]!=null) {
        element = key + "=" + params[key];
        array[arrayIndex++] = element;
      }
  }
  array.sort();
  var signStr = "";
  for (var i = 0; i < array.length; i++) {
    if (signStr) {
      signStr += "&" + array[i];
    } else {
      signStr += array[i];
    }
  };
  var sign = md5(signStr).toUpperCase();
  if (params.appKey) {
    delete params.appKey;
  }
  return {md5Params: params, sign};
}

JsonpUtils.addHeaders = function (params, userId, tokenId, sign) {
  if (userId && tokenId && sign ) {
    params["userId"] = userId;
    params["tokenId"] = tokenId;
    params["sign"] = sign;
  }
  params.sign = sign
  return params;
}

function encode(params, userId, tokenId, appKey) {
  var {sign, md5Params} = JsonpUtils.md5Sign(params, appKey);
  var newParams = JsonpUtils.addHeaders(md5Params, userId, tokenId, sign);
  return newParams;
}

export default encode;