<template>
    <!-- App -->
    <div id="app">
        <Loading></Loading>
        <router-view></router-view>
    </div>
</template>
<script>
  import Loading from 'components/loading/loading.vue'

  export default {
    data () {
      return {}
    },
    created: function () {
    },
    methods: {},
    computed: {},
    components: {Loading}
  }
</script>
<style lang="scss" type="text/css">
    @import "css/global.scss";
</style>
