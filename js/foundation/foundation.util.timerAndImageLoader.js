"use strict";!function(t){function i(t,i,e){var a,n,s=this,u=i.duration,o=Object.keys(t.data())[0]||"timer",r=-1;this.isPaused=!1,this.restart=function(){r=-1,clearTimeout(n),this.start()},this.start=function(){this.isPaused=!1,clearTimeout(n),r=r<=0?u:r,t.data("paused",!1),a=Date.now(),n=setTimeout(function(){i.infinite&&s.restart(),e()},r),t.trigger("timerstart.zf."+o)},this.pause=function(){this.isPaused=!0,clearTimeout(n),t.data("paused",!0);var i=Date.now();r-=i-a,t.trigger("timerpaused.zf."+o)}}function e(i,e){function a(){n--,0===n&&e()}var n=i.length;0===n&&e(),i.each(function(){this.complete?a():"undefined"!=typeof this.naturalWidth&&this.naturalWidth>0?a():t(this).one("load",function(){a()})})}Foundation.Timer=i,Foundation.onImagesLoaded=e}(jQuery);