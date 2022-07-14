// Use npm package exiftool
const exif = require('exiftool');
const fs   = require('fs');
 
// Logging all metadata
// fs.readFile('./public/images/extract-exif.jpeg', function (err, data) {
//   if (err)
//     throw err;
//   else {
//     exif.metadata(data, function (err, metadata) {
//       if (err)
//         throw err;
//       else
//         console.log(metadata);
//     });
//   }
// });

// Filtering metadata
fs.readFile('./public/images/extract-exif.jpeg', ['-gpsLatitude', 'gpsLongitude', 'gpsPosition'], function (err, data) {
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