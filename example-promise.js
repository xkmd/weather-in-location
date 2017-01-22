//function doWork(data, callback){
//    
//}
//function doWorkPromise(data){
//    console.log(data);
//    return new Promise(function(resolve, reject){
//        //resolve('everything worked!');
//        reject('everything is broken!');
//    });
//}
//
//doWorkPromise('some data').then(function(data){
//    console.log(data);
//}, function(error){
//    console.log(error);
//})
var request = require('request');
function getWeather(location){
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
getWeather('Solcany').then(function(data){
    console.log(data);
}, function(error){
    console.log(error);
});