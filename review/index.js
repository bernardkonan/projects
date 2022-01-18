const reviews = [
  {
    id: 1,
    name: "Elliot Alderson",
    job: "Cyber-security Engineer",
    img: "https://res.cloudinary.com/cntig/image/upload/v1642512545/reviews-img/elliot_r9p5f7.jpg",
  },
  {
    id: 2,
    name: "Evan You",
    job: "Vue js creator",
    img: "https://res.cloudinary.com/cntig/image/upload/v1642512545/reviews-img/evan_l8cxam.jpg",
  },
  {
    id: 3,
    name: "Harvey Specter",
    job: "Lawyer",
    img: "https://res.cloudinary.com/cntig/image/upload/v1642512545/reviews-img/harvey_fnczob.jpg",
  },
  {
    id: 4,
    name: "Larry Page",
    job: "Google Founder",
    img: "https://res.cloudinary.com/cntig/image/upload/v1642512546/reviews-img/larry_exkkkl.jpg",
  },
  {
    id: 5,
    name: "Sergey Brin",
    job: "Google Founder",
    img: "https://res.cloudinary.com/cntig/image/upload/v1642512546/reviews-img/sergey_ixjxar.jpg",
  },
];

/* Select items*/
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// functions
const showPerson = (person) => {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
};

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

// show next person
nextBtn.addEventListener("click", (e) => {
  currentItem++;
  if (currentItem >= reviews.length) {
    currentItem = 0;
  }
  showPerson(currentItem);
});
prevBtn.addEventListener("click", (e) => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

randomBtn.addEventListener("click", (e) => {
  const randNumber = Math.floor(Math.random() * reviews.length);
  currentItem = randNumber;
  showPerson(currentItem);
});
