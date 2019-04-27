const request = require("request");

const forcast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/d6463c742956a00af3794f444f6cbd67/" +
      latitude +
    "," +
      longitude;

  request({ url: url, json: true }, (err, res) => {
    if (err) {
      callback("Error! Unable to connect to weather service.");
    } else if (res.body.error) {
      callback("unable to find location");
    } else {
      callback(undefined,
        res.body.daily.data[0].summary +
        `it is currently ${
          res.body.currently.temperature
        } degress out and there is a ${
          res.body.currently.precipProbability
        }% chance of raining`
      );
    }
  });
};

module.exports = forcast;
