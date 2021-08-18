<template>
  <div class="wrap">
    <div class="account" style="margin-top: 10px;">
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-radio-group v-model="labelPosition" size="small">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
      <div style="margin: 20px;"></div>
      <el-form :label-position="labelPosition" label-width="80px" :model="formData">
        <el-form-item label="Username">
          <el-input v-model="formData.username"></el-input>
        </el-form-item>
        <el-form-item label="Bio">
          <el-input v-model="formData.bio"></el-input>
        </el-form-item>
        <el-form-item label="Email Address">
          <el-input v-model="formData.email_address"></el-input>
        </el-form-item>
      </el-form>
      <el-row>
        <el-button type="primary" @click="update()">更新</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";
import { EventBus } from "../event-bus";

export default {
    components: {},
    data() {
        return {
            web3: null,
            provider: null,
            eventBus: EventBus,
            auctions: {
                title: "NFT1作品",
                src: require("@/assets/images/nft/1.jpg")
            },

            currentDate: new Date(),
            labelPosition: "right",
            formData: {
                username: "",
                bio: "",
                email_address: ""
            },
            token: "",
            address: "",
            nonce: "",
        };
    },
    provide() {},
    watch: {},
    methods: {
        async update() {
            console.log(this.formData);
            this.$api.generalSettings(JSON.stringify(this.formData), {
                "Content-Type": "application/json",
                "authorization": this.token
            }).then(res => {
                console.log(res);
            });
        },
        async login() {
            var that = this;
            let message = `Welcome to Nexus!\r\nClick "Sign" to sign in. No password needed!\r\nI accept the Magi Terms of Service: https://magi.team\r\nWallet address:${this.address}\r\nNonce:\r\n${this.nonce}`;
            //   let message = `magi${nonce}`;
            this.provider.sendAsync({
                method: "personal_sign",
                params: [Web3.utils.utf8ToHex(message), that.address]
            }, function(err, res) {
                if (err) {
                    return console.error(err);
                }
                that.$api.autoLogin(
                    JSON.stringify({
                        address: that.address,
                        message: message,
                        signature: res.result
                    }),
                    {
                        "Content-Type": "application/json"
                    }
                ).then(res => {
                    that.token = res.token;
                });
            });
        },
        async initWeb3() {
            if (window.ethereum) {
                this.provider = window.ethereum;
                try {
                    await window.ethereum.enable();
                    this.getAccount();
                } catch (error) {
                    this.address = "User denied account access";
                }
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
            this.provider.request({
                method: "eth_requestAccounts"
            }).then(async res => {
                this.address = res[0];
                let user = await this.$api.userQuery({
                    address: this.address
                },{

                });
                this.nonce = user.data.nonce;
                this.formData = {
                    username: user.data.username,
                    bio: user.data.bio,
                    email_address: user.data.email_address,
                };
            }).catch(error => {
                if (error.code === 4001) {
                    // EIP-1193 userRejectedRequest error
                    console.log("Please connect to MetaMask.");
                } else {
                    console.error(error);
                }
            });
        }
    },
    created() {
        this.initWeb3();
    },
    mounted() {},
    computed: {}
};
</script>

<style lang="less">
</style>
