var kepek = ["kep1.jpg",
        "kep2.jpg",
        "kep3.jpg",
        "kep4.jpg",
        "kep5.jpg",
        "kep6.jpg",
        "kep7.jpg",
        "kep8.jpg",
        "kep9.jpg",
        "kep10.jpg",
        "kep11.jpg",
        "kep12.jpg",
        "kep13.jpg",
        "kep14.jpg",
        "kep15.jpg",
        "kep16.jpg",
        "kep17.jpg",
        "kep18.jpg",
        "kep19.jpg",
        "kep20.jpg"];
    
var kepekalt=["lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny","lilaszörny","zöld szörny"];
var szamlalo = 1;
var kattintott = [];


$(function(){
    console.log("Hello World");
    
    
    
    
 //   $("article").append('<img src="kepek/kep1.jpg" alt=""/>');
 //   $("article").append('<img src="kepek/kep2.jpg" alt=""/>');
    
    
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/'+ kepek[i] + '" alt=""/>');
            $("article").append('<img/>');
      //      $("article img").eq(i).attr("src", "kepek/" + kepek[i]);
      $("article img").eq(i).attr("src", "kepek/hatter.png");
            $("article img").eq(i).attr("alt", "szornyhatter");
             $("article img").eq(i).attr("id", i);
             
    } 
    $("article img").click(kattint);
    
});

function kattint(){
   var id = $(this).attr("id");
//  console.log(id);
   $(this).attr("src", "kepek/"+ kepek[id]);
   $(this).attr("alt", kepekalt[id]);
   szamlalo++;
//   console.log(szamlalo);
    kattintott [szamlalo] =id;
    console.log(kattintott);
    if(szamlalo===2) {
       // visszaállítjuk a háttérképeket , csak akkor ha két különböző van
       // ha két azonos van, akkor tüntessük el a képeket.
       if(kepek[kattintott[1]]===kepek[kattintott[2]]){
           $("article>img").eq(kattintott[1]).attr("src","");
           $("article>img").eq(kattintott[2]).attr("src","");
       }
       else{
           
           setTimeout(visszafordit,1000);
       }
   }
}

function visszafordit() {
     $("article>img").eq(kattintott[1]).attr("src","kepek/hatter.jpg");
     $("article>img").eq(kattintott[2]).attr("src","kepek/hatter.jpg");
}


