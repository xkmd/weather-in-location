var request = require('request');

//module.exports = function(location, callback){
//    var encodedLocation = encodeURIComponent(location);
//    var url ='http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=metric&appid=f906dcde6a23380d0b7dd64fba3824ed';
//    
//    if (!location)
//        return callback('no location provided');
//    
//    request({
//        url: url,
//        json: true
//    
//    }, function(error, response, body){
//        if(error)
//            callback('unable to fetch weather');
//        else{
//            callback("It's " + body.main.temp + " degrees in " + body.name + ".");
//        }
//    });
//}

module.exports = function(location){
    return new Promise(function(resolve, reject){
        var encodedLocation = encodeURIComponent(location);
        var url ='http://api.openweathermap.org/data/2.5/weather?q='+ encodedLocation +'&units=metric&appid=f906dcde6a23380d0b7dd64fba3824ed';

        if (!location)
            return reject('no location provided');

        request({
            url: url,
            json: true

        }, function(error, response, body){
            if(error)
                reject('unable to fetch weather');
            else{
                resolve("It's " + body.main.temp + " degrees in " + body.name + ".");
            }
        });
    });
}