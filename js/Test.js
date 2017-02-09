function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

function preferedBrowser() {
    prefer = document.forms[0].browsers.value;
    alert("You prefer browsing internet with " + prefer);
}