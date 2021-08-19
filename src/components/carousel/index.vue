<template>
  <div class="warp">
      <el-carousel :interval="4000" type="card" height="440px">
          <el-carousel-item v-for="(item, index) in items" :key="index">
              <div class="nft_item"><img :src="item.src" alt=""></div>
              <div class="info">
                  <div class="box">
                      <div class="content" @click="go">Zhefuhuafeichaohaokandajiakuaimaia!!!</div>
                      <div class="auc">
                          <div class="usr">@CaiCai Zi</div>
                          <div class="bid">Bid <span>1251.52</span> ETH</div>
                          <div class="time">21h 18m 16s</div>
                      </div>
                  </div>
              </div>
          </el-carousel-item>
      </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        Height: '440'
    }
  },
  props: {
      items: {
          default: ''
      }
  },
  methods: {
      go () {
          this.$router.push({name: 'assets'})
      }
  },
  created() {},
  mounted() {},
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
  @import '../../assets/style.less';
  .warp {
      .carousel-box {
          height: 440px;

          @media screen and (min-width: 40em) {
              .carousel-box.el-carousel.el-carousel--horizontal.el-carousel--card > .el-carousel__container {
                  height: 280px;
              }
              height: 280px;
          }

          @media screen and (min-width: 52em) {
              .carousel-box.el-carousel.el-carousel--horizontal.el-carousel--card > .el-carousel__container {
                  height: 370px;
              }
              height: 370px;
          }

          @media screen and (min-width: 60em) {
              .carousel-box.el-carousel.el-carousel--horizontal.el-carousel--card > .el-carousel__container {
                  height: 440px;
              }
              height: 440px;
          }
      }

      .el-carousel__item.is-active.el-carousel__item--card.is-in-stage {
          opacity: 1;
      }

      .el-carousel__item {
          background-color: rgba(0, 0, 0, 1);
          /*background-color: #fff;*/
          /*box-shadow: 0 0 4px 4px rgba(100, 100, 100, 0.1);*/
          opacity: .6;
      }

      .el-carousel__item:nth-child(2n+1) {
          /*opacity: .5;*/
      /*  background-color: rgba(0, 0, 0, .1);*/
      }

      .nft_item {
          height: 100%;
          display: flex;
          align-items: center;

          img {
              margin: 0 auto;
          }
      }

      .info {
          height: 440px;
          position: relative;
          top: -440px;
          display: flex;
          align-items: flex-end;

          .box {
              padding: 10px;
              text-align: left;
              background-color: rgba(0, 0, 0, .8);
              color: #fff;
              /*font-weight: 800;*/
              line-height: 28px;
              flex: auto;
              font-size: 20px;
          }

          .auc {
              display: flex;

              div {
                  flex: 1;
              }

              .usr {

              }

              .bid {
                  text-align: center;

                  span {
                      font-size: 26px;
                  }
              }
              .time {
                  text-align: right;
              }
          }

          .content {
              line-height: 20px;
              padding-bottom: 16px;
              text-decoration: underline;
          }
      }

    @media screen and (max-width: @mobileWidth) {

    }
    @media screen and (min-width: @desktopWidth) {

    }
  }
</style>
