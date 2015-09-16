describe('responsiveEmbed', function() {
    var scope, ctrl;
    // Load angular module
    beforeEach(module('responsiveEmbed'));

    // Load angular controller
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope;
        ctrl = $controller('ResponsiveEmbedController', {$scope: scope});
    }));

    // Tests
    it('Expect setStyles() to successfully calculate the padding-bottom property', function() {
        scope.ratio = '16:9';
        expect(scope.styles.div).toContain('56.25%');
    });

    it('Expect scope parameters to contain a serialized string if given an object', function() {
        scope.url = '';
        scope.parameters = '';
        expect(scope.parameters).toBe('?autoplay=1&color=red');
    });

});