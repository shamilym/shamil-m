// JavaScript source code
var a = Number(prompt("ilk aldigi"));
var m = Number(prompt("toplam"));
var n = 1;

    while (m>(2*a)) {
       m=m-a;
       a++;
       n++;
    }

    console.log(n,'nefer Pirates');
    console.log(m - a, '-dene qepik Kapitan');
    