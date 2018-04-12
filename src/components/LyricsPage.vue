<template>
  <div >
    <el-row :gutter="10">
      <el-col :span="12">
        <EasyScrollbar>
          <div  id="wrapper" style="height: 300px">
            <div style="borderBottom:1px solid #DDDDDD; min-height: 100px; marginRight: 20px; padding: 10px" v-for="(item, index) in lyricComments" :key="index">
              <div style="display: flex; align-items: center">
                <img :src="item.head" alt="Paris" width="30px" height="30px" style="border-radius: 50%;marginRight: 10px">
                <span style="line-height:40px">{{item.name + ': '}}</span>
              </div>
              <div>
                <span style="line-height:30px">{{item.message}}</span>
              </div>
              <div>
                <span style="color:#969696">
                  {{item.time}}
                </span>
              </div>
            </div>
          </div>
        </EasyScrollbar>
        <div style="marginTop: 20px">
          <EasyScrollbar >
            <div  id="wrapper" style="height: 80px;" contenteditable="true">
              能评论了吗
            </div>
          </EasyScrollbar>
          <el-button type="primary" size="mini" style="display: inline-block; float: right; marginTop: 5px;">发送</el-button>
        </div>
      </el-col>
      <el-col :span="12">
        <div style="width: 400px; height: 400px; overflow:hidden">
          <div  id="lyricObj" style="width: 417px; height: 600px; overflow-y: scroll;">
              <div style="text-align: center; padding: 5px;border: 1px"
                v-for="(item, index) in lyricInfo" :key="index"
                :style="(Number.parseInt(currentTime) + 0.5 >= computeLyricTime(item.time)) ? currentLineStyle : baseLineStyle">
              {{item.line}}
              </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '歌词和评论',
      lyricInfo: [
        {
          time: '00:00.00',
          line: '牛奶咖啡 - 明天，你好'
        }, {
          time: '00:03.00',
          line: '作词：王海涛'
        }, {
          time: '00:05.00',
          line: '作曲：牛奶咖啡'
        }, {
          time: '00:07.00',
          line: '编曲：格非 口琴：彭坦'
        }, {
          time: '00:10.00',
          line: '箱琴：格非'
        }, {
          time: '00:14.00',
          line: ''
        }, {
          time: '00:21.80',
          line: ''
        }, {
          time: '00:23.32',
          line: '看昨天的我们 走远了'
        }, {
          time: '00:28.16',
          line: '在命运广场中央 等待'
        }, {
          time: '00:33.14',
          line: '那模糊的 肩膀'
        }, {
          time: '00:36.66',
          line: '越奔跑 越渺小'
        }, {
          time: '00:40.95',
          line: ''
        }, {
          time: '00:42.68',
          line: '曾经 并肩往前的 伙伴'
        }, {
          time: '00:48.24',
          line: '在举杯 祝福后都 走散'
        }, {
          time: '00:53.56',
          line: '只是那个 夜晚'
        }, {
          time: '00:56.58',
          line: '我深深  的都留藏在心坎'
        }, {
          time: '01:00.61',
          line: '长大以后 我只能奔跑'
        }, {
          time: '01:05.71',
          line: '我多害怕 黑暗中跌倒'
        }, {
          time: '01:10.69',
          line: '明天你好 含着泪微笑'
        }, {
          time: '01:15.67',
          line: '越美好 越害怕得到'
        }, {
          time: '01:20.67',
          line: '每一次哭 又笑着 奔跑'
        }, {
          time: '01:25.68',
          line: '一边失去 一边在寻找'
        }, {
          time: '01:30.71',
          line: '明天你好 声音多渺小'
        }, {
          time: '01:35.78',
          line: '却提醒我 勇敢是什么'
        }, {
          time: '01:43.81',
          line: ''
        }, {
          time: '01:59.89',
          line: ''
        }, {
          time: '02:03.17',
          line: '当我朝着反方向走去'
        }, {
          time: '02:08.44',
          line: '在楼梯的角落 找勇气'
        }, {
          time: '02:13.50',
          line: '抖着肩膀 哭泣'
        }, {
          time: '02:16.50',
          line: '问自己 在哪里'
        }, {
          time: '02:21.02',
          line: ''
        }, {
          time: '02:23.20',
          line: '曾经 并肩往前 的伙伴'
        }, {
          time: '02:27.85',
          line: '沉默着 懂得我的委屈'
        }, {
          time: '02:33.24',
          line: '时间它总说谎'
        }, {
          time: '02:36.52',
          line: '我从 不曾失去 那些肩膀'
        }, {
          time: '02:40.55',
          line: '长大以后 我只能奔跑'
        }, {
          time: '02:45.75',
          line: '我多害怕 黑暗中跌倒'
        }, {
          time: '02:50.74',
          line: '明天你好 含着泪微笑'
        }, {
          time: '02:55.68',
          line: '越美好 越害怕得到'
        }, {
          time: '03:00.67',
          line: '每一次哭 又笑着奔跑'
        }, {
          time: '03:05.60',
          line: '一边失去 一边在寻找'
        }, {
          time: '03:10.81',
          line: '明天你好 声音多渺小'
        }, {
          time: '03:15.73',
          line: '却提醒我'
        }, {
          time: '03:20.72',
          line: '长大以后 我只能奔跑'
        }, {
          time: '03:25.66',
          line: '我多害怕 黑暗中跌倒'
        }, {
          time: '03:30.65',
          line: '明天你好 含着泪微笑'
        }, {
          time: '03:35.66',
          line: '越美好 越害怕得到'
        }, {
          time: '03:40.43',
          line: '每一次哭 又笑着奔跑'
        }, {
          time: '03:45.65',
          line: '一边失去 一边在寻找'
        }, {
          time: '03:50.58',
          line: '明天你好 声音多渺小'
        }, {
          time: '03:55.67',
          line: '却提醒我 勇敢是什么'
        }, {
          time: '04:03.94',
          line: ''
        }
      ],
      lyricComments: [
        {
          name: '白衣飘飘',
          message: '今天是2014-12-29 即将跨入2015年，我也即将30岁，一事无成，拿着3000元的工资供着房子养着孩子，干着随时会离职的工作，信用卡还欠着3万，现在是晚上23点21分，一个人在电脑前迷茫着听着这首歌。我不知道明天会怎样，我只知道压力压得我喘不过气，我会坚持，因为我有了责任。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/1.jpg',
          time: '2018-4-8'
        }, {
          name: '苦茶淡淡香',
          message: '今天是2015年6月29日，刚和朋友创业失败，欠了一身债，27岁不敢谈恋爱没有女朋友。我不怕失败不怕跌倒，因为没有伞的孩子必须学会奔跑，即将再次创业，我会坚持下去。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/2.jpg',
          time: '2018-4-8'
        }, {
          name: 'ζ、 蔚蓝°',
          message: '今天是试管移植第七天，之前失败了一次，如果这次再失败，我可能就要放弃了。生个健康的宝宝是我这两年来许的最多的愿望，希望我的美梦能够成真加油！', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/3.jpg',
          time: '2018-4-8'
        }, {
          name: '纯真小女孩',
          message: '喜欢云音乐的原因之一就是能在这里看到很多很好的故事。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/4.jpg',
          time: '2018-4-8'
        }, {
          name: '寂寥魅影',
          message: '第一次听这首是大学暑假深圳打工时去网吧听的新歌，当时听到的是对明天的向往；后来毕业去杭州实习工作，依然听这首歌，当时听到的是对明天的迷茫；如今的我，再去听这首歌，想想过去，听到的是一张刻满昨天的CD。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/5.jpg',
          time: '2018-4-8'
        }, {
          name: '黎明的露珠',
          message: '今天是2015-12-29 即将跨入2016年，距离我的评论整整一年，确实我选今天评论有些刻意，也有些缘分，差点错过。既然给我这个时间坐在电脑前，总要写点什么，因为字数限制，我长话短说，这一年时间，工资涨了1300，信用卡欠1万多，月供是1800元，小孩读了幼儿园，谢谢那些给我留言和点赞的人的鼓励。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/6.jpg',
          time: '2018-4-8'
        }, {
          name: '泛舟碧波湖',
          message: '“问自己 在哪里” 这是我工作一年多以来常常问自己的话，现在我终于收到了美国大学的硕士录取信，感谢这么多年来一直支持和不支持我的人。', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/7.jpg',
          time: '2018-4-8'
        }, {
          name: '檬味',
          message: '别怕，我在呢，一直在', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/8.jpg',
          time: '2018-4-8'
        }, {
          name: '梦沫惜',
          message: '初中毕业两年了，我好想他们，不知道他们身在哪里，因为成绩不好远离那个城市去读高中，没办法啊得为自己着想，记得那次毕业吃饭我们都没说再见却还像再见', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/9.jpg',
          time: '2018-4-8'
        }, {
          name: '花香满园',
          message: '故事太多了吧……', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/10.jpg',
          time: '2018-4-8'
        }, {
          name: '衣草的暧昧',
          message: '2018年4月7日星期六，现在的我很迷茫，明天不知道怎么走，感觉日子过得像被拖着一样，自己迈不开双脚', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/11.jpg',
          time: '2018-4-8'
        }, {
          name: '紫樱千夏',
          message: '4年了，你加油！', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/12.jpg',
          time: '2018-4-8'
        }, {
          name: 'sun smile',
          message: '今天，给我土耳其女孩第一次唱的第一首中文歌', // 0:在线,1:离线
          head: 'http://127.0.0.1:8083/music/head/13.jpg',
          time: '2018-4-8'
        }
      ],
      lyricObj: '',
      currentLineStyle: {
        fontSize: '18px',
        color: '#FF9999'
      },
      baseLineStyle: {
        fontSize: '16px'
      }
    }
  },
  props: ['currentTime', 'visible', 'songImge'],
  mounted () {
    this.lyricObj = document.getElementById('lyricObj')
  },
  methods: {
    scrollLyric () {
      console.log(this.lyricObj.scrollTop)
      this.lyricObj.scrollTop += 26
    },
    computeLyricTime (time) {
      return Number.parseInt(time.split(':')[0]) * 60 + Number.parseInt(time.split(':')[1])
    }
  }
}
</script>
<style>
</style>
