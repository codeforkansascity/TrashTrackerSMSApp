// Use npm package dist-exiftool
const execFile = require('child_process').execFile;
const exiftool = require('dist-exiftool');
 
execFile(exiftool, ['-j', 'image.jpg'], (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});

// Use npm package exiftool
// var exif = require('exiftool');
// var fs   = require('fs');
 
// fs.readFile('./image.jpg', function (err, data) {
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
// fs.readFile('./image.jpg', ['-filesize'], function (err, data) {
//     if (err)
//       throw err;
//     else {
//       exif.metadata(data, function (err, metadata) {
//         if (err)
//           throw err;
//         else
//           console.log(metadata.fileSize); // filtering here
//       });
//     }
//   });