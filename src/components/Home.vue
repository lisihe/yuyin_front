<template>
  <el-container id="yuyin" style="">
    <el-header id="header">
      <NavBar/>
    </el-header>
    <el-main id="main" >
      <el-container style="height:100%; width: 1200px; margin: 0px auto; overflow: hidden">
        <el-aside style=" height:700px; marginTop: 20px; width: 250px; overflow: hidden; ">
          <EasyScrollbar>
            <div id="wrapper" style="height: 700px; width: 250px; ">
              <Menu/>
            </div>
          </EasyScrollbar>
        </el-aside>
        <el-main style="padding: 10px; width: 950">
          <EasyScrollbar>
            <div id="wrapper" style="height: 700px; margin: 10px">
              <router-view/>
            </div>
          </EasyScrollbar>
        </el-main>
      </el-container>
    </el-main>
    <el-footer id="footer" >
      <PlayBar/>
    </el-footer>
    <el-dialog :visible.sync="lyricDialogVisible" width="60%" height="40%">
      <LyricsPage/>
    </el-dialog>
    <el-dialog :visible.sync="musicListDialogVisible" width="30%" >
      <MusicList/>
    </el-dialog>
  </el-container>
</template>

<script>
import LyricsPage from '@/components/LyricsPage'
import MusicList from '@/components/MusicList'
import NavBar from '@/components/NavBar'
import PlayBar from '@/components/PlayBar'
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
      musicListDialogVisible: false
    }
  },
  created () {
    // 默认进入主页
    this.$router.push({name: 'homepage'})
  },
  components: {
    LyricsPage,
    MusicList,
    NavBar,
    PlayBar,
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
  }
}
</script>

<style scoped>
  #yuyin {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  /*顶部框*/
  #header {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 80px!important;
    background-color: #FF6600;
    box-shadow:0px 0px 40px 20px #F87408 inset;
  }
  /*中间*/
  #main {
    position: absolute!important;
    top: 80px;
    right: 0px;
    left: 0px;
    bottom: 80px;
    padding: 0px;
  }
  /* 底部框*/
  #footer {
    background-color: #FF6600;
    box-shadow:0px 0px 40px 20px #F87408 inset;
    position: absolute;
    left: 0px;
    right: 0px;
    width: 100%;
    bottom: 0px;
    height: 80px!important;
  }

  /*中间的主要内容*/
  #main {
    float:left;
    position: fixed;
    right: 0%;
    left: 0%;
    margin:0px auto;
    top: 80px;
    bottom: 80px;
    min-width: 1200px;
  }
</style>
