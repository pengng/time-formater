const MONTH_DISPLAY = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const WEEK_DISPLAY = ['日', '一', '二', '三', '四', '五', '六']

const TimeFormater = function (input) {
    if (!(this instanceof TimeFormater)) {
        return new TimeFormater(input)
    }
    this[0] = new Date(input)
}

TimeFormater.prototype = {

    format(token) {
        if (typeof token !== 'string') {
            return this.toLocaleString()
        }

        const reg = /Y{4}|M{1,4}|Do|D{1,2}|d{1,4}|Q|H{1,2}|h{1,2}|m{1,2}|s{1,2}|S{1,3}|A|a|x|X/g
        return token.replace(reg, (match) => this[match] ? this[match]() : match)
    },

    fromNow() {
        let oldTime = this[0].getTime()
        let newTime = Date.now()
        let diff = parseInt(newTime - oldTime)

        if (diff < 10000) {
            return '刚刚'
        } else if (diff < 60000) {
            return parseInt(diff / 1000) + '秒前'
        } else if (diff < 3600000) {
            return parseInt(diff / 60000) + '分钟前'
        } else if (diff < 86400000) {
            return parseInt(diff / 3600000) + '小时前'
        } else if (diff < 2592000000) {
            return parseInt(diff / 86400000) + '天前'
        } else if (diff < 31104000000) {
            return parseInt(diff / 2592000000) + '月前'
        } else {
            return parseInt(diff / 31104000000) + '年前'
        }
    },
    
    fillZero(num) {
        return num < 10 ? '0' + num : num
    },

    YYYY() {
        return this[0].getFullYear()
    },

    Q() {
        return Math.ceil(this.M() / 3)
    },

    // 月份 [1..12]
    M() {
        return this[0].getMonth() + 1
    },

    // 月份 [01..12]
    MM() {
        return this.fillZero(this.M())
    },

    // 月份 [1月..12月]
    MMM() {
        return this.M() + '月'
    },

    // 月份 [一月..十二月]
    MMMM() {
        return MONTH_DISPLAY[this.M()]
    },

    // 日期 [1..31]
    D() {
        return this[0].getDate()
    },

    // 日期 [1日..31日]
    Do() {
        return this.D() + '日'
    },

    // 日期 [01..31]
    DD() {
        return this.fillZero(this.D())
    },

    // 星期 [0..6]
    d() {
        return this[0].getDay()
    },

    // 星期 [日..六]
    dd() {
        return WEEK_DISPLAY[this.d()]
    },

    // 星期 [周日..周六]
    ddd() {
        return '周' + this.dd()
    },

    // 星期 [星期日..星期六]
    dddd() {
        return '星期' + this.dd()
    },

    // 时 [0..23]
    H() {
        return this[0].getHours()
    },

    // 时 [00..23]
    HH() {
        return this.fillZero(this.H())
    },

    // 时 [1.12]
    h() {
        let hour = this.H()
        return hour == 0 ? 12 : hour
    },

    // 时 [01..12]
    hh() {
        return this.fillZero(this.h())
    },

    m() {
        return this[0].getMinutes()
    },

    mm() {
        return this.fillZero(this.m())
    },

    s() {
        return this[0].getSeconds()
    },

    ss() {
        return this.fillZero(this.s())
    },

    SSS() {
        return this[0].getMilliseconds()
    },

    SS() {
        return parseInt(this.SSS() / 10)
    },

    S() {
        return parseInt(this.SS() / 10)
    },

    A() {
        let hm = this.H() * 100 + this.m()
        if (hm < 600) {
            return '凌晨'
        } else if (hm < 900) {
            return '早上'
        } else if (hm < 1130) {
            return '上午'
        } else if (hm < 1230) {
            return '中午'
        } else if (hm < 1800) {
            return '下午'
        } else {
            return '晚上'
        }
    },

    a() {
        return this.A()
    },

    x() {
        return this[0].getTime()
    },

    X() {
        return parseInt(this.x() / 1000)
    }
}

module.exports = TimeFormater