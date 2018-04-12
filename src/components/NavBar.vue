<template>
  <el-row type="flex" justify="space-around" >
    <el-col :span="17"  id="navBar" style="width: 1200px; margin: 0px auto; min-width: 1200px">
      <el-row type="flex" justify="space-between" align="middle" :gutter="10">
        <el-col :span="4" >
          <div id="logo">
            <img src="../assets/logo.png" height="80" style="float: left"/>
            <div height="80px" style="float: right">余音</div>
          </div>
        </el-col>
        <el-col :span="2">
          <div id="skip">
            <span id="skip-right">&gt;</span>
            <span id="skip-left">&lt;</span>
          </div>
        </el-col>
        <el-col :span="9">
          <div id="searchBar">
            <el-input :placeholder="searchPlaceHolder" v-model="searchText">
              <el-button slot="append" icon="el-icon-search" @click="doSearch"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div @click="musicSpaceDialogVisible = true" style="cursor:pointer;">音乐空间</div>
        </el-col>
        <el-col :span="3">
          <div @click="chatDialogVisible = true" style="cursor:pointer;">我的好友</div>
        </el-col>
        <el-col :span="4">
          <div id="profile" @click="loginDialogVisible = true">
            <div id="portrait">
            </div>
            <div style="float: left; line-height: 80px; margin-left: 20px">{{loginState===0 ? '请登录' : username}}</div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-dialog ref="chatDialog" title="音乐好友" style="padding: 0px" :visible.sync="chatDialogVisible" width="800px" top="30px"  append-to-body center>
      <Chat :visible.sync="chatDialogVisible"/>
    </el-dialog>
    <el-dialog ref="loginDialog" :visible.sync="loginDialogVisible" width="350px" height="500px" append-to-body center>
      <Login :visible.sync="loginDialogVisible"/>
    </el-dialog>
    <el-dialog ref="musicSpaceDialog" title="我的音乐空间" :visible.sync="musicSpaceDialogVisible" width="600px" append-to-body center>
      <MusicSpace :visible.sync="musicSpaceDialogVisible"/>
    </el-dialog>
    <el-dialog ref="searchPageDialog" :title="'\''+ searchText + '\'  搜索结果'" :visible.sync="searchPageDialogVisible" width="800px" top="30px" append-to-body center>
      <SearchPage :visible.sync="searchPageDialogVisible"/>
    </el-dialog>
  </el-row>
</template>
<script>
import Login from '@/components/login'
import MusicSpace from '@/components/MusicSpace'
import Chat from '@/components/Chat'
import SearchPage from '@/components/searchPage/SearchPage'
// 辅助函数，帮助生成计算属性
import { mapState } from 'vuex'
export default {
  data () {
    return {
      title: '导航条',
      searchPlaceHolder: '歌曲/歌手',
      loginDialogVisible: false,
      musicSpaceDialogVisible: false,
      chatDialogVisible: false,
      searchPageDialogVisible: false,
      searchText: ''
    }
  },
  computed: {
    ...mapState([
      'loginState',
      'username'
    ])
  },
  components: {
    Login,
    MusicSpace,
    Chat,
    SearchPage
  },
  methods: {
    doSearch () {
      this.searchPageDialogVisible = true
    }
  }
}
</script>
<style>
  @font-face {
    font-family: 'shuyuanjianti';
    src: url(../assets/fonts/汉仪舒圆黑简.ttf);
  }
  @font-face {
    font-family: 'qingkong';
    src: url(../assets/fonts/汉仪晴空体简.ttf);
  }
  #navBar {
  }
  #navBar #logo {
    font-family: 'shuyuanjianti';
    line-height: 80px;
    font-size: 50px;
  }
  #navBar #skip {
    font-family: 'qingkong';
    color: #fff;
    font-size: 25px;
    width: 150px;
  }
  #skip-right {
    float: right;
    margin: 0px;
    padding: 5px 15px;
    border:2px solid;
    border-radius:0px 15px 15px 0px;
  }
  #skip-left {
    float: right;
    margin: 0px;
    padding: 5px 15px;
    border:2px solid;
    border-radius: 15px 0px 0px 15px;
  }
  #searchBar {
    width: 250px;
    margin: 0px auto;
  }
  /* 头像 */
  #portrait {
    width: 60px;
    height: 60px;
    float: left;
    background: no-repeat;
    background-image: url(../assets/portrait.jpg);
    background-size: 70px 70px;
    border: 1px #fff solid;
    border-radius: 50px;
    margin: 10px;
  }
  /* 改变鼠标样式 */
  #navBar #skip, #navBar #logo, #profile {
    cursor:pointer;
  }
</style>
