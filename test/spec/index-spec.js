KISSY.add(function (S, Node,Demo) {
    var $ = Node.all;
    describe('mobile-tab', function () {
        it('Instantiation of components',function(){
            var demo = new Demo();
            expect(S.isObject(demo)).toBe(true);
        })
    });

},{requires:['node','gallery/mobile-tab/1.0/']});