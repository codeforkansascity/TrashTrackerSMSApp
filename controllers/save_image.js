const fs = require('fs');
const exif = require('exiftool');
const request = require('request');

const download = function(uri, filename, callback){
    request.head(uri, function(err, res, body){
        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

module.exports = {
    download
};

