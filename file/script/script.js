// menu
const menu = document.getElementById("wrapper-menu");
const bgMenu = document.querySelector(".wrapper-menu .bg-menu");
// let widthScreen = screen.width;

addEventListener("scroll", function () {
  if (screen.width > 700) {
    bgMenu.style.opacity = "0";
    if (window.scrollY !== 0) {
      // console.log(window.scrollY)
      menu.style.background = "rgba(255, 255, 255)";
      menu.style.boxShadow = "0px 5px 10px rgb(153, 153, 153, .3)";
    } else {
      menu.style.background = "rgba(255, 255, 255, 0)";
      menu.style.boxShadow = "0px 5px 10px rgb(153, 153, 153, .0)";
    }
  } else {
    if (window.scrollY !== 0) {
      bgMenu.style.opacity = "100";
    } else {
      bgMenu.style.opacity = "0";
    }
  }
});

// responsive menu
const listMenu = document.querySelector(".wrapper-menu .menu");
// const logoDesk = document.querySelector(".wrapper-menu .logo .desk")
// const logoMobile = document.querySelector(".wrapper-menu .logo .mobile")
const hamburger = document.querySelector(".toggle-menu .hamburger");
const close = document.querySelector(".toggle-menu .close");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  close.classList.toggle("active");
  listMenu.classList.toggle("active");
  menu.style.background = "rgba(255, 255, 255)";
  menu.style.height = "100vh";
  menu.style.boxShadow = "5px 0px 10px rgba(133, 133, 133, 0.238)";
});

close.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  close.classList.toggle("active");
  listMenu.classList.toggle("active");
  menu.style.background = "rgba(255, 255, 255, 0)";
  menu.style.height = "0vh";
  menu.style.boxShadow = "none";
});

//Testimonial Data
const testimonials = [
  {
    kota: "Jakarta",
    button: "#",
    desc: "Pada tahun 2021, volume sampah di Jakarta mencapai 3,08 juta ton dan pada tahun 2022 meningkat sampai 3,11 juta ton. Hal ini dikarenakan rendahnya keseriusan pemerintah maupun masyarakat dalam mengelola sampah ",
  },
  {
    kota: "Jawa Barat",
    button: "#",
    desc: "Pada tahun 2021, volume sampah di Jawa Barat mencapai 1,07 juta ton dan pada tahun 2022 meningkat sampai 1,11 juta ton. Hal ini dikarenakan kurangnya kesadaran masyarakat dalam mengolah sampah",
  },
  {
    kota: "Jawa Tengah",
    button: "#",
    desc: "Pada tahun 2021, volume sampah di Jawa Tengah mencapai 4,89 juta ton dan pada tahun 2022 meningkat sampai 6 juta ton. Hal ini dikarenakan kurangnya kesadaran masyarakat dalam mengolah sampah",
  },
  {
    kota: "Jawa Timur",
    button: "#",
    desc: "Pada tahun 2021, volume sampah di Jawa Timur mencapai 1,28 juta ton dan pada tahun 2022 meningkat sampai 1,48 juta ton. Hal ini dikarenakan kurangnya kesadaran masyarakat dalam mengolah sampah",
  },
  {
    kota: "DI Yogyakarta",
    button: "#",
    desc: "Pada tahun 2021, volume sampah di Yogyakarta mencapai 1 juta ton dan pada tahun 2022 meningkat sampai 1,13 juta ton. Hal ini dikarenakan kurangnya kesadaran masyarakat dalam mengolah sampah"
  },
];

//Current Slide
let i = 0;
//Total Slides
let j = testimonials.length;
//earth deg
let deg = 0;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let earth = document.getElementById("earth");

nextBtn.addEventListener("click", () => {
  i = (j + i + 1) % j;
  displayTestimonial();
  controlEarth(1);
});
prevBtn.addEventListener("click", () => {
  i = (j + i - 1) % j;
  displayTestimonial();
  controlEarth(0);
});

