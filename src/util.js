import common from '@/common'
import CryptoJS from "crypto-js"


let debounce = function(fn, context, timeout) {
    let timer;
    // 利用闭包将内容传递出去
    return function() {
        if (timer) {
            // 清除定时器
            clearTimeout(timer)
        }
        // 设置一个新的定时器
        timer = setTimeout(function() {
            if (context) {
                fn.apply(context, arguments)
            } else {
                fn(arguments)
            }
        }, timeout)
    }
}


//星号化 姓名 银行卡 手机号
let convertName = function(name) {
    if (!name) return ''
    let result = name.substr(0, 1) + ' '
    for (let i = 0; i < name.length - 1; i++) {
        result += '*'
    }
    return result
}
let convertBankNo = function(bankNo) {
    if (!bankNo) return ''
    return bankNo.substr(0, 4) + ' **** **** ' + bankNo.substr(bankNo.length - 4)
}
let convertPhone = function(phone) {
    if (!phone) return ''
    return phone.substr(0, 3) + ' ****' + phone.substr(phone.length - 4)
}
let convertIds = function(id) {
    if (!id) return ''
    return id.substr(0, 1) + '****************' + id.substr(id.length - 1)
}

let getLast4Num = (num) => {
    let length = num.length
    return num.substr(length - 4)
}

// base64加解密
// 创建Base64对象
let Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) { u = a = 64 } else if (isNaN(i)) { a = 64 }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) { t = t + String.fromCharCode(r) }
            if (a != 64) { t = t + String.fromCharCode(i) }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) { t += String.fromCharCode(r) } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = 0;
        var c1 = 0;
        var c2 = 0;
        var c3;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

let DES = {
    encryptByDES (message, key){
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.ciphertext.toString();
    },

    decryptByDES (ciphertext, key){
        var keyHex = CryptoJS.enc.Utf8.parse(key);
        var decrypted = CryptoJS.DES.decrypt({
            ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
        }, keyHex, {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        });
        var result_value = decrypted.toString(CryptoJS.enc.Utf8);
        return result_value;
    }
}

let isPC = function () {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
        return true
    } else {
        return false
    }
}

let formatMoneyW = function(money, type) {
    if (/[^0-9\.]/.test(money))
        return "0";
    if (money == null || money == "")
        return "0";
    money = money.toString().replace(/^(\d*)$/, "$1.");
    money = (money + "00").replace(/(\d*\.\d\d)\d*/, "$1");
    money = money.replace(".", ",");
    var re = /(\d)(\d{3},)/;
    while (re.test(money))
        money = money.replace(re, "$1,$2");
    money = money.replace(/,(\d\d)$/, ".$1");
    if (type == 0) { // 不带小数位(默认是有小数位)
        var a = money.split(".");
        if (a[1] == "00") {
            money = a[0];
        }
    }
    return money;
}

let isHttps = function (url){
    return url.indexOf('https://') >= 0
}

let setCookie = function (name, value) {
    let exp = new Date()
    // exp.setTime(exp.getTime() + 1440 * 60 * 1000)
    exp.setTime(exp.getTime() + 7200000)
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/"
}

let getCookie = function (name) {
    let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
    if (arr = document.cookie.match(reg))
        return unescape(arr[2])
    else
        return ''
}

function removeCookie (key) {
  let d = new Date();
  d.setDate(d.getDate() + -1);

  document.cookie = key+"=;path=/;expires=-1";
}

/**
 * 获取URL参数
 * @param name 参数昵称
 * @returns {string|null}
 */
let getUrlKey = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
}

let transfromDate = function (time) {
    if (time == 'NaN000') { return '' }
    if (time) {
        let now = new Date(parseInt(time)),
              y = now.getFullYear(),
              m = now.getMonth() + 1,
              d = now.getDate();

        return (
              y + "-" +
              (m < 10 ? "0" + m : m) +
              "-" +
              (d < 10 ? "0" + d : d)
              + " " +
              now.toTimeString().substr(0, 8)
            );
      } else {

        return null;
      }
}


let getfromDate = function (time) {
    if (time) {
        let now = new Date(time),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();

        return (
            y + "-" +
            (m < 10 ? "0" + m : m) +
            "-" +
            (d < 10 ? "0" + d : d)
        );
    } else {

        return '';
    }
}


let getDateTime = function (time) {
    if (time) {
        let now = new Date(time),
            y = now.getFullYear(),
            m = now.getMonth() + 1,
            d = now.getDate();

        return (
            y + "-" +
            (m < 10 ? "0" + m : m) +
            "-" +
            (d < 10 ? "0" + d : d)
            + " " +
            now.toTimeString().substr(0, 8)
        );
    } else {

        return '';
    }
}

let virLimit = function (name, str) {

  let virList = {

      phone: /^1[3|4|5|7|8][0-9]{9}$/
  }

  for (let i in virList) {
    if (virList[i] == name) {
      console.log(
        virList[i].test(str)
      )
    }
  }

}

/**
 * 封装并返回FormData对象
 * @param json
 * @returns FormData
 */
let formDataParam = function (json) {
    let fd = new FormData();
    if (!json || json == '')
        return false;

    for (let key in json) {

        fd.append(key, json[key]);
    }

    return fd
}

/**
 * 零时区转换
 * @param e
 * @returns {string}
 */
let getTimezone = (e) => {
    if (e) {
        let timeCd = parseInt(Date.parse(e) + (new Date().getTimezoneOffset() * 60000))
        console.log('111： ', transfromDate(Date.parse(e)))
        console.log('222： ', transfromDate(Date.parse(e) + (new Date().getTimezoneOffset() * 60000)))

        // return transfromDate(timeCd)
    } else {
        return ''
    }
}


let filterInput = (str)=>{
        let temp=""
        for(let i=0;i<str.length;i++)
            if(str.charCodeAt(i)>0&&str.charCodeAt(i)<255)
                temp+=str.charAt(i)
        return temp
}


let geetest = (callback1,callback2) =>{
    const initLink = `http://116.62.105.143:3333/geetest/register?t=${new Date().getTime()}`
    fetch(initLink).then(res => res.json()).then((res) => {
        window.initGeetest({
            gt: res.gt,
            challenge: res.challenge,
            new_captcha: res.new_captcha,
            product: 'bind',
            lang: "en"
        }, function (captchaObj) {
            captchaObj.onReady(function () {
                captchaObj.verify()
                callback2()
            }).onSuccess(function () {
                callback1()
            }).onError(function (err) {
                console.log("geetest", err)
            })
        })
    })
}

export default {
    debounce,
    filterInput,
    getLast4Num,
    convertName,
    convertBankNo,
    convertPhone,
    convertIds,
    Base64,
    DES,
    isPC,
    formatMoneyW,
    setCookie,
    getCookie,
    removeCookie,
    isHttps,
    getUrlKey,
    virLimit,
    formDataParam,
    transfromDate,
    getTimezone,
    getfromDate,
    getDateTime,
    geetest,
}
