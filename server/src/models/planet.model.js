const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse");

const habitablePlanet = [];

function isHabitablePlanet(planet) {
  // in 2015 research we found a habitable palnet must have min temp 0.36 times of earth and max 1.11 times of earth and the radius must be less than 1.6 of earth
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "..", "..", "data", "Keplar_data.csv"),
    )
      .pipe(parse({ comment: "#", columns: true })) //columns: gives us JS key value pair instead of an array
      .on("data", (data) => {
        if (isHabitablePlanet(data)) habitablePlanet.push(data);
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log(`${habitablePlanet.length} habitable planet found.`);
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanet,
};
