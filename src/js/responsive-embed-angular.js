angular.module('responsiveEmbed', []).controller('ResponsiveEmbedController', ['$scope', '$sce', function($scope, $sce) {
    $scope.styles = {
        div: 'position:relative;width:100%;padding-bottom:' + (($scope.ratio.split(':')[1] / $scope.ratio.split(':')[0]) * 100) + '%;',
        iframe: 'position:absolute;height:100%;width:100%;top:0;left:0;'
    };
    $scope.src = $sce.trustAsResourceUrl($scope.url + '?' + $scope.parameters);
}]).directive('responsiveEmbed', function() {
    return {
        restrict: 'E',
        scope: {
            url: '@url',
            ratio: '@ratio',
            parameters: '@parameters'
        },
        transclude: true,
        template: '<div class="responsive-embed" style="{{styles.div}}"><iframe style="{{styles.iframe}}" ng-src="{{src}}" frameborder="0" allowfullscreen></iframe></div>',
        controller: 'ResponsiveEmbedController'
    };
});