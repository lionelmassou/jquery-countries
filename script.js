// var request = require("request");

$(function getCountries() {

    $("#btnShowCountries").click(function () {
        getCountries();

        $.ajax({
            url: "http://localhost:8000/countries",

            // success: function (data, statuts, response) {
            success: (data, status, response) => {

                for (var i = 0; i < data.length; i++) {

                    $("#countries").append(`<li>${data[i]}</li>`);

                }
                // console.log(data);
                // $("#text").html(data)
            }
        })
    })
})



// Après le chargement du site, capturez le click 
// du bouton et à ce moment faites un appel a 
// votre function getCountries. Récupérez le 
// retour de cette fonction et ajoutez une 
// liste ul à votre html, ou chaque pays sera
//  un élément de la liste.  