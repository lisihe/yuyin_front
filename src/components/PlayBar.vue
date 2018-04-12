<template>
  <div id="palyerController" >
    <el-row type="flex" align="middle" justify="space-between" >
      <el-col :span="4">
        <!-- 音乐切换、播放、暂停 -->
        <el-row type="flex" justify="center" >
          <el-col :span="8"><div id="forwardBtn" class="forwardBtn conBtn" @click="forwardMusic"></div></el-col>
          <el-col :span="8"><div id="playBtn" class="conBtn" @click="play" :class="[isPlay ? 'pauseBtn' : 'playBtn']"></div></el-col>
          <el-col :span="8"><div id="nextBtn" class="nextBtn conBtn" @click="nextMusic"></div></el-col>
        </el-row>
      </el-col>
      <el-col :span="9">
        <!-- 音乐播放进度 -->
        <el-row type="flex" align="middle" justify="space-between">
          <el-col :span="3"><span>{{currentTimeFormat}}</span></el-col>
          <el-col :span="17"><el-slider v-model="currentTimeRate" :show-tooltip="false" @change="playerCurrentTimeChange"></el-slider></el-col>
          <el-col :span="3"><span>{{durationTimeFormat}}</span></el-col>
        </el-row>
      </el-col>
      <el-col :span="4">
        <!-- 音乐音量 -->
        <el-row type="flex" align="middle" justify="space-between" >
          <el-col :span="5">
            <div id="volumeIcon"  @click="mutedVolume(isMuted = !isMuted)"  :class="[isMuted ? 'mutedBtn' : 'volumeBtn']"></div>
          </el-col>
          <el-col :span="18">
            <el-slider v-model="volume" :show-tooltip="true" @change="playerVolumeChange" ></el-slider>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row :gutter="10" type="flex" align="middle" justify="center">
          <el-col :span="19">
            <el-row type="flex" align="middle" justify="center" >
              <el-col :span="7">
                <div id="musicImage" :style="{backgroundImage: `url(${urlEncode(baseImageUrl + musicInfo.musicImage + '.jpg')})`}" @click="lyricsPageDialogVisible = true"></div>
              </el-col>
              <el-col :span="15">
                <div style="width: 240px; height: 80px">
                  <span style="float: left">{{musicInfo.name}}</span>
                  <span style="float: left">-</span>
                  <span style="float: left">{{musicInfo.singer}}</span>
                </div>
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="5">
            <el-row type="flex" align="middle" justify="center" >
              <ul id="menuBtn" style="list-style-type: none; line-height:30px; padding:0px; margin:0px; text-align:center">
                <li style="margin: 5px; padding: 0px;" :class="'cycStyle' + cycStyle" @click="cycStyle = ++cycStyle % 3"></li>
                <li style="margin: 5px; padding: 0px;" id="musicList"  @click="musicListDialogVisible = true"></li>
              </ul>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-dialog ref="musicListDialog" title="播放列表" :visible.sync="musicListDialogVisible" width="500px"  append-to-body center :modal="false">
      <MusicList :visible.sync="musicListDialogVisible"/>
    </el-dialog>
    <el-dialog ref="lyricsPageDialog" :title="musicInfo.name + ' - ' + musicInfo.singer" :visible.sync="lyricsPageDialogVisible" width="900px"  append-to-body center :modal="false">
      <LyricsPage :visible.sync="lyricsPageDialogVisible" :currentTime="playerCurrentTime" :songImge="this.musicInfo.image"/>
    </el-dialog>
  </div>
</template>
<script>
import MusicList from '@/components/MusicList'
import LyricsPage from '@/components/LyricsPage'
// 辅助函数，帮助生成计算属性
import { mapState } from 'vuex'

