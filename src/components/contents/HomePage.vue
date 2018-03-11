<template>
  <div>
    <el-tabs v-model="activeTabs" @tab-click="handleClick" style="">
      <el-tab-pane label="推荐" name="recommend" ></el-tab-pane>
      <el-tab-pane label="排行" name="ranking" ></el-tab-pane>
      <el-tab-pane label="歌单" name="songsheet" ></el-tab-pane>
      <el-tab-pane label="歌手" name="singer" ></el-tab-pane>
      <el-tab-pane label="专辑" name="album" ></el-tab-pane>
    </el-tabs>
    <router-view/>
  </div>
</template>
<script>
export default {
  created () {
    // 默认进入主页
    this.$router.push({name: 'recommend'})
  },
  data () {
    return {
      title: '主页',
      activeTabs: 'recommend'
    }
  },
  methods: {
    handleClick () {
      console.log('click!!')
      this.$router.push({name: this.activeTabs})
    }
  }
}
</script>
<style>
</style>
