
function sendEmail() {
    var token= document.getElementById("csrf_token").value;
    var name= document.getElementById("formname").value;
    var email= document.getElementById("formemail").value;
    var number= document.getElementById("formphone").value;
    var city= document.getElementById("formcity").value;
    var sub= document.getElementById("w-preview-consent-checkbox").value;
    var form = document.getElementById('formArea');

    $.ajax({
        type: 'post',
        url: 'https://app.mailjet.com/widget/iframe/4f3x/jcl',
        data: {
            "csrf_token": token,
            "w-field-field-73801-413424-1011191-6917": name,
            "w-field-field-73801-413424-1011191-email": email,
            "w-field-field-73801-413424-1011191-11499": number,
            "w-field-field-73801-413424-1011191-12475": city,
            "w-preview-consent-checkbox": sub
        },
        success: function( data ) {
            // form.innerHTML = $(data).find("#message-block");
            if($(data).find(".success")){
                form.innerHTML = "Welcome to The Academy! You will now be redirected to getting your superhero name.";
                window.localStorage.setItem("useremail", email);
            } else {
                form.innerHTML = "Your application has been denied. Refresh the page and make sure all the application fields are filled in correctly.";
            }
        },
        error: function(data) {
            form.innerHTML = "Your application has been denied. Refresh the page and make sure all the application fields are filled in correctly.";
        }
    });
}
