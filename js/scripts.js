    $(document).ready(function(){
       
        let changeValue = true;
        $('li').click(function(){
            changeValue = !changeValue;
            var self = this;
            let value = !(changeValue) ? "o" : "x"; 
            var hehe = $(self).children('span').html(value);
            console.log(hehe);   
        });
    });