<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 style="background: #777; height: 100%">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    <el-row>
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px', height: '400px'}">
          <img src="../../assets/musicImg/0003.jpg" class="image">
          <div style="padding: 14px;">
            <span>好吃的汉堡</span>
            <div class="bottom clearfix">
              <time class="time">{{ currentDate }}</time>
              <el-button type="text" class="button">操作按钮</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
      <el-col :span="6"></el-col>
    </el-row>
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
.image {
    height: 70%;
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
