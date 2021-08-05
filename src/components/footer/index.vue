<template>
  <div class="warp">

      <div class="btl">
          NEXUS
      </div>
      <div class="tf-box">
          <div class="btl btl-inside">
              NEXUS
          </div>
      </div>
      <div class="content">

          <div>
              <p>Order</p>
              <ul>
                  <li>My account</li>
                  <li>Delivery</li>
                  <li>Return policy</li>
              </ul>
          </div>
          <div>
              <p>Help</p>
              <ul>
                  <li>Customer service</li>
                  <li>Size guide</li>
                  <li>Contact us</li>
              </ul>
          </div>
          <div>
              <p>About us</p>
              <ul>
                  <li>About us (Magento CMS)</li>
                  <li>Customer service (Magento CMS)</li>
                  <li>Store locator</li>
                  <li>order1</li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
import Web3 from "web3";
import util from "@/util";
export default {
  components: {},
  data() {
      return {

      }
  },
  methods: {},
  created() {},
  mounted() {

  },
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
  @import '../../assets/style.less';
  .warp {
      color: #fff;
      height: 360px;
      background-color: #000;
      margin-top: 170px;

      .btl {
          /*padding: 10px 0px 10px 10px;*/
          /*text-align: left;*/
          color: #000;
          font-size: 56px;
          font-weight: 800;
          position: relative;
          top: -38px;
          /*left: -3px;*/
      }

      .tf-box {
          position: relative;
          top: -78px;
          overflow: hidden;

          .btl-inside {
              position: relative;
              top: -38px;
              color: #fff;
          }
      }

      .content {
          position: relative;
          top: -70px;
          display: flex;
          justify-content: space-between;
          text-align: left;

          padding: 0 50px;

          p {
              font-size: 22px;
              font-weight: 600;
              padding-bottom: 10px;
          }
          ul li {
              padding: 8px 0 0;
              cursor: pointer;
          }
      }


      @media screen and (max-width: @mobileWidth) {

      }
      @media screen and (min-width: @desktopWidth) {
          width: @w-1080px;
          margin: 0 auto;
      }
  }
</style>
