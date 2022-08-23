// alert("Hi")
function myfun() {
var dice = document.querySelectorAll("img");


var x = Math.floor(Math.random() * 6) + 1;

var y =  Math.floor(Math.random() * 6) + 1;

// alert(x + y);

if (x > y){
    document.querySelector('h1').innerHTML=('Player 1 Wins &#129321');
}

if (y > x) {
    document.querySelector('h1').innerHTML=('&#129321 Player 2 Wins!');
}

if (x===y) {
    document.querySelector('h1').innerHTML=('&#9996 Its a tie!');
}

var image1 = 'images/dice' + x + '.png';
var image2 = 'images/dice' + y + '.png';

dice[0].setAttribute('src', image1);
dice[1].setAttribute('src', image2);
}
