/*》》》》Loader Section JS《《《《*/
const loader = document.getElementById("loader");
const preloader = document.querySelector(".preloader");
const loaderBox = document.querySelector(".box");
const preload = ()=>{
  loaderBox.style.height = "100vh";
  loaderBox.style.width = '100vw';
  setTimeout(()=>{
    loaderBox.style.opacity = "0";
    preloader.style.display = "none";
  },500);
  setTimeout(()=>{
    loader.style.display = "none";
  },1000);
  loaderBox.classList.remove("animate-box");
}


/*》》》》Header Section JS《《《《*/
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".right");

menuIcon.addEventListener("click",()=>{
  menu.classList.toggle("toggle");
  menu.classList.toggle("width");
});

/*》》》》Counter section JS《《《《*/
const counterNum = document.querySelectorAll(".counter-num");
const counter = document.querySelector("#counter");

const animate = new IntersectionObserver((entries, observer) => {
  const [entry] = entries;
  if (entry.isIntersecting == false) {
    return;
  }
  const speed = 150;
  counterNum.forEach((elem) => {
    const updateNum = () => {
      const targetNum = parseInt(elem.dataset.number);
      const initialNum = parseInt(elem.innerText);
      const incrementNum = Math.floor(targetNum / speed);
      if (initialNum < targetNum) {
        elem.innerText = `${initialNum+incrementNum}+`;
        setTimeout(updateNum, 10)
      }
    }
    updateNum();
  });
}, {
  root: null,
  threshold: 0
})
animate.observe(counter);