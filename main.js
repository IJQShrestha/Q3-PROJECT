function regfare() {
    const baseFare=13;
    var destination = document.getElementById('goingto').value;
    var origin = document.getElementById('leavingfrom').value;

    var distance = destination - origin;
    var fare = distance + baseFare;

document.getElementById("tixPrice").innerHTML = "₱" + fare;
}
function discfare(){
    const baseFare=13;
    var destination = document.getElementById('goingto').value;
    var origin = document.getElementById('leavingfrom').value;
    var distance = destination - origin;
    var fare = distance + baseFare;
    var discounted = fare*0.8
document.getElementById("tixPrice").innerHTML = "₱" + discounted;
}