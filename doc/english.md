# time-formater

> **Not time-format[t]er**

Display dates in javascript.

## Usage

```bash
npm i -S time-formater
```

```javascript
const time = require('time-formater')

let rawDate = time().format('YYYY-MM-DD HH:mm:ss') // current time
console.log(rawDate) // 2017-05-21 15:19:34
```



## Parse

* **Current Time**

```javascript
let now = time()
```

Get the current time if the parameter is empty.

* **number**

```javascript
let date = time(1495355143424)
```

If the parameter is a number, it indicates a UTC timestamp.

* **string**

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

If it is a string, it must conform to [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.

* **date object**

```javascript
let date = time(new Date())
```

The argument can also be a date object.



## Display

#### format(string);

```javascript
let rawDate = time().format('YYYY-MM-DD') // 2017-05-21
```



## token

|      | Token  |   Output  |
| ----:  | ------ | --------- |
| __Month__ | M      | 1 2 ... 11 12 |
| | MM | 01 02 ... 11 12 |
| | MMM | 1月 2月 ... 11月 12月 |
| | MMMM | 一月 二月 ... 十二月 |
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
let fromNow = time('2017-01-01').fromNow()
console.log(fromNow) // 4个月前
```



## countdown

```javascript
const time = require('time-formater')
let remain = 100000 // 10,000 seconds
let countdown = time.countdown(remain)
let token = 'Remaining: d days H hours m minutes s seconds'
countdown.format(token) // Remaining: 1 days 3 hours 46 minutes 40 seconds
```



### countdown(time)

- `time` \<number | string | Date\> The type is a number indicating the number of seconds remaining, which is a day instance or a string (in accordance with ISO 8601 format), indicating the point in time at which it ends.

Returns the amount of time counted down.



### format(token)

- `token` \<string\> Used to specify the output format. Example: 'Remaining: d days H hours m minutes s seconds' => "Remaining: 1 days 11 hours 4 minutes 38 seconds".

| token        | description                                                  |
| ------------ | ------------------------------------------------------------ |
| d            | days                                                         |
| H            | hours                                                        |
| m            | minutes                                                      |
| s            | seconds                                                      |
| S            | milliseconds                                                 |
| \#\<number\> | The prefix indicates that zero is padded to the specified width. Example: #3d means to fill the number of days to 3 characters, 001. |

Format the amount of time as a string.