describe('responsiveEmbed', function() {
    var scope, ctrl, sce;
    // Load angular module
    beforeEach(module('responsiveEmbed'));

    // Load angular controller
    beforeEach(inject(function($controller, $rootScope, $sce) {
        sce = $sce;
        scope = $rootScope;
        scope.ratio = '';
        scope.url = 'http://youtube.com/embed/videoID';
        scope.parameters = 'color=red';
        ctrl = $controller('ResponsiveEmbedController', {$scope: scope});
    }));

    it('Expect scope.ratio to be 16:9 it is falsy', function() {
        expect(scope.ratio).toBe('16:9');
    });

    it('Expect styles.div to contain 56.25 if ratio 16:9 is given', function() {
        scope.ratio = '16:9';
        expect(scope.styles.div).toContain('56.25%');
    });

    it('Expect src to be a concatenation of url and parameters with ? in between', function() {
        expect(sce.getTrustedResourceUrl(scope.src)).toBe('http://youtube.com/embed/videoID?color=red');
    });

});