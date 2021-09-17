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
        {title: 'Alternate Realities #13',img_url: require('@/assets/images/3d render competition/render-3d-13.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #14',img_url: require('@/assets/images/3d render competition/render-3d-14.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #15',img_url: require('@/assets/images/3d render competition/render-3d-15.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #16',img_url: require('@/assets/images/3d render competition/render-3d-16.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #17',img_url: require('@/assets/images/3d render competition/render-3d-17.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #18',img_url: require('@/assets/images/3d render competition/render-3d-18.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #19',img_url: require('@/assets/images/3d render competition/render-3d-19.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'}
      ],
      auctions: [
        {title: 'Alternate Realities #0',img_url: require('@/assets/images/3d render competition/render-3d-100.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #1',img_url: require('@/assets/images/3d render competition/render-3d-1.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #2',img_url: require('@/assets/images/3d render competition/render-3d-2.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #3',img_url: require('@/assets/images/3d render competition/render-3d-3.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #4',img_url: require('@/assets/images/3d render competition/render-3d-4.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #5',img_url: require('@/assets/images/3d render competition/render-3d-5.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #6',img_url: require('@/assets/images/3d render competition/render-3d-6.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #7',img_url: require('@/assets/images/3d render competition/render-3d-7.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #8',img_url: require('@/assets/images/3d render competition/render-3d-8.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #9',img_url: require('@/assets/images/3d render competition/render-3d-9.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #10',img_url: require('@/assets/images/3d render competition/render-3d-10.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #11',img_url: require('@/assets/images/3d render competition/render-3d-11.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #12',img_url: require('@/assets/images/3d render competition/render-3d-12.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #13',img_url: require('@/assets/images/3d render competition/render-3d-13.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #14',img_url: require('@/assets/images/3d render competition/render-3d-14.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #15',img_url: require('@/assets/images/3d render competition/render-3d-15.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #16',img_url: require('@/assets/images/3d render competition/render-3d-16.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #17',img_url: require('@/assets/images/3d render competition/render-3d-17.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #18',img_url: require('@/assets/images/3d render competition/render-3d-18.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #19',img_url: require('@/assets/images/3d render competition/render-3d-19.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #20',img_url: require('@/assets/images/3d render competition/render-3d-20.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #21',img_url: require('@/assets/images/3d render competition/render-3d-21.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #22',img_url: require('@/assets/images/3d render competition/render-3d-22.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #23',img_url: require('@/assets/images/3d render competition/render-3d-23.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #24',img_url: require('@/assets/images/3d render competition/render-3d-24.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #25',img_url: require('@/assets/images/3d render competition/render-3d-25.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #26',img_url: require('@/assets/images/3d render competition/render-3d-26.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #27',img_url: require('@/assets/images/3d render competition/render-3d-27.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #28',img_url: require('@/assets/images/3d render competition/render-3d-28.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #29',img_url: require('@/assets/images/3d render competition/render-3d-29.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #30',img_url: require('@/assets/images/3d render competition/render-3d-30.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #31',img_url: require('@/assets/images/3d render competition/render-3d-31.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #32',img_url: require('@/assets/images/3d render competition/render-3d-32.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #33',img_url: require('@/assets/images/3d render competition/render-3d-33.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #34',img_url: require('@/assets/images/3d render competition/render-3d-34.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #35',img_url: require('@/assets/images/3d render competition/render-3d-35.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #36',img_url: require('@/assets/images/3d render competition/render-3d-36.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #37',img_url: require('@/assets/images/3d render competition/render-3d-37.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #38',img_url: require('@/assets/images/3d render competition/render-3d-38.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #39',img_url: require('@/assets/images/3d render competition/render-3d-39.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #40',img_url: require('@/assets/images/3d render competition/render-3d-40.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #41',img_url: require('@/assets/images/3d render competition/render-3d-41.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #42',img_url: require('@/assets/images/3d render competition/render-3d-42.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #43',img_url: require('@/assets/images/3d render competition/render-3d-43.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #44',img_url: require('@/assets/images/3d render competition/render-3d-44.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #45',img_url: require('@/assets/images/3d render competition/render-3d-45.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #46',img_url: require('@/assets/images/3d render competition/render-3d-46.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #47',img_url: require('@/assets/images/3d render competition/render-3d-47.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #48',img_url: require('@/assets/images/3d render competition/render-3d-48.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #49',img_url: require('@/assets/images/3d render competition/render-3d-49.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #50',img_url: require('@/assets/images/3d render competition/render-3d-50.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #51',img_url: require('@/assets/images/3d render competition/render-3d-51.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #52',img_url: require('@/assets/images/3d render competition/render-3d-52.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #53',img_url: require('@/assets/images/3d render competition/render-3d-53.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #54',img_url: require('@/assets/images/3d render competition/render-3d-54.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #55',img_url: require('@/assets/images/3d render competition/render-3d-55.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #56',img_url: require('@/assets/images/3d render competition/render-3d-56.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #57',img_url: require('@/assets/images/3d render competition/render-3d-57.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #58',img_url: require('@/assets/images/3d render competition/render-3d-58.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #59',img_url: require('@/assets/images/3d render competition/render-3d-59.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #60',img_url: require('@/assets/images/3d render competition/render-3d-60.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #61',img_url: require('@/assets/images/3d render competition/render-3d-61.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #62',img_url: require('@/assets/images/3d render competition/render-3d-62.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #63',img_url: require('@/assets/images/3d render competition/render-3d-63.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #64',img_url: require('@/assets/images/3d render competition/render-3d-64.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #65',img_url: require('@/assets/images/3d render competition/render-3d-65.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #66',img_url: require('@/assets/images/3d render competition/render-3d-66.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #67',img_url: require('@/assets/images/3d render competition/render-3d-67.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #68',img_url: require('@/assets/images/3d render competition/render-3d-68.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #69',img_url: require('@/assets/images/3d render competition/render-3d-69.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #70',img_url: require('@/assets/images/3d render competition/render-3d-70.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #71',img_url: require('@/assets/images/3d render competition/render-3d-71.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #72',img_url: require('@/assets/images/3d render competition/render-3d-72.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #73',img_url: require('@/assets/images/3d render competition/render-3d-73.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #74',img_url: require('@/assets/images/3d render competition/render-3d-74.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #75',img_url: require('@/assets/images/3d render competition/render-3d-75.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #76',img_url: require('@/assets/images/3d render competition/render-3d-76.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #77',img_url: require('@/assets/images/3d render competition/render-3d-77.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #78',img_url: require('@/assets/images/3d render competition/render-3d-78.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #79',img_url: require('@/assets/images/3d render competition/render-3d-79.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #80',img_url: require('@/assets/images/3d render competition/render-3d-80.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #81',img_url: require('@/assets/images/3d render competition/render-3d-81.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #82',img_url: require('@/assets/images/3d render competition/render-3d-82.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #83',img_url: require('@/assets/images/3d render competition/render-3d-83.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #84',img_url: require('@/assets/images/3d render competition/render-3d-84.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #85',img_url: require('@/assets/images/3d render competition/render-3d-85.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #86',img_url: require('@/assets/images/3d render competition/render-3d-86.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #87',img_url: require('@/assets/images/3d render competition/render-3d-87.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #88',img_url: require('@/assets/images/3d render competition/render-3d-88.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #89',img_url: require('@/assets/images/3d render competition/render-3d-89.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #90',img_url: require('@/assets/images/3d render competition/render-3d-90.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #91',img_url: require('@/assets/images/3d render competition/render-3d-91.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #92',img_url: require('@/assets/images/3d render competition/render-3d-92.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #93',img_url: require('@/assets/images/3d render competition/render-3d-93.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #94',img_url: require('@/assets/images/3d render competition/render-3d-94.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #95',img_url: require('@/assets/images/3d render competition/render-3d-95.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #96',img_url: require('@/assets/images/3d render competition/render-3d-96.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #97',img_url: require('@/assets/images/3d render competition/render-3d-97.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #98',img_url: require('@/assets/images/3d render competition/render-3d-98.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'},
        {title: 'Alternate Realities #99',img_url: require('@/assets/images/3d render competition/render-3d-99.gif'),user: 'Magi-labs',price: '0.1',time: '21h 51m 11s',link: 'https://testnets.opensea.io/collection/alternaterealities'}
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
