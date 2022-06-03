import HttpCalls from './HttpCalls';

// export const _productList = async (payload) => {
//   let { _do_call } = HttpCalls;
//   let headers = await headersData(NextCookies({ ctx: '' }));
//   return _do_call('POST', 'products/getcategoryProducts', headers, payload);
// };

export const headersData = async params => {
  // console.log('headersData params ==>', params);

  return {
    headers: {
      'Content-Type': params.type ? params.type : 'application/json',
      Authorization: params
        ? params.token
          ? `Bearer ${params.token}`
          : ''
        : '',
    },
  };
};
