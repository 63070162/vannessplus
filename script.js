
// imageslide
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("item-slide");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
}


// hidden
var observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=> {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      }
      else{
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
hiddenElementsLeft.forEach((el) => observer.observe(el));

const hiddenElementsRight = document.querySelectorAll('.hidden-right');
hiddenElementsRight.forEach((el) => observer.observe(el));