import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0 ;i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector(".carousel-inner")).width;
        const slides = this[i].querySelectorAll('.carousel-item');
        const slidesField = this[i].querySelector('.carousel-slides');
        const dots = this[i].querySelectorAll('.carousel-indicators li');
        let offset = 0;
        let slideIndex = 0;
        slidesField.style.width = 100 * slides.length + '%';
        slides.forEach(slide => {slide.style.width = width});
        $(this[i].querySelector('[data-slide="next"]')).click((e) => {
            e.preventDefault();
            offset == (+width.replace(/\D/g, '') * (slides.length - 1)) ?
            offset = 0 : offset += +width.replace(/\D/g, '');
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex == slides.length - 1 ?
            slideIndex = 0 : slideIndex++;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        $(this[i].querySelector('[data-slide="prev"]')).click((e) => {
            e.preventDefault();
            offset == 0 ? offset = +width.replace(/\D/g, '') * (slides.length - 1) :
            offset -= +width.replace(/\D/g, '');
            slidesField.style.transform = `translateX(-${offset}px)`;
            slideIndex == 0 ? 
            slideIndex = slides.length - 1 : slideIndex--;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        const sliderId = this[i].getAttribute('id');
        $(`#${sliderId} .carousel-indicators li`).click((e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo;
            slidesField.style.transform = `translateX(-${offset}px)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        }); 
    }
};

$('.carousel').carousel();

$.prototype.createCarousel = function (setCarousel) {
   for (let i = 0; i < this.length; i++) {
      const countSlides = setCarousel.slides.length;
 
      this[i].style.width = setCarousel.width + "px";
      this[i].style.height = setCarousel.height + "px";
 
      this[i].innerHTML = `
         <ol class="carousel-indicators"></ol>
         <div class="carousel-inner">
              <div class="carousel-slides"></div>
         </div>
         <a href="#" class="carousel-prev" data-slide="prev">
              <span class="carousel-prev-icon">&lt;</span>
         </a>
         <a href="#" class="carousel-next" data-slide="next">
              <span class="carousel-next-icon">&gt;</span>
         </a>
      `;
 
      for (let j = 0; j < countSlides; j++) {
         const dotItem = document.createElement("li"),
               slideItem = document.createElement("div"),
               slideImg = document.createElement("img");
         dotItem.setAttribute("data-slide-to", `${j}`);
         this[i].querySelector(".carousel-indicators").appendChild(dotItem);
         if (j == 0) {dotItem.classList.add("active");}
         this[i].querySelector(".carousel-slides").appendChild(slideItem);
         slideItem.classList.add("carousel-item");
         slideItem.style.width = this[i].style.width;
         slideItem.appendChild(slideImg);
         slideImg.setAttribute("src", setCarousel.slides[j]["src"]);
         slideImg.setAttribute("alt", setCarousel.slides[j]["alt"]);
      }
   }
   return this;
};
