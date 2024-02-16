//JavaScript Code
function circleCalculator() {

    let radius = document.getElementById('tbCircleRadius').value;
    let circleOutput = 3.14 * radius * radius;
    let calcCircle = document.getElementById('circleOutput');
    calcCircle.textContent = circleOutput + ' is your total ';
}
