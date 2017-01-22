var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
    .option('location', {
        alias: 'l',
        demand: false,
        describe: 'Location to fetch weather for',
        type: 'string'
    })
    .help('help')
    .argv
;
/*
weather(function(currentWeather){
    console.log(currentWeather);
});


location(function(locat){
    if(!locat){
        console.log('unable to fetch location');
        return;
    }
    console.log('city: ' + locat.city);
    console.log('long/lat: ' + locat.loc);
});
*/
//if(typeof argv.l === 'string' && argv.l.length > 0){
//    console.log('has location');
//    weather(argv.l, function(currentWeather){
//        console.log(currentWeather);
//    })
//}else{
//    console.log('no location given');
//    location(function(location){
//        if(location){
//            weather(location.city, function(currentWeather){
//        console.log(currentWeather);
//            })
//        }else{
//            console.log('unable to fetch location');
//        }
//    });
//}

if(typeof argv.l === 'string' && argv.l.length > 0){
    console.log('has location');
    weather(argv.l).then(function(data){
        console.log(data);
    }).catch(function(error){
        console.log(error);
    });
}else{
    console.log('no location given');
    location().then(function(loc){
        return weather(loc.city);
    }).then(function(curweather){
        console.log(curweather);
    }).catch(function(error){
        console.log(error);
    });
}