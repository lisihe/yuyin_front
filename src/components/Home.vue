<template>
<div>
  <el-container >
    <el-header id="header" >
      <NavBar/>
    </el-header>
    <el-main id="main" >
      <el-container style=" height:100%;overflow: hidden">
        <el-aside style=" height:100%;overflow: scoll">
          <Menu/>
        </el-aside>
        <el-main style="padding: 10px">
          <HomePage/>
        </el-main>
      </el-container>
    </el-main>
    <el-footer id="footer">
      <el-row type="flex" justify="space-around">
        <el-col :span="17"  id="palyerController" style="width: 1200px; margin: 0px auto; min-width: 1200px">
          <el-row type="flex" align="middle" justify="center" :gutter="20">
            <el-col :span="4">
              <!-- 音乐切换、播放、暂停 -->
              <el-row type="flex" justify="center" >
                <el-col :span="8"><div id="forward" class="conBtn"></div></el-col>
                <el-col :span="8"><div id="play" class="conBtn" @click="playORpause" v-bind:class="playBtnIconClass"></div></el-col>
                <el-col :span="8"><div id="next" class="conBtn"></div></el-col>
              </el-row>
            </el-col>
            <el-col :span="10">
              <!-- 音乐播放进度 -->
              <el-row type="flex" align="middle" justify="space-between">
                <el-col :span="3"><span>{{currentImteFormat}}</span></el-col>
                <el-col :span="17"><el-slider v-model="currentTime" :show-tooltip="false"></el-slider></el-col>
                <el-col :span="3"><span>{{durationFormat}}</span></el-col>
              </el-row>
            </el-col>
            <el-col :span="4">
              <!-- 音乐音量 -->
              <el-row type="flex" align="middle" justify="space-between" :gutter="10">
                <el-col :span="5">
                  <div id="volumeIcon"  @click="mutedVolume(isMuted = !isMuted)"  v-bind:class="soundIconClass"></div>
                </el-col>
                <el-col :span="19">
                  <el-slider v-model="volume" :show-tooltip="true" ></el-slider>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <el-row :gutter="10" type="flex" align="middle" justify="center">
                <el-col :span="19">
                  <el-row type="flex" align="middle" justify="center" >
                    <el-col :span="7">
                      <div id="musicImage" @click="lyricDialogVisible = true"></div>
                    </el-col>
                    <el-col :span="15">
                      <span style="float: left">素颜</span>
                      <span style="float: left">-</span>
                      <span style="float: left">许嵩</span>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="5">
                  <ul id="menuBtn" style="list-style-type: none; line-height:30px; padding:0px; margin:0px; text-align:center">
                    <li style="margin: 5px; padding: 0px;" id="cycStyle" ></li>
                    <li style="margin: 5px; padding: 0px;" id="musicList" @click="musicListDialogVisible = true"></li>
                  </ul>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
    <el-dialog :visible.sync="lyricDialogVisible" width="60%" height="40%">
      <LyricsPage/>
    </el-dialog>
    <el-dialog :visible.sync="musicListDialogVisible" width="30%" >
      <MusicList/>
    </el-dialog>
  </el-container>
  <audio controls id="player" style="display: none"></audio>
</div>
</template>

<script>
import LyricsPage from '@/components/LyricsPage'
import MusicList from '@/components/MusicList'
import NavBar from '@/components/NavBar'
import Menu from '@/components/Menu'
import HomePage from '@/components/contents/HomePage'