let controlEarth = (e) => {
  if (e == 1) {
    deg += 72;
  } else {
    deg -= 72;
  }
  // console.log(deg)
  earth.style.transform = "rotate(" + -deg + "deg)";
};

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <h1>${testimonials[i].kota}</h1>
    <p>${testimonials[i].desc}</p>
    `;
};
window.onload = displayTestimonial;

// chart tahun
const info22 = document.getElementById("info2-22");
const info21 = document.getElementById("info2-21");
const info20 = document.getElementById("info2-20");
const info19 = document.getElementById("info2-19");
const info18 = document.getElementById("info2-18");
const tahun = document.querySelectorAll(".wrapper-info2 .chart #tahun");
let listTahun = document.querySelectorAll(".chart .list-tahun");

// cek tahun aktif
// for(let i = 0; i < info2.length; i++){
//   // console.log(info2[i])
//   if(info2[i].classList.contains("active")){
//     let classInfo = info2[i].className
//     console.log(classInfo)
//   }
// }

for (let i = 0; i < tahun.length; i++) {
  // console.log(tahun[i])

  tahun[i].addEventListener("click", function () {
    for (let i = 0; i < listTahun.length; i++)
      listTahun[i].classList.toggle("active");
    // console.log(listTahun[i])
  });
}

// console.log(listTahun)

for (let i = 0; i < listTahun.length; i++) {
  listTahun[i].addEventListener("click", function (e) {
    // console.log(e.target)
    if (e.target.classList.contains("22")) {
      // console.log(listTahun)
      info22.style.display = "block";
      info22.classList.add("active");
      info21.style.display = "none";
      info21.classList.remove("active");
      info20.style.display = "none";
      info20.classList.remove("active");
      info19.style.display = "none";
      info19.classList.remove("active");
      info18.style.display = "none";
      info18.classList.remove("active");
    } else if (e.target.classList.contains("21")) {
      info21.style.display = "block";
      info21.classList.add("active");
      info22.style.display = "none";
      info22.classList.remove("active");
      info20.style.display = "none";
      info20.classList.remove("active");
      info19.style.display = "none";
      info19.classList.remove("active");
      info18.style.display = "none";
      info18.classList.remove("active");
    } else if (e.target.classList.contains("20")) {
      info20.style.display = "block";
      info20.classList.add("active");
      info22.style.display = "none";
      info22.classList.remove("active");
      info21.style.display = "none";
      info21.classList.remove("active");
      info19.style.display = "none";
      info19.classList.remove("active");
      info18.style.display = "none";
      info18.classList.remove("active");
    } else if (e.target.classList.contains("19")) {
      info19.style.display = "block";
      info19.classList.add("active");
      info22.style.display = "none";
      info22.classList.remove("active");
      info21.style.display = "none";
      info21.classList.remove("active");
      info20.style.display = "none";
      info20.classList.remove("active");
      info18.style.display = "none";
      info18.classList.remove("active");
    } else if (e.target.classList.contains("18")) {
      info18.style.display = "block";
      info18.classList.add("active");
      info22.style.display = "none";
      info22.classList.remove("active");
      info21.style.display = "none";
      info21.classList.remove("active");
      info20.style.display = "none";
      info20.classList.remove("active");
      info19.style.display = "none";
      info19.classList.remove("active");
    }
  });
}

// slider artikel
const btnPrev = document.querySelector(".wrapper-artikel .button .prev");
const btnNext = document.querySelector(".wrapper-artikel .button .next");
const wrapperCards = document.querySelector(".wrapper-artikel .wrapper-cards");
const card = document.querySelector(".wrapper-artikel .wrapper-cards .card");

// console.log(card.clientWidth)

// filter card artikel
let filterBtn = document.getElementsByClassName("btn-filter");
filterCards(" ", "daurUlang");

for (let i = 0; i < filterBtn.length; i++) {
  if (filterBtn[i].innerHTML === "Daur Ulang") {
    filterBtn[i].classList.add("active");
  }
}

function filterCards(e, option) {
  let filterBtn = document.getElementsByClassName("btn-filter");
  let cards = document.getElementsByClassName("card-artikel");
  let i;

  // console.log(e)

  for (i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains(option)) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
  for (i = 0; i < filterBtn.length; i++) {
    filterBtn[i].classList.remove("active");
    if (filterBtn[i] == e) {
      filterBtn[i].classList.add("active");
    }
    // e.classList.add("active")
  }
}
