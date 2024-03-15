$(document).ready(function () {
    var a = $('#email').val();
    var b = $('#password').val();
    var regex = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;

    $("#email").keyup(function () {
        if (regex.test(a)) {
        $("#email").css("border","2px solid green");
        $("#emailMsg").html("<p class='text-success'>Valid</p>");
       } else {
        $("#email").css("border","2px solid red");
        $("#emailMsg").html("<p class='text-danger'>InValid</p>");
       }
    });
    
    $(".submit").click(function () {
        if ((a == "admin@gmail.com") || (b == "admin123")) {
            alert('Login Successfully');
        } else {
            alert('Email and Password Incorrect');
        }
    });
});