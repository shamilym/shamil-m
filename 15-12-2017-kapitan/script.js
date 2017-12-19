// JavaScript source code
var a = Number(prompt("ilk aldigi"));
var m = Number(prompt("toplam"));
var n = 1;
var c = 2;

    while (m>(2*a)) {
       m=m-a;
       a++;
       n++;
       console.log(c++,"Piratin nemresi",n,"-dene qepik");
    }
    console.log("Netice");
    console.log(n,'nefer Pirates');
    console.log(m - a, '-dene qepik Kapitan aldin');
    //console.log(,'-dene qepik Piratlara vermishdi');
    