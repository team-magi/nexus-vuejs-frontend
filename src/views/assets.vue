<template>
  <div class="wrap">
    <div class="assetMedia">
      <div class="itemMedia">
        <div class="item-frame">
          <div class="flex-section">
            <div class="flex-media">
              <div class="flex-media-img">
                <div class="mag">
                  <img src="../assets/images/nft/hdy.jpg" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="item-title">环保女孩 How dare you?</div>

        <div class="control">
          <div class="bid">
            <div class="current">
              <div class="title">Current Bid</div>
              <div class="font34">2.17</div>
              <div class="font24" style="font-size: 16px">ETH</div>
            </div>

            <div class="ending">
              <div class="title">Time Remaining
                <!--              <el-tooltip popper-class="atooltip" content="When there are five minutes or less left in the auction, a successful bid resets the countdown to five minutes." effect="dark" placement="top" fullscreen>-->
                <!--                <a class="ctl_icon"></a>-->
                <!--              </el-tooltip>-->
              </div>
              <div class="time">
                <div class="hh font34">6</div>
                <div class="mm font34">54</div>
                <div class="ss font34">22</div>
              </div>
              <div class="time tips">
                <div class="font24">hours</div>
                <div class="font24">minutes</div>
                <div class="font24">seconds</div>
              </div>
            </div>
          </div>
          <div class="btn-bid">Bid</div>
        </div>
      </div>
    </div>

    <div class="block-frame">
      <div class="description">
        <div class="description-title">Description</div>
        <div class="description-content">Greta Tintin Eleonora Ernman Thunberg (Swedish: [ˈɡrêːta ˈtʉ̂ːnbærj] (About this soundlisten); </div>
      </div>

      <ul class="history">
        <li>View on Etherscan</li>
        <li>View on IPFS</li>
        <li>View IPFS Metadata</li>
      </ul>
    </div>
  </div>
</template>


<script>
import {EventBus} from '../event-bus'


export default {
  components: {},
  data() {
    return {
      eventBus: EventBus,
      auctions: {
        title: 'NFT1作品',
        src: require('@/assets/images/nft/1.jpg')
      },

      currentDate: new Date()
    }
  },
  provide() {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
  computed: {},
}
</script>
<style lang="less">
  .carousel {
    padding: 70px 0;
  }

  .assetMedia {
    display: flex;
    width: 100%;
    padding: 70px 0px;
    margin: 0 auto;
    flex-direction: row;

    /*flex-direction: column;*/

    /*@media screen and (min-width: 40em) {*/

    /*}*/
    @media screen and (max-width: 54em) {
      flex-direction: column;
      padding: 0px 0px 30px;
    }

    /*@media screen and (min-width: 66em) {*/
      /*width: 100%;*/
      /*padding: 0px 0px 70px;*/
    /*}*/
    @media screen and (min-width: 85em) {
      width: 1360px;
      /*flex-direction: row;*/
    }

    div {
      flex: 1;
      text-align: left;
    }

    .itemMedia {
      flex: 3 0 0%;
      max-width: 50%;
      width: 0px;


      @media screen and (max-width: 54em) {
        width: 100%;
        max-width: 100%;
      }

      @media screen and (min-width: 66em) {
        max-width: 50%;
        width: 0px;
      }

      .item-frame {
        margin: 20px;
        border-radius: 5px;
        /*border: 1px solid rgb(229, 232, 235);*/
        overflow: hidden;
        background: #000;

        .flex-section {
          box-sizing: border-box;

          .flex-media:hover {
            /*box-shadow: 1px 1px 10px 10px #eaeaea;*/
            /*top: 6px;*/
          }
          .flex-media {
            cursor: pointer;
            max-height: 1000px;
            width: 100%;
            min-height: 500px;

            .flex-media-img {
              display: flex;
              width: 100%;
              height: 100%;
              min-height: inherit;
              border-radius: inherit;
              -webkit-box-align: center;
              align-items: center;
              -webkit-box-pack: center;
              justify-content: center;
              flex-direction: column;

              .mag {
                -webkit-box-align: center;
                align-items: center;
                display: flex;
                -webkit-box-pack: center;
                justify-content: center;
                max-height: 100%;
                max-width: 100%;
                overflow: hidden;
                position: relative;
                border-radius: 5px;
              }

              img {
                width: auto;
                height: auto;
                border-radius: initial;
                max-width: 100%;
                max-height: 100%;
              }
            }
          }
        }
      }
    }

    .item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 0;
      padding: 20px;

      @media screen and (max-width: 54em) {
        width: 100%;
      }
      .item-title {
        /*font-weight: 600;*/
        max-width: 100%;
        /*margin: 16px 0px 0px;*/
        width: 588px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        font-size: 2.125rem;
      }

      .control {
        /*display: flex;*/
      }
      .bid {
        display: flex;
        padding: 44px 0 26px;

        .current,.ending {
          flex-grow: 1;

          div {
            height: 48px;
            line-height: 48px;
          }
        }

        .ending > div.tips {
          padding-top: 0;
        }
        .ending > div {
          display: flex;

          div {
            width: 33.321%;
          }
        }

        div.font34 {
          font-size: 34px;
          font-weight: 500;
        }

        div.font24 {
          font-size: 18px;
          font-weight: 500;
        }
      }
    }
  }

  .block-frame {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 54em) {
      flex-direction: column;
    }

    .description {
      padding: 30px 20px 20px;
      text-align: left;
      flex: 1;

      .description-title {

        padding: 0 0 14px;
        font-size: 1.6rem;
      }

      .description-content {
        max-width: 27rem;
        line-height: 1.6rem;
      }
    }

    .history {
      padding: 20px;
      flex: 1;

      li:hover {
        top: 2px;
        box-shadow: 1px 1px 12px 1px #e5e8eb;
      }
      li {
        position: relative;
        top: 0;
        padding: 16px;
        margin: 10px 0 20px;
        border: 1px solid #eaeaea;
        text-align: left;
        transition: all .2s;
        cursor: pointer;
      }
    }
  }

  .btn-bid {
    width: auto;
    height: 58px;
    line-height: 58px;
    text-align: center!important;
    color: #fff;
    background: #000;
    font-size: 1.25rem;
    align-self: flex-end;
  }
</style>
