const indicators = document.getElementsByClassName("indicator");
indicators[0].classList.add("active");

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("active")

var actualIndex = 0 ;

function changeImage(step){

    var newIndex = (actualIndex+step) % (indicators.length) ;
    console.log(newIndex);

    springToImage(newIndex);
  
}

function springToImage(newIndex) {
    indicators[actualIndex].classList.remove("active");
    slides[actualIndex].classList.remove("active");

    indicators[newIndex].classList.add("active");
    slides[newIndex].classList.add("active");
    
    actualIndex = newIndex;
}
