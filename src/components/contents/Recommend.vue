<template>
  <div style="">
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item >
        <!-- <h3 style="background: #777; height: 100%">{{ item }}</h3>-->
        <img style="width:100%; height: 100%;" src="../../assets/mubu/1.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <!-- <h3 style="background: #777; height: 100%">{{ item }}</h3>-->
        <img style="width:100%; height: 100%;" src="../../assets/mubu/2.jpg"/>
      </el-carousel-item>
      <el-carousel-item >
        <!-- <h3 style="background: #777; height: 100%">{{ item }}</h3>-->
        <img style="width:100%; height: 100%;" src="../../assets/mubu/3.jpg"/>
      </el-carousel-item>
    </el-carousel>
    <div class="grid">
      <div class="grid-item" v-for="id in 10" :key="id">
        <el-card :body-style="{ padding: '0px', height: '250px'}" >
          <img :src="require('../../assets/musicImg/' + id + '.jpg')" class="image">
          <div style="padding: 14px;">
            <span>专辑{{id}}</span>
          </div>
        </el-card>
      </div>
    </div>
    <el-pagination style="margin-top: 20px"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '推荐页面'
    }
  }
}
</script>
<style>
.grid {
  display: flex;
  flex-flow: wrap;
  /*justify-content: space-between;*/
}
.grid-item {
  flex: 0 0 200px;
  margin-top: 13px;
  margin-left: calc((100% - 800px) / 5);
  cursor:pointer; /* 鼠标样式 */
}
.image {
    width: 100%;
    max-height:200px;
    display: block;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
