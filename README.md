
# time-formater

> **不是 time-format[t]er**

> [English](doc/english.md)

在javascript中显示日期。

## 使用方法

```bash
npm i -S time-formater
```

```javascript
const time = require('time-formater')

let rawDate = time().format('YYYY-MM-DD HH:mm:ss') // 当前时间
console.log(rawDate) // 2017-05-21 15:19:34
```



## 解析

* **当前时间**

```javascript
let now = time()
```

如果参数为空则获取当前系统时间。

* **数字**

```javascript
let date = time(1495355143424)
```

如果传入参数为数字，则表示UTC时间戳。

* **字符串**

```javascript
let date = time('2017-05-21')
// or
let date = time('2017-05-21 16:37:02')
// or
let date = time('2017-05-21 13:20:35+0800')
// or
let date = time('2017-05-21 19:02:59-08:00')
// or
let date = time('2017-05-21 12:38:49Z')
```

如果传入字符串，则必须符合[ISO 8601](https://zh.wikipedia.org/wiki/ISO_8601)格式。

* **原生日期对象**

```javascript
let date = time(new Date())
```

传入参数也可以是一个原生的`javascript`日期对象。



## 显示

#### format(string)

```javascript
let rawDate = time().format('YYYY-MM-DD') // 2017-05-21
```



## 特定字符串所代表的含义

|        | Token  |   Output  |
| ----:  | ------ | --------- |
| __月份__ | M      | 1 2 ... 11 12 |
| | MM | 01 02 ... 11 12 |
| | MMM | 1月 2月 ... 11月 12月 |
| | MMMM | 一月 二月 ... 十二月 |
| __季度__ | Q | 1 2 3 4 |
| __日期__ | D | 1 2 ... 30 31 |
| | Do | 1日 2日 ... 30日 31日 |
| | DD | 01 02 ... 30 31 |
| __星期__ | d | 0 1 2 3 4 5 6 |
| | dd | 日 一 二 三 四 五 六 |
| | ddd | 周日 周一 ... 周五 周六 |
| | dddd | 星期日 星期一 ... 星期五 星期六 |
| __年份__ | YYYY | 1970 1971 ... 2029 2030 |
| __上午/下午__ | A | 凌晨 早上 ... 下午 晚上 |
| | a | 凌晨 早上 ... 下午 晚上 |
| __时刻__ | H | 0 1 ... 22 23 |
| | HH | 00 01 ... 22 23 |
| | h | 1 2 ... 11 12 |
| | hh | 01 02 ... 11 12 |
| __分钟__ | m | 0 1 ... 58 59 |
| | mm | 00 01 ... 58 59 |
| __秒__ | s | 0 1 ... 58 59 |
| | ss | 00 01 ... 58 59 |
| __毫秒__ | S | 0 1 ... 8 9 |
| | SS | 00 01 ... 98 99 |
| | SSS | 000 001 ... 998 999 |
| __Unix 时间戳__ | X | 1495357559853 |
| __Unix 时间戳 毫秒__ | x | 1495357559853    |



## 时差 （以现在为基准）

#### fromNow()

```javascript
let fromNow = time('2017-01-01').fromNow()
console.log(fromNow) // 4个月前
```



## 倒计时

```javascript
const time = require('time-formater')
let remain = 100000 // 10万秒
let countdown = time.countdown(remain)
let token = '剩余：d天H小时m分钟s秒'

// 浏览器
function step() {
    document.title = countdown.format(token) // 剩余：1天3小时46分钟40秒
    requestAnimationFrame(step)
}
step()
```



### countdown(time)

- `time` \<number | string | Date\> 类型为数字表示剩余的秒数，为Date实例或字符串（符合ISO 8601格式），表示结束的时间点。

返回倒计时的时间量。



### format(token)

- `token` \<string\> 用于指定输出格式。例：'剩余：d天H小时m分钟s秒' => "剩余：1天11小时4分钟38秒"。

| token        | 描述                                                         |
| ------------ | ------------------------------------------------------------ |
| d            | 天数                                                         |
| H            | 小时数                                                       |
| m            | 分钟数                                                       |
| s            | 秒数                                                         |
| S            | 毫秒数                                                       |
| \#\<number\> | 前缀，表示在前面填充零到指定宽度。 例：#3d 表示将天数填充到3个字符，001 。 |

将时间量格式化为字符串。



