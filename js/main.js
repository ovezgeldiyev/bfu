// menu start
var menu = document.getElementById("menu");
var menuBtn = document.getElementById("menuBtn");
var body = document.body;
menuBtn.onclick = function () {
  menu.classList.toggle("active");
  menuBtn.classList.toggle("active");
  body.classList.toggle("active");
};
window.onclick = function (event) {
  if (event.target == menu) {
    menu.classList.remove("active");
    menuBtn.classList.remove("active");
    body.classList.remove("active");
  }
};
// menu end
// lang change start
var lanBtn = document.getElementById("lanBtn");
var english = document.getElementById("english");
var bulgari = document.getElementById("bulgari");
english.onclick = function () {
  english.classList.remove("active");
  bulgari.classList.add("active");
};
bulgari.onclick = function () {
  english.classList.add("active");
  bulgari.classList.remove("active");
};
// lang change end
// scroll start
let header = document.getElementById("header");
function scrollFunc() {
  if (window.pageYOffset >= 60) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
window.onscroll = function () {
  scrollFunc();
};
// scroll end
// tab start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// tab end
// sliders start
$(function () {
  $(".hero__slider").slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 600,
    asNavFor: ".hero__pagination-inner",
    fade: true,
  });
});
$(function () {
  $(".hero__pagination-inner").slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    dots: false,
    speed: 300,
    focusOnSelect: true,
    asNavFor: ".hero__slider",
    swipe: false,
    draggable: false,
    swipeToSlide: false,
    touchMove: false,
  });
});
$(function () {
  $(".shop__inner-slider").slick({
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 600,
    responsive: [
      {
        breakpoint: 1381,
        settings: {
          slidesToShow: 3.5,
        },
      },
      {
        breakpoint: 931,
        settings: {
          slidesToShow: 2.8,
        },
      },
      {
        breakpoint: 651,
        settings: {
          slidesToShow: 2.4,
        },
      },
      {
        breakpoint: 541,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 441,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
});
$(function () {
  $(".match__slider").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    arrows: false,
    dots: false,
    speed: 300,
    centerMode: true,
    variableWidth: true,
    swipe: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    draggable: true,
    swipeToSlide: true,
    touchMove: true,
  });
});
$(function () {
  $(".intro__inner-slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    speed: 300,
    draggable: true,
    swipeToSlide: true,
    fade: true,
  });
});
// sliders end
// introRow slider start
const introRow = document.getElementById("introRow");
if (introRow) {
  const introRowItems = document.querySelectorAll(".introRow__item");
  introRowItems.forEach((introRowItem, index) => {
    introRowItem.addEventListener("click", (event) => {
      document
        .querySelector(".introRow__item.active")
        .classList.remove("active");
      event.target.classList.add("active");
      $(".intro__inner-slider").slick("slickGoTo", index);
    });
  });
  introRowItems.forEach((introRowItem, index) => {
    $(".intro__inner-slider").on(
      "afterChange",
      function (event, slick, currentSlide) {
        introRowItem.classList.remove("active");
        introRowItems[currentSlide].classList.add("active");
      }
    );
  });
}
// introRow slider end
// searchToggle start
const searchBar = document.getElementById("search");
if (searchBar) {
  const searchBtn = document.getElementById("searchBtn");
  const searchClose = document.getElementById("searchClose");
  searchBtn.onclick = () => {
    searchBar.classList.add("active");
  };
  searchClose.onclick = () => {
    searchBar.classList.remove("active");
  };
}
// searchToggle end
// showMore start
const showMoreBtns = document.querySelectorAll(".showMoreBtn");
showMoreBtns.forEach((showMoreBtn) => {
  showMoreBtn.onclick = () => {
    const parentElement = showMoreBtn.parentNode;
    const showMore = parentElement.querySelector(".showMore");
    showMore.classList.toggle("active");
    showMoreBtn.classList.toggle("active");
  };
});
// showMore end
// dropdown start
const faqBtn = document.querySelectorAll(".faqBtn");
const faqEvent = document.querySelectorAll(".faqEvent");
faqBtn.forEach((e) => {
  onFaqClick(faqBtn, faqEvent, e);
});
function onFaqClick(faqBtns, faqItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let faqId = currentBtn.getAttribute("data-faq");
    let currentTab = document.querySelector(faqId);
    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".faqEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      faqBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      faqItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// dropdown end
// select start
const selectFunc = () => {
  const selects = document.querySelectorAll(".select");
  selects.forEach((select) => {
    const selected = select.querySelector(".select__selected");
    const selectOptions = select.querySelector(".select__options");
    const listItems = selectOptions.querySelectorAll("li");
    const input = select.querySelector("input[type='hidden']");
    selected.onclick = () => {
      select.classList.toggle("active");
    };
    listItems.forEach((listItem) => {
      listItem.onclick = () => {
        selected.innerHTML = listItem.innerHTML;
        select.classList.remove("active");
        input.value = listItem.getAttribute("data-value");
      };
    });
  });
};
selectFunc();
// select end
