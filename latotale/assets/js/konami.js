//Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
$(document).keydown(function (e) {
    if (e.keyCode === k[n++]) {
        if (n === k.length) {
            window.location.href = "assets/images/daVinciCloud-gris.svg";
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
    }
});
