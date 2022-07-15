const express = require("express");
const fs = require("fs");
const saveImage = require("./save_image.js");
const exif = require("exiftool");

const app = express();
const PORT = 1337;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Trash Tracker!");
});

app.post("/", (req, res) => {
  fs.appendFile(
    "./public/assets/log.txt",
    `\nNew report: \n${JSON.stringify(req.body)}\n`,
    (err) =>
      err
        ? console.log(err)
        : console.log(
            "General data are logged to ./public/assets/log.txt successfully."
          )
  );
  if (req.body.photo_url === "") {
    console.log(
      "User(s) have not sent a photo. No geolocation data available."
    );
  } else {
    saveImage.download(
      `${req.body.photo_url}`,
      "./public/assets/image.jpg",
      function () {
        fs.readFile(
          "./public/assets/image.jpg",
          ["-gpsPosition"],
          function (err, data) {
            if (err) throw err;
            else {
              console.log("Photo is stored in ./public/assets successfully.");
              exif.metadata(data, function (err, metadata) {
                if (err) throw err;
                else {
                  if (metadata.gpsPosition === undefined) {
                    fs.appendFile(
                      "./public/assets/log.txt",
                      "GPSPosition: this photo does not contain geolocation data.\n",
                      (err) =>
                        err
                          ? console.log(err)
                          : console.log("No geolocation data found in the photo.")
                    );
                  } else {
                    fs.appendFile(
                      "./public/assets/log.txt",
                      `GPSPosition: ${metadata.gpsPosition}\n`,
                      (err) =>
                        err
                          ? console.log(err)
                          : console.log(
                              "Geolocation data extracted successfully."
                            )
                    );
                  }
                }
              });
            }
          }
        );
      }
    );
  } 
  res.end();
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
