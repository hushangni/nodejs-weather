const request = require('request');

const geocode = (address, callback) => {
    const url =
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaHVzaGFuZ25pIiwiYSI6ImNqdXg0djMzMzBqYzk0ZXBmejFva2RmZWIifQ.1QiSPj5V4zfvxt_uhYJMCg`;
    request({ url: url, json: true }, (err, res) => {
        if (err) {
            callback('unable to connect to location service');
        } else if (res.body.features.length === 0) {
            callback('unable to find location');
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[0],
                longitude: res.body.features[0].center[1],
                location: res.body.features[0].place_name
            });
        }
    });
};

module.exports = geocode;
