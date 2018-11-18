const $ = require('jQuery');

console.log(os.cpus())

$( document ).ready(function() {
    console.log( "ready!" );
    console.log(os.cpus()[0].model)
    $("#loginBtn").click(function() {
        console.log("click")
        window.location.href = 'appointments.html';
    });
});

