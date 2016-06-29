var chai = require('chai');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
var Calculator = require('../code/calculator');
var delay = require('../code/delay');
chai.use(chaiAsPromised);

describe( "delay", function(){
    var calculator = new Calculator();
    it( "returns a promise", function(){
        var willAdd = delay( 100, calculator, 'add', [ 1, 1 ] );
        return Promise.all([
            expect( willAdd ).to.be.instanceOf( Promise ),
            expect( willAdd ).to.be.fulfilled
        ]);
    });
    it( "delays execution", function(){
        return Promise.all([
            expect( delay( 1000, calculator, 'add', [ 10, 5 ] ) ).to.eventually.equal( 15 ),
            expect( delay( 500, calculator, 'subtract', [ 9, 5 ] ) ).to.eventually.equal( 4 )
        ]);
    });
    it( "cannot execute functions that do not exist", function(){
        return expect( delay( 1000, calculator, 'sqrt', [ 2, 2 ] ) ).to.be.rejected;
    }); 
});