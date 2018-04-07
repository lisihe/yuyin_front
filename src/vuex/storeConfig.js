const baseUrl = 'http://192.168.1.105:8083/music/'
// 集中状态管理
export default {
  state: {
    loginState: 0, // 0 未登录，1 已登录
    count: 0,
    musicIndex: 0, // 当前音乐索引
    musicList: [
      {
        name: 'Soldier',
        src: baseUrl + 'Samantha Jade/Soldier/Soldier - Samantha Jade.mp3',
        image: baseUrl + 'Samantha Jade/Soldier/Soldier.jpg',
        singer: 'Samantha Jade',
        duration: '3:22'
      }, {
        name: '佛系少女',
        src: baseUrl + '冯提莫/佛系少女/佛系少女 - 冯提莫.mp3',
        image: baseUrl + '冯提莫/佛系少女/佛系少女.jpg',
        singer: '冯提莫',
        duration: '3:14'
      }, {
        name: '离开的理由',
        src: baseUrl + '牛奶咖啡/Lost & Found 去寻找/离开的理由 - 牛奶咖啡.mp3',
        image: baseUrl + '牛奶咖啡/Lost & Found 去寻找/Lost & Found 去寻找.jpg',
        singer: '牛奶咖啡',
        duration: '4:08'
      }, {
        name: '哥 只是个传说',
        src: baseUrl + '2a.mp3',
        image: baseUrl + '启示录.jpg',
        singer: '陈旭',
        duration: '4:08'
      }, {
        name: '明天，你好',
        src: baseUrl + '牛奶咖啡/Lost & Found 去寻找/明天，你好 - 牛奶咖啡.mp3',
        image: baseUrl + '牛奶咖啡/Lost & Found 去寻找/Lost & Found 去寻找.jpg',
        singer: '牛奶咖啡',
        duration: '4:31'
      }, {
        name: '去寻找',
        src: baseUrl + '牛奶咖啡/Lost & Found 去寻找/去寻找 - 牛奶咖啡.mp3',
        image: baseUrl + '牛奶咖啡/Lost & Found 去寻找/Lost & Found 去寻找.jpg',
        singer: '牛奶咖啡',
        duration: '4:14'
      }, {
        name: '边做边爱',
        src: baseUrl + '1a.mp3',
        image: baseUrl + '启示录.jpg',
        singer: '陈旭',
        duration: '4:35'
      }, {
        name: '心生',
        src: baseUrl + '牛奶咖啡/Lost & Found 去寻找/心生 - 牛奶咖啡.mp3',
        image: baseUrl + '牛奶咖啡/Lost & Found 去寻找/Lost & Found 去寻找.jpg',
        singer: '牛奶咖啡',
        duration: '5:02'
      }, {
        name: '说散就散',
        src: baseUrl + 'JC/说散就散/说散就散 - JC.mp3',
        image: baseUrl + 'JC/说散就散/说散就散.jpg',
        singer: 'JC',
        duration: '3:50'
      }, {
        name: '启示录',
        src: baseUrl + '3a.mp3',
        image: baseUrl + '启示录.jpg',
        singer: '陈旭',
        duration: '2:56'
      }, {
        name: '蓝色降落伞',
        src: baseUrl + '周深/深的深/蓝色降落伞 - 周深.mp3',
        image: baseUrl + '周深/深的深/深的深.jpg',
        singer: '周深',
        duration: '3:56'
      }
    ]
  },
  mutations: {
    increment (state) {
      state.count++
    },
    changeLoginState (state, payload) {
      state.loginState = payload.loginState
    },
    changeMusicList (state, playload) {
      state.musicList = playload.musicList
    },
    // 改变歌曲列表索引
    changeMusicIndex (state, playload) {
      state.musicIndex = playload.musicIndex
    }
  }
}
