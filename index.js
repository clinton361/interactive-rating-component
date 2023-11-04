let submitBtn = document.querySelector('.js-submit-btn');
const mainCard = document.querySelector('.js-card');
const ratingCard = document.querySelector('.js-next-card');
let ratingNumber = document.querySelectorAll('.js-rating-btn');

ratingNumber.forEach((rate) => {
  rate.addEventListener("click", () => {
    document.querySelector('.js-rating-number').innerHTML = rate.innerHTML
  })
})