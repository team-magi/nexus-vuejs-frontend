<template>
  <div class="wrap">
    <div class="auctions">
      <div class="tipsH1">Nft Marketplace</div>

      <div class="art-works">
        <div class="cm">
          <div class="art-work-card" v-for="(item, index) in auctions" :key="index" @click="go(item)">
            <div class="card-show">
              <div class="box-modal"></div>
              <div class="box">
                <img class="md" :src="item.src" alt="">
              </div>
            </div>

            <div class="art-work-info">
              <div class="p6">{{item.title}}</div>
            </div>

            <div class="art-work-info">
              <p class="p6">{{item.user}}</p>
              <div class="price">
                <div class="bid"><span>{{item.price}}</span> ETH</div>
                <div class="time">{{item.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      auctions: [{
        src: require('@/assets/images/nft/1.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/1.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/2.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/3.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/4.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/5.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/1.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/2.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/3.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/4.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      },{
        src: require('@/assets/images/nft/5.jpg'),
        title: 'Test NFT Auctions',
        user: 'GuoGuo Mei',
        price: '0.5',
        time: '21h 51m 11s',
        id: '4115'

      }],

      currentDate: new Date()
    }
  },
  provide() {},
  watch: {},
  methods: {
    go (item) {
      this.$router.push({name: 'assets', params: {
          param: item
        }})
    }
  },
  created() {},
  mounted() {},
  computed: {},
}
</script>
<style lang="less">
  .carousel {
    padding: 70px 0;
    /*background-color: #f5f5f5;*/
  }


  .auctions {
    box-sizing: border-box;
    margin: 0;
    min-width: 0;
    width: 100%;
    max-width: 1600px;
    margin-left: auto;
    margin-right: auto;
    padding: 70px 24px 170px;
    position: relative;
    z-index: 4;
  }

  .art-works {
    box-sizing: border-box;
    margin: 0;
    padding: 0 20px;
    min-width: 0;
    display: grid;
    grid-gap: 32px;

    .cm {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(1,1fr);


      @media screen and (min-width: 40em) {
        grid-gap: 24px;
        grid-template-columns: repeat(2,1fr);
      }
      @media screen and (min-width: 54em) {
        grid-gap: 32px;
        grid-template-columns: repeat(3,1fr);
      }
      @media screen and (min-width: 66em) {
        grid-gap: 32px;
        grid-template-columns: repeat(4,1fr);
      }
    }

    .art-work-card {
      box-sizing: border-box;
      margin: 0;
      min-width: 0;
      display: flex;
      background-color: var(--theme-ui-colors-white-100,#FFFFFF);
      flex: auto;
      flex-direction: column;
      justify-content: space-between;
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 10px 10px #eaeaea;
      transition: all 300ms cubic-bezier(0.23,1,0.32,1);
      text-decoration: none;
      color: inherit;
      position: relative;
      will-change: transform;
      cursor: pointer;


      .card-show {
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        position: relative;
        overflow: hidden;

        .box-modal {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          width: 100%;
          height: 0;
          padding-bottom: 100%;
        }
        .box {
          box-sizing: border-box;
          margin: 0;
          min-width: 0;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background-color: var(--theme-ui-colors-black-5,#F2F2F2);
          display: flex;
          justify-content: center;
          align-items: center;

          img, video {
            height: auto;
            max-width: 100%;
          }

          .md {
            box-sizing: border-box;
            margin: 0;
            width: 100%;
            height: 100%;
            min-width: 0;
            max-width: 100%;
            display: block;
            object-fit: cover;
            background-color: var(--theme-ui-colors-white-100,#FFFFFF);
            flex: auto;
            flex-direction: column;
            /*border-radius: 10px;*/
            overflow: hidden;
            box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
            transition: all 300ms cubic-bezier(0.23,1,0.32,1);
            text-decoration: none;
            color: inherit;
            position: relative;
            will-change: transform;
          }
        }
      }
    }
    .art-work-info {
      padding-top: 6px;
      font-size: 18px;
      color: #272727;
      text-align: left;
      font-weight: 600;

      .p6 {
        padding-right: 6px;
        padding-left: 6px;
      }
      p {
        font-size: 16px;
        padding: 8px 0;
      }
      .price {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        background-color: #1d1d1d;
        border-radius: 10px;
        padding: 8px 10px;
        color: #fff;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        .bid {
          font-size: 16px;
          font-weight: 600;

          span {
            font-weight: 800;
            font-size: 26px;
          }
        }

        .time {
          font-size: 18px;
          font-weight: 600;
          color: #e4e2e2;
        }
      }
    }

  }



  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .tipsH1 {
    padding: 10px 0 50px;
    font-size: 32px;
    color: #323232;
  }


</style>
