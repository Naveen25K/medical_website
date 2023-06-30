const heroImgObj = [
  { heroBg: "src/slider_001.jpg" },
  { heroBg: "src/slider_002.jpg" },
  { heroBg: "src/slider_003.jpg" },
];

// left and right arrow functionality

const hero_slider = document.getElementById("hero_slider");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const loadHeroImage = (heroImgInd) => {
  hero_slider.style.backgroundImage = `url(${heroImgInd.heroBg})`;
};
let sliderIndex = 0;
next.addEventListener("click", () => {
  sliderIndex = (sliderIndex + 1) % heroImgObj.length;
  loadHeroImage(heroImgObj[sliderIndex]);
});

prev.addEventListener("click", () => {
  sliderIndex = (sliderIndex - 1 + heroImgObj.length) % heroImgObj.length;
  loadHeroImage(heroImgObj[sliderIndex]);
});

(() => {
  loadHeroImage(heroImgObj[sliderIndex]);
})();

// pagination functionality

// switch (e.target.id) {
//   case "pagination_1":
//     alert("first");
//   case "pagination_2":
//     alert("2nd");
//   case "pagination_3":
//     alert("3rd");
//   default:
//     alert("default");
// }

const pagination = document.getElementById("pagination");
const pagination_1 = document.getElementById("pagination_1");
const pagination_2 = document.getElementById("pagination_2");
const pagination_3 = document.getElementById("pagination_3");

const hero_pagination = (e) => {
  switch (e.target.id) {
    case "pagination_1":
      loadHeroImage(heroImgObj[0]);
      sliderIndex = 0;
      pagination_1.classList.add("active");
      pagination_2.classList.remove("active");
      pagination_3.classList.remove("active");
      break;
    case "pagination_2":
      loadHeroImage(heroImgObj[1]);
      pagination_2.classList.add("active");
      pagination_1.classList.remove("active");
      pagination_3.classList.remove("active");
      sliderIndex = 1;
      break;
    case "pagination_3":
      loadHeroImage(heroImgObj[2]);
      pagination_1.classList.remove("active");
      pagination_2.classList.remove("active");
      pagination_3.classList.add("active");
      sliderIndex = 2;
      break;
  }
};

pagination.addEventListener("click", hero_pagination);
