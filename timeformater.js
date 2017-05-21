
var TimeFormater = function (input) {
  return new TimeFormater.fn.init(input);
}

TimeFormater.fn = TimeFormater.prototype = {
  constructor: TimeFormater,
  init: function (input) {
    if (typeof input == 'string' || typeof input == 'number') {
      this[0] = new Date(input);
    } else if (input instanceof Date) {
      this[0] = input;
    } else {
      this[0] = new Date();
    }
    return this;
  },
  format: function (str) {
    var that = this;
    if (typeof str === 'string') {
      return str.replace(/Y{4}|M{1,4}|Do|D{1,2}|d{1,4}|Q|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|A|a|x|X/g, function (match) {
        return that[match] ? that[match]() : match;
      });
    } else {
      return that.toLocaleString();
    }
  },
  fromNow: function () {
    var oldTime = this[0].getTime();
    var newTime = Date.now();
    var diff = parseInt(newTime - oldTime);
    if (diff < 10000) {
      return '刚刚';
    } else if (diff < 60000) {
      return parseInt(diff / 1000) + '秒前';
    } else if (diff < 3600000) {
      return parseInt(diff / 60000) + '分钟前';
    } else if (diff < 86400000) {
      return parseInt(diff / 3600000) + '小时前';
    } else if (diff < 2592000000) {
      return parseInt(diff / 86400000) + '天前';
    } else if (diff < 31104000000) {
      return parseInt(diff / 2592000000) + '月前';
    } else {
      return parseInt(diff / 31104000000) + '年前';
    }
  },
  toDouble: function (num) {
    return num < 10 ? '0' + num : num;
  },
  YYYY: function () {
    return this[0].getFullYear();
  },
  Q: function () {
    return Math.ceil(this.M() / 3);
  },
  M: function () {
    return this[0].getMonth() + 1;
  },
  MM: function () {
    return this.toDouble(this.M());
  },
  MMM: function () {
    return this.M() + '月';
  },
  MMMM: function () {
    var str = '一,二,三,四,五,六,七,八,九,十,十一,十二';
    return str.split(',')[this.M() - 1] + '月';
  },
  D: function () {
    return this[0].getDate();
  },
  Do: function () {
    return this.D() + '日';
  },
  DD: function () {
    return this.toDouble(this.D());
  },
  d: function () {
    return this[0].getDay();
  },
  dd: function () {
    var str = '日一二三四五六';
    return str[this.d()];
  },
  ddd: function () {
    return '周' + this.dd();
  },
  dddd: function () {
    return '星期' + this.dd();
  },
  H: function () {
    return this[0].getHours();
  },
  HH: function () {
    return this.toDouble(this.H());
  },
  h: function () {
    var hour = this.H();
    return hour == 0 ? 12 : hour;
  },
  hh: function () {
    return this.toDouble(this.h());
  },
  m: function () {
    return this[0].getMinutes();
  },
  mm: function () {
    return this.toDouble(this.m());
  },
  s: function () {
    return this[0].getSeconds();
  },
  ss: function () {
    return this.toDouble(this.s());
  },
  SSS: function () {
    return this[0].getMilliseconds();
  },
  SS: function () {
    return parseInt(this.SSS() / 10);
  },
  S: function () {
    return parseInt(this.SS() / 10);
  },
  A: function () {
    var hm = this.H() * 100 + this.m();
    if (hm < 600) {
      return '凌晨';
    } else if (hm < 900) {
      return '早上';
    } else if (hm < 1130) {
      return '上午';
    } else if (hm < 1230) {
      return '中午';
    } else if (hm < 1800) {
      return '下午';
    } else {
      return '晚上';
    }
  },
  a: function () {
    return this.A();
  },
  x: function () {
    return this[0].getTime();
  },
  X: function () {
    return parseInt(this.x() / 1000);
  }
};

TimeFormater.fn.init.prototype = TimeFormater.fn;

module.exports = TimeFormater;