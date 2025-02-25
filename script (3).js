function uploadProfilePic(event) {
    var reader = new FileReader();
    reader.onload = function(){
        var img = document.getElementById("profile-pic");
        img.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}

function toggleLostCard() {
    var lostCard = document.getElementById("lost-card").checked;
    if (lostCard) {
        alert("Your physical ID is now locked. Use only the digital version.");
    } else {
        alert("Your physical ID is now reactivated.");
    }
}
