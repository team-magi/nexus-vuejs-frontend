<template>
  <div class="navigation">
    <div class="nav-bar">
      <div class="left">
        <img @click="go('home')" class="logo" src="../../assets/images/nft/nexus-logo.jpeg" alt="Logo">
      </div>

      <div class="connect">
        <ul class="menu">
          <li @click="go('home')">Home</li>
          <li @click="go('market')">Market</li>
        </ul>
        <div v-show="!isConnected" class="connect-btn" @click="getAccount">{{connected}}</div>

        <el-row class="block-col-2">
          <el-col :span="12">
            <el-dropdown>
              <div v-show="isConnected" class="connect-btn hover" @click="getAccount">{{connected}}</div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>My Auctions</el-dropdown-item>
                <el-dropdown-item>Setting</el-dropdown-item>
                <el-dropdown-item>Profile</el-dropdown-item>
                <el-dropdown-item @click.native="logout">Log Out</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
export default {
  components: {},
  data() {
      return {
          address: '',
          web3:  null,
          provider: null,
          connected: 'Connect Wallet',
          isConnected: false,

          menu_switch: false
      }
  },
  methods: {
      init() {

        window.ethereum.on("accountsChanged", accounts => {
          console.log(accounts);
          if (accounts.length == 0) {
            this.logout();
          } else {
            this.address = accounts[0];
            this.isConnected = true;
            window.localStorage.setItem('n_id', accounts[0])
            this.initButton()
          }
        });
      },

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
                  "http://127.0.0.1:8545"
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
                  this.initButton()
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

      go (path) {
        let param = {
          name: path
        }

        this.$router.push(param);
      },

      initButton() {
        const nid = window.localStorage.getItem('n_id')
        this.address = nid

        if (nid) {
          this.isConnected = true
          this.connected = this.address.substr(0, 6) + '...' + this.address.substr(-4)
        } else {
          this.isConnected = false
          this.connected = 'Connect Wallet'
        }
      },

      logout () {
        window.localStorage.removeItem('n_id')
        this.connected = 'Connect Wallet'
        this.isConnected = false
      },

      showLeft () {
          this.menu_switch = !this.menu_switch``
          this.$emit('press_down', this.menu_switch)
      }
  },
  created() {},
  mounted() {
      this.init()
      this.initButton()
      this.initWeb3Account()
  },
  watch: {},
  computed: {},
}
</script>
<style lang="less" scoped>
  @import '../../assets/style.less';
  .navigation {
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
        width: 100%;
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
      width: 100%;
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
      margin: 0 auto;
    }
  }
</style>
