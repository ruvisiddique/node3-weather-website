const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/2986f0cb14c8ac726c35b7328421ad92/'+latitude+','+longitude
    request({url:url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if(response.body.error) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }

    })

}
module.exports = forecast