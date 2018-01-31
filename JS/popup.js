function myFunction() {
    var txt;
    if (confirm("Is the information is correct? Click yes. If not click cancel")) {
        txt = "You have submitted the application!";
    } else {
        txt = "You have cancelled the application";
    }
    document.getElementById("demo").innerHTML = txt;
}
