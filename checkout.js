$(document).ready(function () {
    // form validation
    $("#checkoutForm").submit(function (event) {
        event.preventDefault();
        
        let fName = $("#fname").val();
        let lName = $("#lname").val();
        let email = $("#email").val();
        let address = $("#address").val();
        let city = $("#city").val();
        let country = $(".form-select").val();
        let zip = $("#zip").val();
        
        let isvalid = true;
        $(".error").css("color", "#D31717");

        if (fName === "") {
            $("#fNameError").text("Enter your first name");
            isvalid = false;
        }

        if (lName === "") {
            $("#lNameError").text("Enter your last name");
            isvalid = false;
        }

        if (email === "") {
            $("#emailError").text("Enter your E-mail");
            isvalid = false;
        }

        if (address === "") {
            $("#addresError").text("Enter your addres");
            isvalid = false;
        }

        if (city === "") {
            $("#cityError").text("Enter your city");
            isvalid = false;
        }

        if (country === "null") {
            $("#countyError").text("Select Your Country");
            isvalid = false;
        }

        console.log(country);
        console.log("#countryError");

        if (zip === "") {
            $("#zipError").text("Enter your zimp code");
            isvalid = false;
        }

        if (isvalid == true) {
            alert("✅ Order placed successfully!");
        }

        console.log(fname);
    });

    // $("#credit").on(focus, function () {
    //     $("#paymentInfoForm").show();
    // });
    // $("#credit").on(focus, function () {
    //     $("#paymentInfoForm").show();
    // });
    // $("#cod").on(focus, function () {
    //     $("#paymentInfoForm").hide(fast);
    // });

    // payment option

    if ($('input[name="paymentMethod"]:checked').attr("id") === "cod") {
        $("#payment-info").fadeIn(800);
    }

    $('input[name="paymentMethod"]').change(function () {
        if ($(this).attr("id") === "cod") {
            $("#payment-info").fadeOut(800);
        } else {
            $("#payment-info").fadeIn(800);
        }
    });
});
