/*
 * @Author: zhengchao
 * @Date: 2020-09-27 09:38:03
 * @LastEditors: zhengchao
 * @LastEditTime: 2020-09-27 11:13:51
 * @Description: 单元测试示例
 */

import getBatteryInfo from '../../src/device/getBatteryInfo';

describe('device', () => {
  describe('getBatteryInfo', () => {
    it('get batterInfo with 60%', async () => {
      expect(getBatteryInfo()).toEqual('60%');
    });
  });
});
