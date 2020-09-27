/*
 * @Author: zhengchao
 * @Date: 2020-09-27 09:38:03
 * @LastEditors: zhengchao
 * @LastEditTime: 2020-09-27 10:48:44
 * @Description: 单元测试示例
 */

import request from '../../src/network/request';

describe('network', () => {
  describe('request', () => {
    it('response data with GET method', async () => {
      expect.assertions(1);
      const res = await request('xxx');
      expect(res.result.method).toEqual('GET');
    });
  });
});
