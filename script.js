var models = [
  {
    name: "Bmw 418d",
    image: "img/bmw.jpg",
    aciklama: "Bmw Açıklama",
    link: "#",
  },
  {
    name: "Mazda",
    image: "img/mazda.jpg",
    aciklama: "Mazda Açıklama",
    link: "#",
  },
  {
    name: "Volvo",
    image: "img/volvo.jpg",
    aciklama: "Volvo Açıklama",
    link: "#",
  },
  {
    name: "Skoda",
    image: "img/skoda.jpg",
    aciklama: "Skoda Açıklama",
    link: "https://skoda.com",
  },
  {
    name: "Honda",
    image: "img/honda.jpg",
    aciklama: "Honda açıklama",
    link: "#",
  },
];

var index = 0;
var slaytCount = models.length;

var interval;

var settings = {
  duration: "2000",
  random: false,
};

init(settings);

document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    index--;
    showSlide(index);
    console.log(index);
  });
document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    index++;
    showSlide(index);
    console.log(index);
  });



  document.querySelectorAll('.arrow').forEach(function (item) {
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
  });
  document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave', function () {
        init(settings);
    })
  })


function init(settings) {
  var prev;
  interval=setInterval(function () {
    if (settings.random) {
      do {
        index = Math.floor(Math.random() * slaytCount);
      } while (index == prev);
      prev = index;
      console.log(index);
    } else {
      index++;
      console.log(index);
    }
    showSlide(index);
  }, settings.duration);
}

function showSlide(i) {
  index = i;
  if (i < 0) {
    index = slaytCount - 1;
  } else if (i >= slaytCount) {
    index = 0;
  }

  document.querySelector(".card-title").textContent = models[index].name;
  document
    .querySelector(".card-img-top")
    .setAttribute("src", models[index].image);
  document.querySelector(".card-text").textContent = models[index].aciklama;
  document.querySelector(".card-link").setAttribute("href", models[index].link);
}






