// src/utils/net.js

//这里使用 element-ui 的消息UI组件
import { Notification } from "element-ui";
import axios from "axios";

/**
 * 注册全局 Axios 拦截器
 */
export function registerInterceptor(options) {
  axios.interceptors.request.use(config => {
    return {
      withCredentials: true,
      ...options,
      ...config
    };
  });
  axios.interceptors.response.use(
    res => {
      const ret = res.data;
      return Promise.resolve(ret);
    },
    err => {
      const status = err.response && err.response.status;
      let message = "";

      switch (status) {
        case 404:
          message = "请求资源未找到";
          break;
        case 401:
          message = "无权限";
          setTimeout(() => {
            //处理登录失效，例如跳转到登陆页
          }, 1000);
          break;
        case 500:
          message = "服务器异常";
          break;
        // 其他错误...
        default:
          break;
      }

      Notification.error({
        title: "错误",
        message: message || err.message
      });

      return Promise.reject(err);
    }
  );
}
