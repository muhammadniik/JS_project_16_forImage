const span = document.getElementById("span");
console.log(span);
window.addEventListener("scroll", function() {
    let i = -45 + (document.documentElement.scrollTop / 10);
    if (i <= 0) {
        span.style.transform = "skewy(" + i + "deg)";

    }
    console.log(i);
})