function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var randomColorButton = document.querySelector('.random-color-button');
var bioContainer = document.querySelector('.bio-container');
var colorChangeInterval;

randomColorButton.addEventListener('click', function() {
    clearInterval(colorChangeInterval);

    var startColor = getRandomColor();
    var endColor = getRandomColor();
    var currentColor = startColor;
    var steps = 50;
    var stepCount = 0;

    colorChangeInterval = setInterval(function() {
        stepCount++;
        var rStep = (parseInt(endColor.substring(1, 3), 16) - parseInt(startColor.substring(1, 3), 16)) / steps;
        var gStep = (parseInt(endColor.substring(3, 5), 16) - parseInt(startColor.substring(3, 5), 16)) / steps;
        var bStep = (parseInt(endColor.substring(5, 7), 16) - parseInt(startColor.substring(5, 7), 16)) / steps;

        var r = Math.round(parseInt(startColor.substring(1, 3), 16) + (rStep * stepCount));
        var g = Math.round(parseInt(startColor.substring(3, 5), 16) + (gStep * stepCount));
        var b = Math.round(parseInt(startColor.substring(5, 7), 16) + (bStep * stepCount));

        currentColor = '#' + (r < 16 ? '0' : '') + r



