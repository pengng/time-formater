const assert = require('assert')
const time = require('../index')

describe('测试 timeformater.js', function () {
    
    it('测试 constructor', function () {
        let date = time()
        assert(date instanceof time)
        date = time(date)
        assert(date instanceof time)
        date = time(Date.now())
        assert(date instanceof time)
    })

    it('测试 format()', function () {
        let date = time('2017-05-19 08:00:00.125')
        assert(date.format('YYYY-MM-DD HH:mm:ss.SSS') === '2017-05-19 08:00:00.125')
        assert(date.format('今天是MMMMDo，dddd') === '今天是五月19日，星期五')
        assert(date.format('现在是Ah点m分s秒SSS毫秒') === '现在是早上8点0分0秒125毫秒')
        assert(date.format('M月=MMM') === '5月=5月')
        assert(date.format('D') === '19')
        assert(date.format('d-dd-ddd') === '5-五-周五')
        assert(date.format('H点=hh点') === '8点=08点')
        assert(date.format('m') === '0')
        assert(time('2017-9-10').format('Q') === '3')
        assert(date.format('x') === '1495152000125')
        assert(date.format('X') === '1495152000')
    })

    it('测试 countdown()', function () {
        assert(time.countdown(1e5).format('d天H小时m分钟s秒') === '1天3小时46分钟40秒')
        assert(time.countdown(4000).format('m分钟') === '66分钟')
        assert(time.countdown(4000).format('H小时m分钟') === '1小时6分钟')
        assert(time.countdown(2000.293).format('m分钟s秒S毫秒') === '33分钟20秒293毫秒')
    })
})