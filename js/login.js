$(document).ready(function () {
    // loginform validation
    $("#loginForm").submit(function (event) {
        event.preventDefault();

        let lUserName = $("#lUserName").val();
        let lPass = $("#lPass").val();
        

        let isvalid = true;
        $(".error").css("color", "#D31717");

        if (lUserName === "") {
            $("#lUserNameError").text("Enter your first name");
            isvalid = false;
        }

        if (lPass === "") {
            $("#lPassError").text("Enter Password");
            isvalid = false;
        }

        if (isvalid == true) {
            alert("✅ Login successfully!");
        }
    });



    // registerForm validation

    $("#registerForm").submit(function (event) {
        event.preventDefault();

        let fName = $("#fName").val();
        let email = $("#email").val();
        let newPass = $("#newPass").val();
        let newPassConfirm = $("#newPassConfirm").val();
        

        let isvalid = true;

        $(".error").text("").css("color", "#D31717");
        $(".error").css("color", "#D31717");

        if (fName === "") {
            $("#fNameError").text("Enter your first name");
            isvalid = false;
        }

        if (email === "") {
            $("#emailError").text("Enter E-mail");
            isvalid = false;
        }

        if (newPass === "") {
            $("#newPassError").text("Enter new Password");
            isvalid = false;
        }

        if (newPassConfirm === "") {
            $("#newPassConfirmError").text("Enter new Password");
            isvalid = false;
        }

        if (newPassConfirm !== newPass) {
            $("#newPassConfirmError").text("Passwords do not match");
            isvalid = false;
        }


        if (isvalid === true) {
            alert("✅ Registration successfully!");
        }
    });



    // forgetform validation

    $("#forgetRequest").submit(function (event) {
        event.preventDefault();

        let forgetEmail = $("#forgetEmail").val();

        let isvalid = true;


        $(".error").text("").css("color", "#D31717");
        $(".error").css("color", "#D31717");

        if (forgetEmail === "") {
            $("#forgetEmailError").text("Enter your first name");
            isvalid = false;
        }
        else if (forgetEmail.indexOf("@") === -1 || forgetEmail.indexOf(".") === -1) {
            $("#forgetEmailError").text("Enter a valid email address");
            isvalid = false;
        }

        if (isvalid == true) {
            alert("✅ Request submit successfully!");
        }
    });



});
