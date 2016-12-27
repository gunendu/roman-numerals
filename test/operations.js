var data_driven = require('data-driven');
var chai = require('chai');
var expect = chai.expect;
var roman_numerals = require('../roman_numerals.js')

describe('operations',function(){
  data_driven([{"opnd1":"X", "opnd2":"X", "opr":"*","out":"C"},{"opnd1":"XL", "opnd2":"X", "opr":"+","out":"L"},{"opnd1":"C", "opnd2":"I", "opr":"-","out":"XCIX"}], function() {
    it('do operation using roman numberals',function(ctx) {
        var operations = roman_numerals.operations(ctx['opnd1'],ctx['opnd2'],ctx['opr'])
        expect(operations).to.equal(ctx['out'])
    });
  });
  data_driven([{"opnd1":"X", "opnd2":"X", "opr":"*","out":"L"},{"opnd1":"XL", "opnd2":"X", "opr":"+","out":"I"},{"opnd1":"C", "opnd2":"I", "opr":"-","out":"XCI"}], function() {
    it('do operation using roman numberals,it should fail',function(ctx) {
        var operations = roman_numerals.operations(ctx['opnd1'],ctx['opnd2'],ctx['opr'])
        expect(operations).to.equal(ctx['out'])
    });
  });
});
