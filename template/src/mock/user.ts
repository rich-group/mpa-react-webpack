const users = {
  'data|5-10':[
    {
      guid: '@guid',
      'name':'@cname', //生成一个常见的中文名
      'age|5-100':5,//5只是确认类型
      'sex|1':['男','女'],//表示取数组中的任一项
      'address':'@cparagraph(2,4)', //默认生成一段中文文本，c表示中文
      'dtime':'@datetime(\'yyyy-MM-dd A HH:mm:ss\')', //随机生成一个时间日期，也可以写成
    }
  ]
};


export default [{
  url: process.env.BFF_HOST + '/user/detail',
  type: 'get',
  response: () => {
    return {
      retCode: 20000,
      retInfo: '',
      success: true,
      timeStamp: Number(new Date()),
      ...users
    };
  }
}];