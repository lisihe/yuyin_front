<template>
  <div>
    <el-menu mode="vertical" background-color="#fff" active-text-color="#FF6600"  >
      <el-menu-item index="1">
        <i class="el-icon-star-on"></i>
        <span slot="title">喜欢的音乐</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-circle-plus"></i>
          <span>创建的歌单</span>
        </template>
        <el-menu-item index="2-1">考研激励歌曲</el-menu-item>
        <el-menu-item index="2-2">安静学习</el-menu-item>
        <el-menu-item index="2-3">纯音乐</el-menu-item>
        <el-menu-item index="2-4">rap</el-menu-item>
        <el-menu-item index="2-5">嘻哈歌曲</el-menu-item>
        <el-menu-item index="2-6">摇滚歌曲</el-menu-item>
        <el-menu-item index="2-7">2018</el-menu-item>
        <el-menu-item index="2-8">2017</el-menu-item>
        <el-menu-item index="2-9">跑步时</el-menu-item>
        <el-menu-item index="2-10">周杰伦</el-menu-item>
        <el-menu-item index="2-11">许嵩</el-menu-item>
        <el-menu-item index="2-12">陈奕迅</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="yuyin-love"></i>
          <span> 收藏的歌单</span>
        </template>
        <el-menu-item index="3-1">欧美冷门良曲了解一下？</el-menu-item>
        <el-menu-item index="3-2">适合做视频的各种bgm</el-menu-item>
        <el-menu-item index="3-3">21世纪头十年经典流行老歌</el-menu-item>
        <el-menu-item index="3-4">2017年度最受欢迎个性推荐歌曲</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import VueScrollbar from 'vue2-scrollbar'
import '@/assets/icon/iconfont.css'
export default {
  data () {
    return {
      title: '菜单'
    }
  },
  components: {
    VueScrollbar
  }
}
</script>
<style>
.my-scrollbar{
  width: 100%;
  max-height: 100%;
}
</style>
