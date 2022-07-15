const fs = require('fs');
const exif = require('exiftool');
const request = require('request');

const download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
    console.log('content-type:', res.headers['content-type']);
    console.log('content-length:', res.headers['content-length']);

    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};

download('https://d.newsweek.com/en/full/2006008/dog-field.jpg?w=1600&h=1600&q=88&f=07904ef4d006dfb3cedd58766f0d6ca2', './public/assets/image.jpg', function(){
  console.log('done');
  fs.readFile('./public/assets/image.jpg', ['-gpsLatitude', 'gpsLongitude', 'gpsPosition'], function (err, data) {
    if (err)
      throw err;
    else {
      exif.metadata(data, function (err, metadata) {
        if (err)
          throw err;
        else
            if (metadata.gpsLatitude === undefined && metadata.gpsLongitude === undefined && metadata.gpsPosition === undefined) {
                console.log("Sorry, this image does not contain geolocation data.");
            }
            else {
            console.log("GPSLatitude: " + metadata.gpsLatitude);
            console.log("GPSLongitude: " + metadata.gpsLongitude);
            console.log("GPSPosition: " + metadata.gpsPosition);
            }
      });
    }
  });
});

