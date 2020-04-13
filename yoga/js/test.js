describe("Timer", function() {
    it('Return object?', function() {
        assert.typeOf(getTimeremaining(), 'object');
    });

    it('Started timer', function() {
        assert.typeOf(setClock('#timer', deadline), 'string');
    });

    describe('Total summ', function() {
        it("In beginnig = 0", function() {
            assert.equal(total, 0)
        })
    })
});