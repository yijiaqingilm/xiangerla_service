<template>
    <div>
        <div><i class="icon-jmui icon-jmui-error"></i></div>
        <div>{{msg}}</div>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: '无效的访问页面'
      }
    },
    created () {
      if (this.$route.query && this.$route.query.message) {
        this.msg = this.$route.query.message
      }
    }
  }
</script>
<style lang="scss" scoped type="text/css">
</style>
