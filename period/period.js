var h = process.argv[2];

var v = h[0] + h[1];

console.log("Período: " + period(v));

function period(hour) {
    var period;
    if(parseInt(hour) >= 6 && parseInt(hour) <= 12) {
        return period = "matutino";
    }
    else if(parseInt(hour) >= 13 && parseInt(hour) <= 18) {
        return period = "vespertino";
    }
    else {
        return period = "noturno";
    } 
}