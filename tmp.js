// var request = require("request");

//By Leandro
// function getCountries() {
//     request.get("https://restcountries.eu/rest/v2/all", function (error, response, body) {
//         var countries = JSON.parse(body);
//         var countriesNames = countries.map(function (element) {
//             return element.name;
//         })
//         console.log(countriesNames.join(" - "));
//     });
// } getCountries();


// By moi
// function getCountries() {
//     var countries = [];
//     request.get(
//         "https://restcountries.eu/rest/v1/all",
//         function (err, res, body) {
//             countries = JSON.parse(body);
//             var countriesNames = countries.map((elem) => elem.name);
//             console.log countriesNames.join(" - "));
//         })
// } getCountries()

