
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       document.getElementById("hits").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "https://7u04hfdb9e.execute-api.us-east-2.amazonaws.com/prod/num", true);
xhttp.send();