export default {
  data () {
    return {
      title: '播放器条',
      player: '',
      isPlay: false,
      isMuted: false,
      volume: 50,
      oldVolume: 0,
      playerCurrentTime: 0,
      playerDuration: 0, // 音乐时长
      currentTimeRate: 0,
      // musicIndex: 0, // 当前音乐索引
      intervalCode: 0,
      cycStyle: 0, // 0-顺序循环；1-单曲循环；2-随机播放
      musicListDialogVisible: false,
      historyIndexStack: [],
      musicImageStyle: {
      },
      lyricsPageDialogVisible: false
    }
  },
  components: {
    MusicList,
    LyricsPage
  },
  computed: {
    musicInfo () {
      return this.musicList[this.musicIndex]
    },
    durationTimeFormat () {
      return String(Number.parseInt(this.playerDuration / 60)).padStart(2, '0') + ':' +
         String(Number.parseInt(this.playerDuration % 60)).padStart(2, '0')
    },
    currentTimeFormat () {
      return String(Number.parseInt(this.playerCurrentTime / 60)).padStart(2, '0') + ':' +
         String(Number.parseInt(this.playerCurrentTime % 60)).padStart(2, '0')
    },
    /*
    currentTimeRate: {
      set (value) {
        // do..
        console.log('value change:' + value)
        this.player.currentTime = (value / 100) * this.playerDuration
      },
      get () {
        console.log(Number.parseInt((this.playerCurrentTime / this.playerDuration) * 100))
        return Number.parseInt((this.playerCurrentTime / this.playerDuration) * 100)
      }
    },
    */
    ...mapState([
      'loginState',
      'musicList',
      'musicIndex',
      'baseMusicUrl',
      'baseImageUrl',
      'baseLyricUrl'
    ])
  },
  watch: {
    musicIndex: function () {
      // 暂停播放当前歌曲
      this.isPlay = false
      // 停止定时器
      clearInterval(this.intervalCode)
      this.play()
    }
  },
  created () {
    // 请求播放列表
    this.$axios.post('/music/select', 1)
      .then(value => {
        if (value.data) {
          this.$store.commit({
            type: 'changeMusicList',
            musicList: value.data
          })
          console.log(value.data)
        } else {
          this.$message.error('抱歉!')
        }
      })
      .catch(error => {
        console.log(error)
      })
    this.player = document.createElement('audio')
    // 设置音量
    this.player.volume = this.volume / 100
    console.log('01_创建播放器:' + this.player)
    this.player.addEventListener('durationchange', () => {
      // 设置音乐时长
      this.playerDuration = this.player.duration
    })
    console.log('02_添加durationchange监听器')
    /*
    this.player.addEventListener('timeupdate', () => {
      // 更改当前时长
      this.playerCurrentTime = this.player.currentTime
    })
    console.log('03_添加timeupdate监听器')
    */
    this.player.addEventListener('ended', () => {
      /*
      // 停止定时器
      clearInterval(this.intervalCode)
      // 停止播放
      this.isPlay = !this.isPlay
      */
      // 下一首
      if (this.cycStyle === 1) {
        // 切换图标
        console.log('单曲循环')
        // 停止定时器
        clearInterval(this.intervalCode)
        // 停止播放
        this.isPlay = !this.isPlay
        this.play()
      } else {
        console.log('其它循环')
        this.nextMusic()
      }
    })
    console.log('03_添加ended监听器')
  },
  methods: {
    // 播放或暂停
    play () {
      // 切换图标
      this.isPlay = !this.isPlay
      // 如果是播放、则播放当前音乐
      // 检查播放器状态
      if (this.player.src === '' || this.urlEncode(this.baseMusicUrl + this.musicInfo.url + '.mp3') !== this.player.src) {
        console.log('重新设置源' + this.baseMusicUrl + this.musicInfo.url + '.mp3')
        this.player.src = this.baseMusicUrl + this.musicInfo.url + '.mp3'
      }
      if (this.isPlay) {
        this.player.play()
        // 启动定时器
        this.intervalCode = setInterval(() => {
          this.playerCurrentTime = this.player.currentTime
          this.currentTimeRate = Number.parseInt((this.playerCurrentTime / this.playerDuration) * 100)
          console.log('定时器运行中...' + this.playerCurrentTime)
        }, 1000)
      } else {
        this.player.pause()
        // 停止定时器
        clearInterval(this.intervalCode)
      }
    },
    // 上一首
    forwardMusic () {
      switch (this.cycStyle) {
        case 0:
        case 1:
          this.historyIndexStack.push(this.musicIndex)
          this.$store.commit({
            type: 'changeMusicIndex',
            musicIndex: (this.musicIndex - 1) < 0 ? (this.musicIndex - 1) + this.musicList.length : (this.musicIndex - 1)
          })
          break
        case 2:
          let next = Number.parseInt(this.musicList.length * Math.random())
          this.historyIndexStack.push(next)
          this.$store.commit({
            type: 'changeMusicIndex',
            musicIndex: next
          })
          break
      }
      // this.musicIndex = (this.musicIndex - 1) < 0 ? (this.musicIndex - 1) + this.musicList.length : (this.musicIndex - 1)
    },
    // 下一首
    nextMusic () {
      switch (this.cycStyle) {
        case 0:
        case 1:
          this.historyIndexStack.push(this.musicIndex)
          this.$store.commit({
            type: 'changeMusicIndex',
            musicIndex: (this.musicIndex + 1) % this.musicList.length
          })
          break
        case 2:
          let next = Number.parseInt(this.musicList.length * Math.random())
          this.historyIndexStack.push(next)
          this.$store.commit({
            type: 'changeMusicIndex',
            musicIndex: next
          })
          break
      }
      // this.musicIndex = (this.musicIndex + 1) % this.musicList.length
    },
    // 静音&有音
    mutedVolume (muted) {
      if (muted) {
        this.player.muted = true
        this.oldVolume = this.volume
        this.volume = 0
      } else {
        this.player.muted = false
        this.volume = this.oldVolume
      }
    },
    // 更改播放进度
    playerCurrentTimeChange (v) {
      // this.player.currentTime = (e / 100) * this.playerDuration
      this.player.currentTime = (v / 100) * this.playerDuration
    },
    // 调节音量
    playerVolumeChange (v) {
      if (this.volume === 0) {
        this.mutedVolume(this.isMuted = true)
      } else {
        this.oldVolume = this.volume
        this.mutedVolume(this.isMuted = false)
      }
      this.player.volume = this.volume / 100
    },
    // url编码
    urlEncode (url) {
      /*
      return url.replace(/\+/g, '%2B')
        .replace(/&/g, '%26')
        .replace(/ /g, '%20')
      */
      return encodeURI(url)
    }
  }
}
</script>
<style>
  /*播放器*/
  #palyerController{
    height:80px;
    line-height: 80px;
    width: 1200px !important;
    margin: 0px auto;
  }
  /*播放、切换按钮*/
  .forwardBtn {
    background-image: url(../assets/上一曲.png)!important;
  }
  .playBtn {
    background-image: url(../assets/播放.png)!important;
  }
  .pauseBtn {
    background-image: url(../assets/暂停.png)!important;
  }
  .nextBtn {
    background-image: url(../assets/下一曲.png)!important;
  }
  /*按钮样式*/
  .conBtn {
    width: 60px;
    height: 60px;
    background: no-repeat center center;
    background-size:95%;
    margin: 0px auto;
  }
  .conBtn:hover {
    background-size:100%;
  }
  .conBtn:active {
    background-size: 93%;
  }
  /* 静音或有声音图片 */
  .volumeBtn {
    background-image: url(../assets/音量.png);
    height: 32px;
    width: 32px;
  }
  .mutedBtn {
    background-image: url(../assets/静音.png);
    height: 32px;
    width: 32px;
  }
  #musicImage {
    background-size: 60px 60px;
    width: 60px;
    height: 60px;
  }
  #cycStyle {
    background-image: url(../assets/循环播放.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }
  .cycStyle0 {
    background-image: url(../assets/循环播放.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }
  .cycStyle1 {
    background-image: url(../assets/单曲循环.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }
  .cycStyle2 {
    background-image: url(../assets/随机播放.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }
  #musicList {
    background-image: url(../assets/列表.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
    cursor:pointer;
  }

  /* 改变鼠标样式 */
  .conBtn, #musicImage, #menuBtn{
    cursor:pointer!important;
  }
</style>
