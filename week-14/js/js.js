
var actualIndex  ;
var newIndex;
if(actualIndex==null){
    actualIndex=0;
    newIndex=0;
}
const indicators = document.getElementsByClassName("indicator");
indicators[actualIndex].classList.add("active");

const slides = document.getElementsByClassName("slide");
slides[actualIndex].classList.add("active")



function changeImage(step){
    newIndex = actualIndex+step;
    if(newIndex<0){
        newIndex=indicators.length-1;
    }
    if(newIndex>indicators.length-1){
        newIndex=0;
    }
    console.log(newIndex);
    console.log(actualIndex);
    springToImage(newIndex); 
}

function springToImage(newIndex) {
    indicators[actualIndex].classList.remove("active");
    slides[actualIndex].classList.remove("active");
    indicators[newIndex].classList.add("active");
    slides[newIndex].classList.add("active");
    actualIndex = newIndex;

}