export default {
  data () {
    return {
      title: '余音',
      isPause: false,
      isMuted: false,
      playBtnIconClass: 'playIcon',
      soundIconClass: 'volumeIcon',
      volume: 50,
      tempVolume: 0, // 用来存储静音前的音量
      duration: 0,
      durationFormat: '00:00',
      currentTime: 0,
      currentImteFormat: '00:00',
      intervalCode: 0,
      lyricDialogVisible: false,
      musicListDialogVisible: false,
      musicList: [
        {
          name: '不得不爱',
          src: 'http://localhost:8083/music/潘玮柏,弦子 - 不得不爱.mp3',
          singer: '潘玮柏、弦子'
        }, {
          name: '不得不爱',
          src: 'http://localhost:8083/music/潘玮柏,弦子 - 不得不爱.mp3',
          singer: '潘玮柏、弦子'
        }
      ]
    }
  },
  components: {
    LyricsPage,
    MusicList,
    NavBar,
    Menu,
    HomePage
  },
  computed: {
    player () {
      return document.getElementById('player')
    }
  },
  watch: {
    volume () {
      // 如果音量为0，静音
      console.log('音量改变:' + this.volume)
      this.player.volume = this.volume / 100
    }
  },
  methods: {
    // 播放或暂停
    playORpause () {
      this.isPause = this.player.paused
      if (this.isPause) {
        this.playMusic()
        this.playBtnIconClass = 'pauseIcon'
      } else {
        this.pauseMusic()
        this.playBtnIconClass = 'playIcon'
      }
    },
    // 播放
    playMusic () {
      // 先判断是否已填装歌曲，如果没有，填装歌曲
      console.log('this.isLoadMusic' + this.isLoadMusic())
      if (!this.isLoadMusic()) {
        console.log('填装')
        this.loadMusic()
      }
      this.player.play()
      // 启动定时器，刷新播放进度条
      this.intervalCode = setInterval(() => {
        this.currentTime = Number.parseInt((this.player.currentTime / this.player.duration) * 100)
        this.currentImteFormat = String(Number.parseInt(this.player.currentTime / 60)).padStart(2, '0') + ':' +
         String(Number.parseInt(this.player.currentTime % 60)).padStart(2, '0')
        console.log('定时器运行中...' + this.currentTime)
      }, 1000)
    },
    // 暂停
    pauseMusic () {
      this.player.pause()
      // 停止定时器
      clearInterval(this.intervalCode)
    },
    // 静音
    mutedVolume (isMuted) {
      console.log('isNotMuted' + isMuted)
      this.player.muted = isMuted
      if (isMuted) {
        this.soundIconClass = 'mutedIcon'
        this.tempVolume = this.volume
        this.adjustVolume(0)
      } else {
        this.soundIconClass = 'volumeIcon'
        this.adjustVolume(this.tempVolume)
      }
    },
    // 调节音量
    adjustVolume (volumeParam) {
      this.volume = volumeParam
      console.log('改变音量:' + volumeParam)
    },
    // 填装歌曲
    loadMusic () {
      // 设置音乐路径
      // this.player.setAttribute('src', this.musicList[0].src)
      this.player.src = this.musicList[0].src
      // 加载
      this.player.play()
      // 获取音乐时长
      this.duration = this.player.duration
      console.log('获取音乐时长' + this.player.duration)
    },
    // 判断是否已经填装了歌曲
    isLoadMusic () {
      // 返回个布尔值而不是可转换的布尔
      return Boolean(this.player.getAttribute('src'))
    }
  }
}
</script>

<style scoped>
  /*顶部框*/
  #header {
    position: fixed;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 80px!important;
    background-color: #FF6600;
    box-shadow:0px 0px 40px 20px #F87408 inset;
    top: 0px;
  }

  /* 底部框*/
  #footer {
    background-color: #FF6600;
    box-shadow:0px 0px 40px 20px #F87408 inset;
    position: fixed;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 80px!important;
    bottom: 0px;
  }
  /*播放器*/
  #palyerController{
    height:80px;
    line-height: 80px;
  }
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
  #forward {
    background-image: url(../assets/上一曲.png);
  }
  .playIcon {
    background-image: url(../assets/播放.png);
  }
  .pauseIcon {
    background-image: url(../assets/暂停.png);
  }
  #next {
    background-image: url(../assets/下一曲.png);
  }
  .volumeIcon {
    background-image: url(../assets/音量.png);
    width: 32px;
    height: 32px;
  }
  .mutedIcon {
    background-image: url(../assets/静音.png);
    width: 32px;
    height: 32px;
  }
  #musicImage {
    background-image: url(../assets/歌曲图片.jpg);
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
  #musicList {
    background-image: url(../assets/列表.png);
    background-size: 30px 30px;
    width: 30px;
    height: 30px;
  }

  /* 改变鼠标样式 */
  .conBtn, #musicImage, #menuBtn{
    cursor:pointer;
  }

  /*中间的主要内容*/
  #main {
    position: fixed;
    top: 80px;
    bottom: 80px;
    right: 20%;
    left: 20%;
    margin: 0px auto;
  }
</style>
