document.addEventListener("DOMContentLoaded", () => {
  const Counter = document.querySelector('.counter');
  const Counter1 = document.querySelector('.counter1');
  const Counter2 = document.querySelector('.counter2');

  let counter = 0, counter1 = 0, counter2 = 0;

  const UpdatedNumbers = setInterval(() => {
    counter++;
    Counter.textContent = counter + "+";
    if (counter >= 1000) clearInterval(UpdatedNumbers);
  }, 30);

  const UpdatedCounter1 = setInterval(() => {
    counter1++;
    Counter1.textContent = counter1 + "+";
    if (counter1 >= 500) clearInterval(UpdatedCounter1);
  }, 40);

  const UpdatedCounter2 = setInterval(() => {
    counter2++;
    Counter2.textContent = counter2 + "+";
    if (counter2 >= 300) clearInterval(UpdatedCounter2);
  }, 50);

  // === CAROUSEL ===
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  const slideWidth = slides[0].offsetWidth + 10;
  let index = 0;

  // Clone first slide and append
  const firstClone = slides[0].cloneNode(true);
  track.appendChild(firstClone);

  function moveToSlide(i) {
    track.style.transition = 'transform 0.5s ease-in-out';
    track.style.transform = `translateX(-${i * slideWidth}px)`;
    index = i;
  }

  function autoSlide() {
    index++;
    moveToSlide(index);

    if (index === slides.length) {
      // At clone - wait then snap to original
      setTimeout(() => {
        track.style.transition = 'none';
        track.style.transform = `translateX(0px)`;
        index = 0;
      }, 500); // matches transition speed
    }
  }

  let auto = setInterval(autoSlide, 3000);

  nextBtn.addEventListener('click', () => {
    clearInterval(auto);
    autoSlide();
    auto = setInterval(autoSlide, 3000);
  });

  prevBtn.addEventListener('click', () => {
    clearInterval(auto);
    index = index <= 0 ? slides.length - 1 : index - 1;
    moveToSlide(index);
    auto = setInterval(autoSlide, 3000);
  });
});
    
const menuicon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-link');

menuicon.addEventListener('click', () => {
  navLinks.classList.toggle('show')
})
document.addEventListener("DOMContentLoaded", function(){
  const form = document.getElementById("orderForm");

  form.addEventListener("submit", function(e){
    e.preventDefault();

    const location1 = document.getElementById("location1").value.trim();

    const phone1 = document.getElementById("phone1").value.trim();
    const name1 = document.getElementById("name1").value.trim();
    const optional1 = document.getElementById("optional1").value.trim();

    const message = `📦 *MCLORD ORDER DETAILS*
👤 Name: ${name1}
📞 Phone: ${phone1}
📍 Venue: ${location1}
📝 Message: ${optional1 || "N/A"}`;

const whatsappNumber = "2347056134562"

const url = `https://wa.me/${whatsappNumber}?text=${message}`

window.open(url, "blank");

form.reset()
  })
})