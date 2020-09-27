/*
 * @Author: zhengchao
 * @Date: 2020-09-27 08:33:39
 * @LastEditors: zhengchao
 * @LastEditTime: 2020-09-27 09:50:05
 * @Description: 代码示例
 */

interface Params {
  [key: string]: string | number;
}
export interface Request {
  (url: string, method?: string, params?: Params): Promise<{
    errorCode: number;
    result: { method?: string; params?: Params };
  }>;
}

const request: Request = (url, method = 'GET', params = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        errorCode: 0,
        result: {
          method,
          params,
        },
      });
    }, 1000);
  });
};

export default request;
