angular.module('app.directives', [])

.directive('galleryBlock', [function(){
    return {
        scope: {
              data: '='
            },
        template: 
            '<div class="GalleryImage">'+
            '  <div>'+
            '    <img src="https://s3.amazonaws.com/ionic-io-static/EAwLkEdSF6FkW3zzsLWA_Kings Interiors Showroom 5 600.jpg" width="100%" height="auto" style="display: block; margin-left: auto; margin-right: auto;">'+
            '</div>'+
            '  <p>'+
            '    <span>{{data.line1}}' +
            '      <span class="spacer"></span>'+
            '      <br>'+
            '      <span class="spacer"></span>{{data.line2}}</span>'+
            '  </p>'+
            '</div>'
    };
}]);