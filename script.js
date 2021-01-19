const counters = document.querySelectorAll(".counter");
 
const firstCounterContainer = document.querySelectorAll(".counter-container")[0];

counters.forEach((counter) => {counter.innerText = "0"});
 
let counterInit = false;
 
window.addEventListener("scroll", () => {
  console.log("Container offset", firstCounterContainer.offsetTop);
  console.log("body scroll offset", document.documentElement.scrollTop);
 
  if ((document.documentElement.scrollTop > (firstCounterContainer.offsetTop -500))) {
    if (counterInit == false) {
      counters.forEach((counter) => {
        counter.innerText = "0";
 
        const updateCounter = () => {
          const target = +counter.getAttribute("data-target");
          const c = +counter.innerText;
 
          const increment = target / 200;
 
          if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
          } else {
            counter.innerText = target;
          }
        };
 
        updateCounter();
      });
      counterInit = true;
    }
  }
});


