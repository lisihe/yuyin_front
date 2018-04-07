<template>
  <div>
    <el-tabs v-model="first" type="card" @tab-click="handleClick">
      <el-tab-pane label="单曲" name="first"><MusicPage/></el-tab-pane>
      <el-tab-pane label="歌手" name="second"><SingerPage/></el-tab-pane>
      <el-tab-pane label="专辑" name="third"><AlbumPage/></el-tab-pane>
      <el-tab-pane label="歌单" name="fourth"><SongSheetPage/></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import AlbumPage from '@/components/searchPage/albumPage'
import MusicPage from '@/components/searchPage/musicPage'
import SingerPage from '@/components/searchPage/singerPage'
import SongSheetPage from '@/components/searchPage/songSheetPage'
export default {
  data () {
    return {
      title: '搜索结果'
    }
  },
  components: {
    AlbumPage,
    MusicPage,
    SingerPage,
    SongSheetPage
  }
}
</script>
<style>
</style>
