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
