# time-formater
Display dates in javascript.
## Usage
```bash
npm i -S time-formater
```
```javascript
const dtime = require('time-formater');
console.log(dtime().format('YYYY-MM-DD HH:mm:ss'));
// 2017-05-21 15:19:34
```

## Parse
* **Current Time**
```javascript
var now = dtime();
```
Get the current time if the parameter is empty.

* **number**
```javascript
var date = dtime(1495355143424);
```
If the parameter is a number, it indicates a UTC timestamp.

* **string**
```javascript
var date = dtime('2017-05-21');
// or
var date = dtime('2017-05-21 16:37:02');
// or
var date = dtime('2017-05-21 13:20:35+0800');
// or
var date = dtime('2017-05-21 19:02:59-08:00');
// or
var date = dtime('2017-05-21 12:38:49Z');
```
If it is a string, it must conform to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

* **date object**
```javascript
var date = dtime(new Date());
```
The argument can also be a date object.

## Display
#### format(string);
```javascript
var datestr = dtime().format('YYYY-MM-DD'); // 2017-05-21
```

## token
| |       | Token  |   Output  |
| ----:  | ------ | --------- |
| __Month__ | M      | 1 2 ... 11 12 |
| | MM | 01 02 ... 11 12 |
| | MMM | 1月 2月 ... 11月 12月 |
| | MMMM | 一月 二月 ... 十一 |
| __Quarter__ | Q | 1 2 3 4 |
| __Day of Month__ | D | 1 2 ... 30 31 |
| | Do | 1日 2日 ... 30日 31日 |
| | DD | 01 02 ... 30 31 |
| __Day of Week__ | d | 0 1 2 3 4 5 6 |
| | dd | 日 一 二 三 四 五 六 |
| | ddd | 周日 周一 ... 周五 周六 |
| | dddd | 星期日 星期一 ... 星期五 星期六 |
| __Year__ | YYYY | 1970 1971 ... 2029 2030 |
| __AM/PM__ | A | 凌晨 早上 ... 下午 晚上 |
| | a | 凌晨 早上 ... 下午 晚上 |
| __Hour__ | H | 0 1 ... 22 23 |
| | HH | 00 01 ... 22 23 |
| | h | 1 2 ... 11 12 |
| | hh | 01 02 ... 11 12 |
| __Minute__ | m | 0 1 ... 58 59 |
| | mm | 00 01 ... 58 59 |
| __Second__ | s | 0 1 ... 58 59 |
| | ss | 00 01 ... 58 59 |
| __Fractional Second__ | S | 0 1 ... 8 9 |
| | SS | 00 01 ... 98 99 |
| | SSS | 000 001 ... 998 999 |
| __Unix Timestamp__ | X | 1495357559853 |
| __Unix Millisecond Timestamp__ | x | 1495357559853    |

## time difference (Based on the present)
#### fromNow()
```javascript
var fromNow = dtime('2017-01-01').fromNow();
console.log(fromNow);
// 4个月前
```

# time-formater
在javascript中显示日期。
## 使用方法
```bash
npm i -S time-formater
```
```javascript
const dtime = require('time-formater');
console.log(dtime().format('YYYY-MM-DD HH:mm:ss'));
// 2017-05-21 15:19:34
```

## 解析
* **当前时间**
```javascript
var now = dtime();
```
如果参数为空则获取当前系统时间。

* **数字**
```javascript
var date = dtime(1495355143424);
```
如果传入参数为数字，则表示UTC时间戳。

* **字符串**
```javascript
var date = dtime('2017-05-21');
// or
var date = dtime('2017-05-21 16:37:02');
// or
var date = dtime('2017-05-21 13:20:35+0800');
// or
var date = dtime('2017-05-21 19:02:59-08:00');
// or
var date = dtime('2017-05-21 12:38:49Z');
```
如果传入字符串，则必须符合[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)格式。

* **原生日期对象**
```javascript
var date = dtime(new Date());
```
传入参数也可以是一个原生的`javascript`日期对象。

## 显示
#### format(string);
```javascript
var datestr = dtime().format('YYYY-MM-DD'); // 2017-05-21
```

## 特定字符串所代表的含义
| |       | Token  |   Output  |
| ----:  | ------ | --------- |
| __月份__ | M      | 1 2 ... 11 12 |
| | MM | 01 02 ... 11 12 |
| | MMM | 1月 2月 ... 11月 12月 |
| | MMMM | 一月 二月 ... 十一 |
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
var fromNow = dtime('2017-01-01').fromNow();
console.log(fromNow);
// 4个月前
```