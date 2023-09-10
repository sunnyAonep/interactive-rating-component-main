function rating (number) {
    let current = document.getElementsByClassName("button-active");
    if (current.length > 0) {
        current[0].className = current[0].className.replace("button-active", "");
    }
    let newRating = document.getElementsByClassName(`rating-${number}`)[0];
    newRating.className = newRating.className + " button-active";
}
function toggleTheme () {
    current = document.getElementsByTagName("body")
    if (current[0].className == "light-theme") {
        current[0].className = "";
    } else {
        current[0].className = "light-theme";
    }
}
function submit () {
    let rating = document.getElementsByClassName('button-active')[0].textContent;
    document.getElementsByClassName('selected')[0].innerHTML = `You selected ${rating} out of 5`;
    document.getElementsByClassName('rating-card-thanks')[0].style.display = "flex";
    document.getElementsByClassName('rating-card-main')[0].style.display = "none";
}