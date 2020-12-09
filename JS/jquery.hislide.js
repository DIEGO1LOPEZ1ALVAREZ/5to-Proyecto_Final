(function($) {
    
    var slide = function(ele,options) {
        var $ele = $(ele);
        
        var setting = {
        		
            speed: 1500,
            
            interval: 2000,
            
        };
        
        $.extend(true, setting, options);
        
        var states = [
            { $zIndex: 1, width: 300, height: 330, top: 99, left: -110, $opacity: 0.7 },
            { $zIndex: 2, width: 310, height: 350, top: 75, left: 206, $opacity: 0 },
            { $zIndex: 3, width: 350, height: 398, top: 75, left: 206, $opacity: 1 },
            { $zIndex: 2, width: 300, height: 330, top: 99, left: 575, $opacity: 0.7 },
           /* { $zIndex: 3, width: 170, height: 218, top: 35, left: 470, $opacity: 0.7 },
            { $zIndex: 2, width: 130, height: 170, top: 59, left: 620, $opacity: 0.4 },
            { $zIndex: 1, width: 120, height: 150, top: 69, left: 500, $opacity: 0.2 }*/
        ];

        var $lis = $ele.find('li');
        var timer = null;

        
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

        
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        function next() {
            
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    // slide()
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);
