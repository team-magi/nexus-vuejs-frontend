<template>
  <div class="warp">
    <div class="nav-bar">
      <div class="left">
        <el-row class="block-col-2">
          <el-col :span="12">
            <el-dropdown>
              <i class="menu-icon el-icon-menu" @click="showLeft"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>My Auctions</el-dropdown-item>
                <el-dropdown-item>Setting</el-dropdown-item>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item>Log Out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
        <img class="logo" src="" alt="Logo">
      </div>

      <div class="connect">
<!--        <ul class="menu">-->
<!--          <li>Home</li>-->
<!--          <li>Auction</li>-->
<!--          <li>About</li>-->
<!--        </ul>-->
        <div v-if="!isConnected" class="connect-btn" @click="getAccount">Connect Wallet</div>
        <div v-if="isConnected" class="connect-btn hover">
            {{address.substr(0, 6) + '...' + address.substr(-4)}}
        </div>
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
          address: '',
          web3:  null,
          provider: null,
          isConnected: false,

          menu_switch: false
      }
  },
  methods: {
      async initWeb3Account() {
          if (window.ethereum) {
              this.provider = window.ethereum;

              // try {
              //     await window.ethereum.enable();
              //     this.isConnected = true;
              // } catch (error) {
              //     this.address = "User denied account access";
              // }
          } else if (window.web3) {
              this.provider = window.web3.currentProvider;
          } else {
              this.provider = new Web3.providers.HttpProvider(
                  "http://127.0.0.1:7545"
              );
          }

          this.web3 = new Web3(this.provider);
      },

      async getAccount() {
          this.provider
              .request({
                  method: "eth_requestAccounts",
              })
              .then((res) => {

                  this.address = res[0];
                  this.isConnected = true;

                  window.localStorage.setItem('n_id', res[0])
              })
              .catch((error) => {
                  if (error.code === 4001) {
                      // EIP-1193 userRejectedRequest error
                      console.log("Please connect to MetaMask.");
                      this.$notify({
                          title: 'Tips',
                          message: error.message,
                          duration: 0
                      });
                  } else {

                      this.$notify({
                          title: 'Tips',
                          message: 'Please connect to MetaMask.',
                          duration: 0
                      });
                  }
              });
      },

      up () {

      },

      showLeft () {
          this.menu_switch = !this.menu_switch``
          this.$emit('press_down', this.menu_switch)
      }
  },
  created() {},
  mounted() {
      const nid = window.localStorage.getItem('n_id')
      this.address = nid
      nid? this.isConnected = true: this.isConnected = false

      this.initWeb3Account()
  },
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
  @import '../../assets/style.less';
  .warp {
    box-shadow: 0 0 10px 10px rgba(100, 100, 100, 0.1);
    background: #fff;
  }
  .nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: @w-100;
    height: 54px;
    top: -55px;
    padding: 0 0 0 10px;
    z-index: 3;
    -webkit-transition: top .2s ease-in-out;
    -o-transition: top .2s ease-in-out;
    transition: top .2s ease-in-out;

    .left {
      display: flex;
      align-items: center;

      .menu-icon {
        margin-right: 10px;
        transition: all .2s;
        transform: rotate(0deg);}
      .menu-icon:hover {
        transform: rotate(-90deg);}
    }

    .logo {
      border: 0;
      width: 72px;
      height: 32px;
      background-color: #0faadd;
      border: none;
    }

    .connect {
      display: flex;
      align-items: center;
    }

    .menu {
      padding: 0 20px;
      overflow: hidden;

      li {
        padding: 0 10px;
        float: left;
        cursor: pointer;

      }
    }
    .connect-btn {
      position: relative;
      top: 0; right: 10px;
      width: auto;
      height: 44px;
      line-height: 44px;
      padding: 0 20px;
      background-color: #000;
      border-radius: 20px;
      text-align: center;
      cursor: pointer;
      color: #fff;

      transition: all .2s;
    }

    .connect-btn.hover {
      height: 100%;
      right: 0;
      line-height: 55px;
      border-radius: 0;
    }

    .connect-btn:hover {
      height: 100%;
      right: 0;
      line-height: 55px;
      border-radius: 0;
    }

    @media screen and (max-width: @mobileWidth) {

    }
    @media screen and (min-width: @desktopWidth) {
      width: @w-1080px;
      margin: 0 auto;
    }
  }
</style>
