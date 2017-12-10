var mainText = document.getElementById("mainText");
var submitBtn = document.getElementById("submitBtn");

function submitClick() {

    var firebaseRef = firebase.database().ref();
    var messageText = mainText.value;
    var confirmation;
    firebaseRef.push().set(messageText); 
    if (messageText == "") {
        alert("You've got to Shplidoo something. Try again!");
        return false;
    } else {
        confirmation = "Done!";
    }
    document.getElementById("demo").innerHTML = confirmation;    

}