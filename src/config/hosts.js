const getEnv = () => {
  /**
   * 这里写判断环境代码，
   * 最终返回对应的环境标识
   */
  return "prod";
};

const env = getEnv();

export const douban = {
  prod: "//douban.uieee.com",
  pre: "//douban-api.now.sh",
  test: "//douban-api.uieee.com"
}[env];
