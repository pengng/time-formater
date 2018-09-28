const TimeFormater = require('../timeformater')
const expect = require('chai').expect

let date = TimeFormater('2017-05-19 08:00:00.125')

describe('test timeformater.js', function () {
    
    it('test TimeFormater()', function () {
        
        expect(date).to.be.instanceof(TimeFormater)

    })

    it('test format()', function () {
        
        expect(date.format('YYYY-MM-DD HH:mm:ss.SSS')).to.equal('2017-05-19 08:00:00.125')
        expect(date.format('今天是MMMMDo，dddd')).to.equal('今天是五月19日，星期五')
        expect(date.format('现在是Ah点m分s秒SSS毫秒')).to.equal('现在是早上8点0分0秒125毫秒')
        expect(date.format('M月=MMM')).to.equal('5月=5月')
        expect(date.format('D')).to.equal('19')
        expect(date.format('d-dd-ddd')).to.equal('5-五-周五')
        expect(date.format('H点=hh点')).to.equal('8点=08点')
        expect(date.format('m')).to.equal('0')
        expect(TimeFormater('2017-9-10').format('Q')).to.equal('3')
        expect(date.format('x')).to.equal('1495152000125')
        expect(date.format('X')).to.equal('1495152000')

    })

})