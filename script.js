const $ = (e, i) =>i ? document.querySelectorAll(`${e}`) :document.querySelector(`${e}`);

// navbar toggle
$("#menuBtn").addEventListener("click",()=>{
    $(".navlinks_outer").style.left="0rem";
});
$("#clossBtn i").addEventListener("click",()=>{
    $(".navlinks_outer").style.left= "-10rem";
});


// getting corrent year
$(".date").innerHTML = new Date().getFullYear()