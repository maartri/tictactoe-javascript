    $(document).ready(function(){       
        var changeValue = true;
        var sqr1 = $('#sqr1');        
        var sqr2 = $('#sqr2');
        var sqr3 = $('#sqr3');
        var sqr4 = $('#sqr4');
        var sqr5 = $('#sqr5');
        var sqr6 = $('#sqr6');
        var sqr7 = $('#sqr7');
        var sqr8 = $('#sqr8');
        var sqr9 = $('#sqr9');

        $('li').click(function(){
            var self = this;
            if($(self).hasClass('disabled'))
                return false;

            changeValue = !changeValue;

            let value = changeValue ? "o" : "x"; 
            var hehe = $(self).children('span').html(value);

            if (changeValue)
                $(self).addClass('disabled o'); 
            else
                $(self).addClass('disabled x');

            if(sqr1.hasClass('o') && sqr2.hasClass('o') && sqr3.hasClass('o') ||
               sqr4.hasClass('o') && sqr5.hasClass('o') && sqr6.hasClass('o') ||
               sqr7.hasClass('o') && sqr8.hasClass('o') && sqr9.hasClass('o') ||
               sqr1.hasClass('o') && sqr4.hasClass('o') && sqr7.hasClass('o') ||
               sqr2.hasClass('o') && sqr5.hasClass('o') && sqr8.hasClass('o') ||
               sqr3.hasClass('o') && sqr6.hasClass('o') && sqr9.hasClass('o') ||
               sqr1.hasClass('o') && sqr5.hasClass('o') && sqr9.hasClass('o') ||
               sqr3.hasClass('o') && sqr5.hasClass('o') && sqr7.hasClass('o') ){
                    console.log('o wins');
                    $('li').addClass('disabled');
                }
            else if(sqr1.hasClass('x') && sqr2.hasClass('x') && sqr3.hasClass('x') ||
               sqr4.hasClass('x') && sqr5.hasClass('x') && sqr6.hasClass('x') ||
               sqr7.hasClass('x') && sqr8.hasClass('x') && sqr9.hasClass('x') ||
               sqr1.hasClass('x') && sqr4.hasClass('x') && sqr7.hasClass('x') ||
               sqr2.hasClass('x') && sqr5.hasClass('x') && sqr8.hasClass('x') ||
               sqr3.hasClass('x') && sqr6.hasClass('x') && sqr9.hasClass('x') ||
               sqr1.hasClass('x') && sqr5.hasClass('x') && sqr9.hasClass('x') ||
               sqr3.hasClass('x') && sqr5.hasClass('x') && sqr7.hasClass('x')){
                   console.log('x wins');
                   $('li').addClass('disabled');
               }
        });

        $('div.reset').click(function(){
            $('li').removeClass().children('span').html('+');
        });
    });