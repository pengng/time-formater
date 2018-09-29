const assert = require('assert')
const time = require('../index')

describe('test timeformater.js', function () {
    
    it('test constructor', function () {
        let date = time()
        assert(date instanceof time)
        date = time(date)
        assert(date instanceof time)
        date = time(Date.now())
        assert(date instanceof time)
    })

    it('test format()', function () {
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
})