const accordionEl = document.querySelectorAll(".accordion-cont");
const labelAccordionEl = document.querySelectorAll(".acc-click");
const tickEl = document.querySelectorAll(".tick");
const completedCountEl = document.querySelector(".completed");
const arrowDown = document.querySelector(".arrow-down");
const maiContentEl = document.querySelector(".main-content");
const topBlackEl = document.querySelector(".top-black");
const dcEl = document.querySelector(".two");
const dropDownEl = document.querySelector(".dropdown");
const notificationEl = document.querySelector(".one");
const alertEl = document.querySelector(".alert");
const topHeaderEl = document.querySelector(".top-header");
const removeEl = document.querySelector(".remove");
const secEl = document.querySelector(".sec");

// console.log(maiContentEl);

function toggleAlert() {
  dropDownEl.classList.add("hidden");
  if (alertEl.style.display == "inline-flex") {
    alertEl.style.display = "none";
  } else {
    alertEl.style.display = "inline-flex";
  }
}

function toggleDropdownMenu() {
  alertEl.style.display = "none";
  dropDownEl.classList.toggle("hidden");
}
const removeActive = function (index) {
  accordionEl.forEach((el, i) => {
    if (i !== index) {
      el.classList.remove("active");
      let contentBox = el.querySelector(".content-box");
      contentBox.style.height = "0px";
    }
  });
};

const openNext = function (index) {
  accordionEl.forEach((el, i) => {
    let contentBox = el.querySelector(".content-box");
    if (i === index) {
      el.classList.add("active");
      contentBox.style.height = "120px";
    } else {
      el.classList.remove("active");
      contentBox.style.height = "0px";
    }
  });
};

labelAccordionEl.forEach((ele, i) => {
  ele.addEventListener("click", () => {
    accordionEl.forEach((el) => {
      let contentBox = el.querySelector(".content-box");
      el.classList.add("active");
      if (!el.classList.contains("active")) {
        contentBox.style.height = "0px";
      } else {
        contentBox.style.height = "120px";
      }
    });
    removeActive(i);
  });
});

arrowDown.addEventListener("click", function () {
  if (
    arrowDown.attributes.src.value ==
    "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
  ) {
    arrowDown.attributes.src.value =
      "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
  } else {
    arrowDown.attributes.src.value =
      "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg";
  }

  maiContentEl.classList.toggle("active");
  maiContentEl.style.transition = "all 0.5s ease-in-out";
});

// /////////////
tickEl.forEach((el, i) => {
  let next = i + 1;
  el.addEventListener("click", function () {
    const currentSrc = this.getAttribute("src");
    const checkmarkSrc =
      "https://crushingit.tech/hackathon-assets/icon-checkmark-circle.svg";
    const componentSrc = "./Component 14.svg";

    if (currentSrc === checkmarkSrc) {
      this.setAttribute("src", componentSrc);
      if (Number(completedCountEl.innerHTML) > 0) {
        // update count
        completedCountEl.innerHTML = Number(completedCountEl.innerHTML) - 1;
        topBlackEl.style.transition = "width 0.5s ease-in-out";
        //   update top black
        topBlackEl.style.width = `${completedCountEl.innerHTML * 20}%`;
      }
    } else if (currentSrc === componentSrc) {
      this.setAttribute("src", checkmarkSrc);
      openNext(next);
      this.style.width = "25px";
      if (Number(completedCountEl.innerHTML) < 6) {
        completedCountEl.innerHTML = Number(completedCountEl.innerHTML) + 1;
        topBlackEl.style.width = `${completedCountEl.innerHTML * 20}%`;
      }
    }
  });
});

dcEl.addEventListener("click", toggleDropdownMenu);
dropDownEl.addEventListener("click", toggleDropdownMenu);
secEl.addEventListener("click", toggleDropdownMenu);

alertEl.addEventListener("click", toggleAlert);
notificationEl.addEventListener("click", toggleAlert);

removeEl.addEventListener("click", function () {
  topHeaderEl.style.visibility = "hidden";
});
