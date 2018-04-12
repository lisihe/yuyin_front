<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="5"><div style="fontSize: 16px; lineHeight: 16px; color: green">空间情况</div></el-col>
      <el-col :span="5">已用: 2.5G</el-col>
      <el-col :span="9"><el-progress type="line" :percentage="25" :stroke-width="16" :show-text="false"></el-progress></el-col>
      <el-col :span="5">总共: 10G</el-col>
    </el-row>
    <el-row style="marginTop:10px">
      <el-col :span="24">
        <EasyScrollbar >
          <div  id="wrapper" style="height: 300px">
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
                width="120">
              </el-table-column>
              <el-table-column
                prop="singer"
                label="歌手"
                width="100">
              </el-table-column>
              <el-table-column
                prop="size"
                label="大小"
                width="50">
              </el-table-column>
              <el-table-column
                prop="datetime"
                label="上传时间"
                width="80">
              </el-table-column>
              <el-table-column
                label="操作">
                <template slot-scope="scope">
                  <el-button type="danger" size="mini" icon="el-icon-delete" ></el-button>
                  <el-button type="success" icon="el-icon-share" size="mini" ></el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
        </EasyScrollbar>
      </el-col>
    </el-row>
    <el-row :gutter="10" style="marginTop:10px">
      <el-col :span="5"><el-button size="small" type="success">扩大空间</el-button></el-col>
      <el-col :span="19">
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button size="small" type="primary">上传音乐</el-button>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '音乐空间',
      tableData: [
        {
          name: '歌曲1',
          singer: '歌手1',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲2',
          singer: '歌手2',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲3',
          singer: '歌手3',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲4',
          singer: '歌手4',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲5',
          singer: '歌手5',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲6',
          singer: '歌手6',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲7',
          singer: '歌手7',
          size: '6Mb',
          datetime: '2018-4-7'
        }, {
          name: '歌曲8',
          singer: '歌手8',
          size: '6Mb',
          datetime: '2018-4-7'
        }
      ]
    }
  },
  methods: {
    handlePreview () {
      console.log('准备上传')
    }
  }
}
</script>
<style>
</style>
