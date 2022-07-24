let slideIndex = 0;

const mySliders = () => {
  let i;
  let sliders = document.getElementsByClassName("slider");
  let dots = document.getElementsByClassName("circle");
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > sliders.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].style.backgroundColor = "#888";
  }
  dots[slideIndex - 1].style.backgroundColor = "#222";
  sliders[slideIndex - 1].style.display = "block";
  setTimeout(mySliders, 5000);
}

mySliders();
