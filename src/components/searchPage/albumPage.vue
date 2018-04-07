<template>
  <div>
    {{title}}
    <EasyScrollbar >
      <div  id="wrapper" style="height: 500px">
      </div>
    </EasyScrollbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '专辑'
    }
  }
}
</script>
<style>
</style>
