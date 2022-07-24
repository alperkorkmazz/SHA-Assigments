
var actualIndex ;

if(actualIndex==null){
    actualIndex=0;
}
const indicators = document.getElementsByClassName("indicator");
indicators[actualIndex].classList.add("active");

const slides = document.getElementsByClassName("slide");
slides[actualIndex].classList.add("active")

/** Auto change part
 * 
 * */ 
 autoChange();
 function autoChange(){
    changeImage(1);
    setTimeout(autoChange,5000);
 }


/*document.getElementById("arrowl").addEventListener("click",function (){
    console.log("hi");
});*/

function changeImage(step){
    var newIndex = actualIndex+step;
    if(newIndex < 0){
        newIndex = slides.length-1;
    } else if (newIndex > slides.length-1) {
        newIndex = 0;
    } 
    springToImage(newIndex); 
}

function springToImage(newIndex) {
    indicators[actualIndex].classList.remove("active");
    slides[actualIndex].classList.remove("active");
    indicators[newIndex].classList.add("active");
    slides[newIndex].classList.add("active");
    actualIndex = newIndex;
}



