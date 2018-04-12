<template>
  <div>
    {{title}}
    <EasyScrollbar >
      <div  id="wrapper" style="height: 400px">
      </div>
    </EasyScrollbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '歌手'
    }
  }
}
</script>
<style>
</style>
