$(document).ready(function () {
    console.log('Hello from jQuery');

    $('#guess-btn').on('click', function () {
        addGuess();
    });

}); // end document.ready

getAllGuesses()

function getAllGuesses() {
    $.ajax({
        type: 'GET',
        url: '/game'
    }).done(function (response) {
        // do stuff to get the response data onto the DOM
        console.log('request was successful!');
        console.log(response);
    }).fail(function (response) {
        console.log(response);
    });
}


function addGuess() {
    let newGuess = { number: $('#guess-in').val() };

    $.ajax({
        type: 'POST',
        url: '/game/add',
        data: { guess: newGuess }
    }).done(function (response) {
        console.log('added!');
        getAllGuesses();
    }).fail(function (error) {
        console.log(error);
    })
} // end addGuess

