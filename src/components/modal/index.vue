<template>
  <div class="warp">
      <ul>
          <li>123</li>
          <li>321</li>
          <li>123</li>
          <li>321</li>
      </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
    }
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
  @import '../../assets/style.less';
  .warp {
    position: relative;
    /*left: -200px;*/
    width: 200px;
    height: 100%;
    box-shadow: 0 0 10px 10px rgba(100, 100, 100, 0.1);
    background: #fff;

      li  {
          padding: 6px 10px;
      }

    @media screen and (max-width: @mobileWidth) {

    }
    @media screen and (min-width: @desktopWidth) {

    }
  }
</style>
