<template>
  <div>
    <el-container>
      <el-aside width="240px">
        <div style="margin: 10px; padding: 5px; width:210px; height: 500px; boxShadow: 0px 0px 8px #FF6633">
          <EasyScrollbar >
            <div  id="wrapper" style="height: 500px">
              <div style="cursor:pointer; margin: 5px; height: 40px; width: 180px; boxShadow: 0px 0px 2px #888; display:flex;align-items:center; justify-content: space-between"
                v-for="item in friendList"
                :key="item">
                <img :src="item.head" alt="Paris" width="40px" height="40px">
                <span style="">{{item.name}}</span>
                <div style="width:10px; height: 10px; background-color: #66FF33; border-radius: 5px; float: right; marginRight: 10px"
                  :style="{backgroundColor: item.state === 0 ? '#66FF33': '#C0C0C0'}"></div>
              </div>
            </div>
          </EasyScrollbar>
        </div>
      </el-aside>
      <el-main style="padding: 0px">
        <div style="margin: 10px; padding: 5px; height: 330px; boxShadow: 0px 0px 8px #FF6633">
          <div style="fontSize: 18px">{{friendList[currentFriendIndex].name}}</div>
          <EasyScrollbar >
            <div  id="wrapper" style="height: 300px;">
              <div style="display: flex; flex-direction: column ">
                <div v-for="item in chatMessage" :key="item">
                  <div style="cursor:pointer; margin: 15px; border-radius: 10px; display:inline-block; padding:5px; boxShadow: 0px 0px 2px #888;"
                    :style="{float: item.flag === 0 ? 'right' : 'left', backgroundColor: item.flag === 0 ? '#00CCFF' : '#FFFFFF', color: item.flag === 0 ? '#FFFFFF' : '#000000'}">
                    <span>{{item.message}}</span>
                  </div>
                </div>
              </div>
            </div>
          </EasyScrollbar>
        </div>
        <div style="margin: 10px; padding: 5px; height: 150px; boxShadow: 0px 0px 8px #FF6633">
          <div style="display: flex; margin: 10px">
            <i class="el-icon-edit" style="marginLeft: 10px"></i>
            <i class="el-icon-circle-plus" style="marginLeft: 10px"></i>
            <i class="el-icon-picture-outline" style="marginLeft: 10px"></i>
          </div>
          <EasyScrollbar >
            <div  id="wrapper" style="height: 80px;" contenteditable="true">
              你多大了
            </div>
          </EasyScrollbar>
          <el-button type="primary" size="mini" style="display: inline-block; float: right; marginTop: 5px;">发送</el-button>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '音乐好友',
      chatMessage: [
        {
          flag: 0, // 0:自己，1：好友
          message: '你好啊',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 1, // 0:自己，1：好友
          message: '你好啊',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 1, // 0:自己，1：好友
          message: '请问你叫什么名字？',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 0, // 0:自己，1：好友
          message: '我叫lilom,你呢？',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 1, // 0:自己，1：好友
          message: '你好，我叫Mike',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 1, // 0:自己，1：好友
          message: '你是风儿  （风儿  风儿）',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 0, // 0:自己，1：好友
          message: '我是沙     （我是沙 ..）',
          time: '2018-4-7 21:10:00'
        }, {
          flag: 1, // 0:自己，1：好友
          message: '缠缠绵绵，到天涯~',
          time: '2018-4-7 21:10:00'
        }
      ],
      friendList: [
        {
          name: '白衣飘飘',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/1.jpg'
        }, {
          name: '苦茶淡淡香',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/2.jpg'
        }, {
          name: 'ζ、 蔚蓝°',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/3.jpg'
        }, {
          name: '纯真小女孩',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/4.jpg'
        }, {
          name: '寂寥魅影',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/5.jpg'
        }, {
          name: '黎明的露珠',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/6.jpg'
        }, {
          name: '泛舟碧波湖',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/7.jpg'
        }, {
          name: '檬味',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/8.jpg'
        }, {
          name: '梦沫惜',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/9.jpg'
        }, {
          name: '花香满园',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/10.jpg'
        }, {
          name: '衣草的暧昧',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/11.jpg'
        }, {
          name: '紫樱千夏',
          state: 0, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/12.jpg'
        }, {
          name: 'sun smile',
          state: 1, // 0:在线,1:离线
          head: 'http://192.168.1.105:8083/music/head/13.jpg'
        }
      ],
      currentFriendIndex: 7
    }
  }
}
</script>
<style>
</style>
