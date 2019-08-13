const MONTH_DISPLAY = ['', '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
const WEEK_DISPLAY = ['日', '一', '二', '三', '四', '五', '六']
// 单位大小
const UNIT_SIZE = {
    d: 86400000, // 毫秒/天
    H: 3600000, // 毫秒/小时
    m: 60000, // 毫秒/分钟
    s: 1000, // 毫秒/秒
    S: 1 // 毫秒
}

const TimeFormater = function (input) {
    if (!(this instanceof TimeFormater)) {
        return new TimeFormater(input)
    }
    this[0] = input ? new Date(input) : new Date()
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
        let diff = Math.floor(newTime - oldTime)

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
        let hour = this.H() % 12
        return hour || 12
    },

    // 时 [01..12]
    hh() {
        return this.fillZero(this.h())
    },

    // 分钟 [0..59]
    m() {
        return this[0].getMinutes()
    },

    // 分钟 [00..59]
    mm() {
        return this.fillZero(this.m())
    },

    // 秒 [0..59]
    s() {
        return this[0].getSeconds()
    },

    // 秒 [00..59]
    ss() {
        return this.fillZero(this.s())
    },

    // 毫秒 [0..999]
    SSS() {
        return this[0].getMilliseconds()
    },

    // 毫秒 [0..99]
    SS() {
        return Math.floor(this.SSS() / 10)
    },

    // 毫秒 [0..9]
    S() {
        return Math.floor(this.SS() / 10)
    },

    A() {
        let hm = this.H() * 100 + this.m()
        let part = ['凌晨', '早上', '上午', '中午', '下午', '晚上']
        let interval = [600, 900, 1130, 1230, 1800, Infinity]
        let i = interval.findIndex(function (item) {
            return hm < item
        })
        return part[i]
    },

    // A 的别名
    a() {
        return this.A()
    },

    // 时间戳，单位：毫秒
    x() {
        return this[0].getTime()
    },

    // 时间戳，单位：秒
    X() {
        return Math.floor(this.x() / 1000)
    }
}

/**
 * 倒计时
 * @param {number|string|Date} time 类型为数字表示剩余的秒数，为Date实例或字符串（符合ISO 8601格式），表示结束的时间点。
 */
TimeFormater.countdown = function (time) {
    let endPoint = 0
    if (typeof time === 'number') {
        // time 为数字类型，表示剩余的秒数
        endPoint = time * 1000 + Date.now()
    } else if (typeof time === 'string') {
        // time 为字符串，则应符合ISO 8601格式，表示结束的时间点
        endPoint = new Date(time).getTime()
    } else if (time instanceof Date) {
        // time 为Date对象实例，表示结束的时间点
        endPoint = time.getTime()
    }

    /**
     * 将剩余的时间量格式化为字符串
     * @param {string} token 用于指定输出格式。例：'剩余：d天H小时m分钟s秒' => "剩余：1天11小时4分钟38秒"。
     */
    let format = function (token) {
        let now = Date.now()
        let remain = endPoint - now
        let limit = 0 // 忽略负数
        remain = Math.max(limit, remain)

        return token.replace(/(?:#(\d+))?([dHmsS])/g, function (all, width, key) {
            // 如果存在换算单位，则进行单位转换
            if (UNIT_SIZE[key]) {
                let r = remain
                remain %= UNIT_SIZE[key]
                let str = parseInt(r / UNIT_SIZE[key]).toString()
                // 如果指定宽度，则进行填充处理
                if (width && str.length < width) {
                    str = new Array(width - str.length).fill(0).join('') + str
                }
                return str
            } else {
                return key
            }
        })
    }

    return { format }
}

module.exports = TimeFormater