function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

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

function showResources() {
    document.getElementById("resources").style.display = "block";
}

function hideResources() {
    document.getElementById("resources").style.display = "none";
}
