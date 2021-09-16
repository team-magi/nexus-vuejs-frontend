<template>
  <div class="wrap">
    <div class="carousel">
      <carousel :items="hotList"></carousel>
    </div>

    <div class="auctions">
      <div class="tipsH1">Trending auctions</div>
      <div class="art-works">
        <div class="cm">
          <div class="art-work-card" v-for="(item, index) in auctions" :key="index" @click="go(item)">
            <div class="card-show">
              <div class="box-modal"></div>
              <div class="box">
                <img class="md" :src="item.img_url" alt="">
              </div>
            </div>

            <div class="art-work-info">
              <div class="p6">{{item.title}}</div>
<!--              <div class="p6">{{item.name}}</div>-->
            </div>

            <div class="art-work-info">
              <p class="p6">@{{item.user}}</p>
              <div class="price">
<!--                <div class="bid"><span>{{item.current_price}}</span> ETH</div>-->
                <!--                <div class="time">{{item.created_at}}</div>-->
                <div class="bid"><span>{{item.price}}</span> ETH</div>
                <div class="time">{{item.time}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--    <img src="../assets/images/nft/0be7ce7dg00quoase04hrd200k000b9g00it00ak.gif.gif" alt="">-->
  </div>
</template>

<script>
import {EventBus} from '../event-bus'
import carousel from '../components/carousel'
import common from '@/common'


export default {
  components: {
    carousel
  },
  data() {
    return {
      eventBus: EventBus,
      hotList: [
        {
          title: 'NFT1作品',
          img_url: require('@/assets/images/nft/0b1f0fa6g00quoaro046wd200k000b9g00it00ak.gif'),
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'
        }, {
          title: 'NFT1作品',
          img_url: require('@/assets/images/nft/0bac5b3dg00quoay6042yd200k000b9g00it00ak.gif'),
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'
        }, {
          title: 'NFT1作品',
          img_url: require('@/assets/images/nft/0be7ce7dg00quoase04hrd200k000b9g00it00ak.gif'),
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'
        }, {
          title: 'NFT1作品',
          img_url: require('@/assets/images/nft/4.jpg'),
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'
        }, {
          title: 'NFT1作品',
          img_url: require('@/assets/images/nft/5.jpg'),
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'
        }
      ],
      auctions: [
        {
          src: require('@/assets/images/nft/1.jpg'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        },{
          img_url: require('@/assets/images/nft/0b1f0fa6g00quoaro046wd200k000b9g00it00ak.gif'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        },{
          img_url: require('@/assets/images/nft/0bac5b3dg00quoay6042yd200k000b9g00it00ak.gif'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        },{
          img_url: require('@/assets/images/nft/0be7ce7dg00quoase04hrd200k000b9g00it00ak.gif'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        },{
          img_url: require('@/assets/images/nft/4.jpg'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        },{
          img_url: require('@/assets/images/nft/5.jpg'),
          title: 'Test NFT Auctions',
          user: 'GuoGuo Mei',
          price: '0.5',
          time: '21h 51m 11s',
          id: '4115',
          link: 'https://opensea.io/assets/0x922a6ac0f4438bf84b816987a6bbfee82aa02073/4001'

        }
      ],
      page: 1,
      size: 10,

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
    },

    getCarouselList() {

      this.$api.getNftList({type: 1}).then(res => {

        res.data.map(dt => {

          dt.img_url = common.IMG_HOST + dt.url
          dt.created_at = this.fmtTime(dt.created_at)
        })

        // this.hotList = res.data
      })
    },

    getHotMarketList(page, size) {

      this.$api.getNftList({page: page, pageSize: size, type: 2}).then(res => {

        console.log(res)
        res.data.map(dt => {

          dt.img_url = common.IMG_HOST + dt.url
          dt.created_at = this.fmtTime(dt.created_at)
        })

        // this.auctions = res.data
      })
    },

    returnDateAT(t) {
      let time = new Date(t)

      return new Date(time.replace(/-/g, '/').replace('T', ' ')).toISOString()
    },

    fmtTime (time) {
      let date = new Date(time);

      let chinaDate = date.toDateString();
      let globalDate = date.toUTCString();
      let chinaDateArray = chinaDate.split(' ');
      let displayDate = `${chinaDateArray[1]} ${chinaDateArray[2]}, ${chinaDateArray[3]}`;
      console.log(displayDate)
    }
  },
  created() {
    this.getHotMarketList(this.page, this.size)
    this.getCarouselList()

    // this.$api.getNftList(JSON.stringify({
    //   page: 1,
    //   pageSize: 10,
    // })).then(res => {
    //   console.log(res);
    // });

    // this.$api.getNftById({
    //     id: 3
    // }).then(res => {
    //   console.log(res);
    // });
  },
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
    padding: 0 24px 170px;
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
    padding-top: 18px;
    padding-bottom: 50px;
    font-size: 32px;
    color: #323232;
  }


</style>
