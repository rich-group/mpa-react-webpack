const config: ApiConfig[] = [
  {
    name: 'detail',
    path: process.env.BFF_HOST + '/user/detail',
    type: 'get'
  }
];

export default config;
