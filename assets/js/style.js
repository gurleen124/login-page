$(document).ready(function () {
    var regex = /^([\w\.\+]{1,})([^\W])(@)([\w]{1,})(\.[\w]{1,})+$/;
    //defined regular expression for email format

    //email validation function
    $("#email").keyup(function () {
        var a = $('#email').val();
        if (regex.test(a)) {
            $("#email").css("border", "2px solid green");
        } else {
            $("#email").css("border", "2px solid red");
            $("#emailMsg").html("<p class='text-danger float-end'>Incorrect Email Format</p>");
        }
    });

    //login button validation function
    $(".loginButton").click(function () {
        var a = $('#email').val();
        var b = $('#password').val();
        if ((a === "admin@gmail.com") && (b === "admin123")) {
            alert('Login Successfully');
        }
        else if ((a === "") || (b === "")) {
            $("#passMsg").html("<p class='text-danger float-end'>Both fields are Required</p>");
        }
        else {
            alert('Email and Password Incorrect');
        }
    });

    //eye open close event
    $("#eyeOpenIcon").click(function () {
        $(this).toggleClass("bi-eye-fill bi-eye-slash-fill")
        $(this).siblings("#password").each(function () {
            var type = $(this).attr('type');
            if (type === "password") {
                $(this).attr('type', 'text');
            } else {
                $(this).attr('type', 'password');
            }
        })
    });
});