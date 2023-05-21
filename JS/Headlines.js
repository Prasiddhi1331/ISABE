// Target the container that has all of your headlines / links inside a variable
const headlines = document.querySelector("#headlines");
// store all links
const links = headlines.getElementsByTagName("a");

// store initial left position of headlines
let leftPosition = headlines.offsetLeft;

// create animation function of moving headlines
function moveHeadlines() {
    // left position decrease by 1px
    leftPosition -= 1;
    headlines.style.left = leftPosition + "px";

    // if the 1st link is offscreen, reset left position 0, and make the 1st link into the last link
    if (leftPosition <= -links[0].offsetWidth) {
        leftPosition = 0;
        headlines.append(links[0]);
    }

    requestAnimationFrame(moveHeadlines);
}

// call animation
requestAnimationFrame(moveHeadlines);
