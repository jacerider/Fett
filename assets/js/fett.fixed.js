(function ($, Drupal) {

Drupal.behaviors.fett_fixed = {
  once:0,
  attach: function (context, settings) {
    if(!this.once){
      this.once = 1;
      var $header = $('#header');
      if($header.length){

        var floated = false;
        var $placeholder = $('<div id="sticky-placeholder"></div>');
        var timeout;
        var viewPosOriginal;

        var fixed = function(viewPos){
          viewPosOriginal = viewPosOriginal || viewPos;
          if(!floated && viewPosOriginal.bottom <= viewPos.windowTopPos){
            floated = true;
            $placeholder.height($header.outerHeight()).insertAfter($header);
            $header.addClass('sticky mini');
            timeout = setTimeout(function(){
              $header.addClass('sticky-animate');
            }, 10);
          }
          if(floated && viewPosOriginal.bottom >= viewPos.windowTopPos){
            $header.removeClass('mini');
          }
          if(floated && viewPosOriginal.top >= viewPos.windowTopPos){
            floated = false;
            clearTimeout(timeout);
            $placeholder.remove();
            $header.removeClass('sticky sticky-animate');
          }
        }

        var pause = function(viewPos, isInit){
          fixed(viewPos);
        }
        var on = function(viewPos){
          fixed(viewPos);
        }

        Fett.position.track($header, {
          pause: pause,
          on: on
        });
      }
    }
  }
}

})(jQuery, Drupal);