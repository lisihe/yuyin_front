<template>
  <div>
    <EasyScrollbar >
      <div  id="wrapper" style="height: 500px">
        <el-table
          :data="tableData"
          size="mini"
          style="width: 100%">
          <el-table-column
            type="index"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="歌曲名"
            width="150">
          </el-table-column>
          <el-table-column
            prop="singer"
            label="歌手"
            width="120">
          </el-table-column>
          <el-table-column
            prop="album"
            label="专辑"
            width="150">
          </el-table-column>
          <el-table-column
            prop="duration"
            label="时长"
            width="80">
          </el-table-column>
          <el-table-column
            label="操作"
            width="170">
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-service" size="mini" circle></el-button>
              <el-button type="success" icon="el-icon-download" size="mini" circle></el-button>
              <el-button type="danger" icon="el-icon-star-off" size="mini" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :total="50">
        </el-pagination>
      </div>
    </EasyScrollbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '单曲',
      tableData: [
        {
          name: '心愿',
          singer: '四个女生',
          album: '心愿',
          duration: '02:42'
        }, {
          name: '心愿便利贴',
          singer: '吴忠明/元若蓝',
          album: '命中注定我爱你',
          duration: '04:12'
        }, {
          name: '心愿rixta',
          singer: 'Anzar',
          album: '心愿rixta',
          duration: '04:37'
        }, {
          name: '心愿',
          singer: '王睿卓/张钰琪',
          album: '中国新声代第二季',
          duration: '04:31'
        }, {
          name: '心愿',
          singer: '许巍',
          album: '此时此刻',
          duration: '05:15'
        }, {
          name: '心愿便利贴',
          singer: '时致/七个夏洛克',
          album: '《百川》',
          duration: '04:16'
        }, {
          name: '星语心愿',
          singer: '张柏芝',
          album: '张柏芝',
          duration: '04:16'
        }, {
          name: '心愿',
          singer: '郑心',
          album: '刚好遇见你',
          duration: '2:40'
        }, {
          name: '心愿(伴奏) - instrumental',
          singer: '黄莺莺',
          album: '最初之莺',
          duration: '03:14'
        }, {
          name: '心愿便利贴（甜美女声版）',
          singer: '小可学妹',
          album: '心愿便利贴',
          duration: '04:16'
        }
      ]
    }
  }
}
</script>
<style>
</style>
