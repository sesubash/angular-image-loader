/** 
 * Author:Subash Selvaraj
 * Date: 28-09-2014
 * website: subashselvaraj.com
 * Directive for showing loader for <img> tag.
 */
//========================================================================================
// This will show loader for image and substitutes original image if it is loaded successfully
// Usage: <img actual-src="{{url}}" showloader loader-class="preload" loader-src="default.jpg"/>
// =======================================================================================
angular.module('sesu.imageloader', []).directive('showloader', function () {
    return{
        link: function postLink(scope, element, attrs) {
            attrs.$observe('actualSrc', function(newVal, oldVal){
                 var _class = attrs.loaderClass;
                 if(newVal != undefined){
                     element.addClass(_class);
                     element.attr("src", attrs.loaderSrc);
                     var img = new Image();
                     img.src = attrs.actualSrc;
                     angular.element(img).bind('load', function () {
                         element.attr("src", attrs.actualSrc);
                         element.removeClass(_class);
                     });
                 }
            });
 
        }
    }
});