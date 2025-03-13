var searchBtn = $('#searchBtn');
var input = $('#input');
const key = "6d5c32382a024f44ad15cac8b23f815c";


searchBtn.click(function(e){
    
    var cityName = input.val();
    if(cityName===""){
        alert("Please Enter any city name");
        return ;
    }

    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

    $.get(url,function(data,status){

       
       $('.error p').css("display","none");


        var temp = `${data.main.temp}°C`;
        var nameOfCity = data.name;
        var humidity = `${data.main.humidity}%`;
        var windSpeed = `${data.wind.speed} km/h`;
        $('.temp').html(temp);
        $('.city').html(nameOfCity);
        $('.humidity').html(humidity);
        $('.wind').html(windSpeed);

        
        var source = data.weather[0].main.toLowerCase();

        
       
        $('#icon > img').attr("src",`${source}.png`);
        $('#icon > img').attr("alt",source);

        $('.weather').css("display","block");


    }).fail(function(){
        $('.error p').css("display","block");
        $('.weather').css("display","none");
        $('.error p').html("Invalid city name");
    });


});
