var today = new Date();
var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
document.getElementById("heute").innerHTML=today.toLocaleDateString("en-US", options);
