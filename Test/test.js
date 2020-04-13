function sayName(name) {
    let msg = " My name is" + name;
    return msg;
}

let assert = require('chai').assert;

describe('sayName', function() {
    it("Get phrase with new name", function() {
        assert.typeOf(sayName("Ivan"), 'string')
    });
});

let arr = [1,2,4,5,6,7,8];

let res = arr.reduce(function(sum, elem) {
    return sum + elem;
});

describe('summ', function() {
    it("Get summ of numbers", function() {
        assert.equal(res, 13);
    });
});