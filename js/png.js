// //Business logic
function ping(input) {
    for (var i = 1; i <= input; i++) {
        if (i % 15 === 0) {
            $(".output").append("<li" + "pinpong" + "</li>");
        } else if (i % 3 === 0) {
            $(".output").append("<li>" + "ping" + "</li>");

        } else if (i % 5 === 0) {

            $(".output").append("<li>" + "pong" + "</li>");
        } else {

            $(".output").append("<li>" + i + "</li>");
        }

    }
}

/* Interface logic*/

$(document).ready(function() {
    $("#inputno").submit(function() {
        event.preventDefault();
        var input = parseInt($("#inputNumber").val());
        ping(input);


    });
});
