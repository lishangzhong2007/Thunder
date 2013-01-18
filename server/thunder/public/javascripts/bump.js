var ifBumpThreshold = 3;
var speedArray = new Array();
var timeSpan = 20;

function mean(a) {
    var sum = eval(a.join(" + "));
    return sum / a.length;
}

function stdDev() {
    var a = speedArray;
    var m = mean(a);
    var sum = 0;
    var l = a.length;
    for(var i = 0; i < l; i++) {
        var dev = a[i] - m;
        sum += (dev * dev);
    }
    return Math.sqrt(sum / (l - 1));
}

function getSpeed(x, y, z) {
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}

function addSpeed(x, y, z) {
    var speed = getSpeed(x, y, z);
    speedArray.push(speed);
    if(speedArray.length > 100) {
        speedArray.shift();
    }
}

function isBump() {
    var s = stdDev();
    var bump = s > ifBumpThreshold;
    if(bump) {
        speedArray = new Array();
    }
    return bump;
}