<template>
  <div>
    <EasyScrollbar >
      <div id="wrapper" style="height: 400px;">
        <el-table
        :data="musicList"
        row-class-name="musiclist"
        style="width: 100%"
        size="small"
        highlight-current-row
        ref="musicList"
        @cell-click="doClick">
          <el-table-column
            prop="name"
            label="歌曲名称"
            width="110">
          </el-table-column>
          <el-table-column
            prop="singer"
            label="歌手"
            width="110">
          </el-table-column>
          <el-table-column
            prop="duration"
            label="时长"
            width="80">
          </el-table-column>
          <el-table-column
            label="操作"
            width="130">
            <template slot-scope="scope">
              <el-button type="danger" size="mini" icon="el-icon-delete" ></el-button>
              <el-button type="success" icon="el-icon-share" size="mini" ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </EasyScrollbar>
  </div>
</template>
<script>
// 辅助函数，帮助生成计算属性
import { mapState } from 'vuex'
import VueScrollbar from 'vue2-scrollbar'
require('vue2-scrollbar/dist/style/vue2-scrollbar.css')
export default {
  data () {
    return {
      title: '歌曲列表',
      opt: {
        barColor: 'red'
      }
    }
  },
  components: {
    VueScrollbar
  },
  mounted () {
    // 第一次挂载设置高亮
    this.$refs.musicList.setCurrentRow(this.musicList[this.musicIndex])
  },
  computed: {
    ...mapState([
      'loginState',
      'musicList',
      'musicIndex'
    ])
  },
  watch: {
    musicIndex: function () {
      this.$refs.musicList.setCurrentRow(this.musicList[this.musicIndex])
    }
  },
  methods: {
    doClick (row, col, cell, event) {
      let changeIndex = 0
      changeIndex = this.musicList.findIndex((e) => {
        return e.name === row.name
      })
      this.$store.commit({
        type: 'changeMusicIndex',
        musicIndex: changeIndex
      })
    },
    indexMethod (index) {
      return index++
    },
    close () {
      console.log('关闭窗口')
      this.$emit('update:visible', false)
      // 清除表单数据
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style>
.musiclist{
  cursor: pointer;
}
</style>
