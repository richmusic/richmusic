

function sendEmail() {

    var name= document.getElementById("formname").value;
    var email= document.getElementById("formemail").value;
    var number= document.getElementById("formphone").value;
    var city= document.getElementById("formcity").value;
    var sub= document.getElementById("w-preview-consent-checkbox").checked;
    var form = document.getElementsByClassName("form-email");
    
    $.ajax({
        type: 'post',
        url: 'https://richmusicltd.com/app/create.php',
        data: {
            "name": name,
            "email": email,
            "number": number,
            "city": city,
            "subscribed": sub
        },
        success: function( data ) {
            if(data.success){
                form.innerHTML = "Welcome to The Academy! You will now be redirected to getting your superhero name.";
                window.localStorage.setItem("useremail", email);
                setInterval(function(){ 
                    window.location.replace("superhero.html");
                  }, 2000);
            } else {
                form.innerHTML = "Your application has been denied. Refresh the page and make sure all the application fields are filled in correctly.";
            }
        },
        error: function(data) {
            form.innerHTML = "Your application has been denied. Refresh the page and make sure all the application fields are filled in correctly.";
        }
    });
}

