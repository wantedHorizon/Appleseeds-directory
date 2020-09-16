import axios from 'axios';

export default axios.create({
  baseURL: 'https://tinyfac.es/api/users'
  // headers: {
  //   Authorization:
  //     'Client-ID rQqS6Mxh-OkgffczLJQPIDMBfMpChnZfEKYdWRvmeas',
  // },
});
