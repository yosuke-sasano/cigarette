    
    var button = $('#button').get(0);  
    $('#button').on("click",function(){  
        var weekly = $('#weekly').get(0).value;    
        var yearly = weekly * 52;
        $('#yearly').get(0).value = yearly; 

        if (yearly >= 1 && yearly <= 5000) setInterval(function() {$("#zero").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 5001 && yearly <= 10000) setInterval(function() {$("#zero,#one").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 10001 && yearly <= 20000) setInterval(function() {$("#one,#two").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 20001 && yearly <= 30000) setInterval(function() {$("#two,#three").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 30001 && yearly <= 40000) setInterval(function() {$("#three,#four").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 40001 && yearly <= 50000) setInterval(function() {$("#four,#five").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 50001 && yearly <= 60000) setInterval(function() {$("#five,#six").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 60001 && yearly <= 70000) setInterval(function() {$("#six,#seven").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 70001 && yearly <= 80000) setInterval(function() {$("#seven,#eight").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 80001 && yearly <= 90000) setInterval(function() {$("#eight,#nine").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 90001 && yearly <= 100000) setInterval(function() {$("#nine,#ten").fadeOut(500).fadeIn(500);}, 1000);
        else if (yearly >= 100001) setInterval(function() {$("#more").fadeOut(500).fadeIn(500);}, 1000);
        else setInterval(function() {$("").fadeOut(500).fadeIn(500);}, 1000);
    });                         
