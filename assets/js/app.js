// accordion

const items = document.querySelectorAll(".recycle-accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));

// nav
function openNav() {
  document.getElementById("navBar").classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross");
  document.querySelector(".nav-bg").classList.toggle("backflt");
}

function removeoverflow() {
  document.getElementById("navBar").classList.toggle("start-0");
  document.body.classList.remove("overflow-hidden");
  document.querySelector(".menu").classList.toggle("cross");
  document.querySelector(".nav-bg").classList.toggle("backflt");
  document.body.classList.remove("overflow-hidden");
}

// backtotop
function backtop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", function () {
  const mybackto = document.getElementById("backtop");
  if (document.documentElement.scrollTop > 500) {
    mybackto.style.display = "block";
  } else {
    mybackto.style.display = "none";
  }
});

// preloader
// preloader

const preloader = document.getElementById("preloader");
setTimeout(() => {
  document.getElementById("preloader").classList.add("d_none");
  document.body.classList.remove("overflow_hidden");
  console.log("this is not ");
}, 4000);
