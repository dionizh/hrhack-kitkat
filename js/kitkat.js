$(document).ready(function() {
    document.getElementById('bubble1').style.display = "none";
    document.getElementById('bubble2').style.display = "none";
    document.getElementById('bubble3').style.display = "none";
    document.getElementById('bubble4').style.display = "none";

    setTimeout(showBubble1, 5000);
    setTimeout(showBubble2, 7000);
    setTimeout(showBubble3, 9000);
    setTimeout(showBubble4, 10000);
});

function showBubble1() {
    document.getElementById('bubble1').style.display = "block";
}
function showBubble2() {
    document.getElementById('bubble2').style.display = "block";
}
function showBubble3() {
    document.getElementById('bubble3').style.display = "block";
}
function showBubble4() {
    document.getElementById('bubble4').style.display = "block";
}