const accordionEl = document.querySelectorAll(".accordion-cont");
const labelAccordionEl = document.querySelectorAll(".acc-click");
const tickEl = document.querySelectorAll(".tick");
const completedCountEl = document.querySelector(".completed");
const arrowUp = document.querySelector(".arrow-up");
const maiContentEl = document.querySelector(".main-content");
const topBlackEl = document.querySelector(".top-black");
const dcEl = document.querySelector(".two");
const dropDownEl = document.querySelector(".dropdown");
const notificationEl = document.querySelector(".one");
const alertEl = document.querySelector(".alert");
const topHeaderEl = document.querySelector(".top-header");
const removeEl = document.querySelector(".remove");
const secEl = document.querySelector(".sec");


function handleMenuEscapeKeypress(e) {
  if (e.key === "Escape") {
    toggleDropdownMenu();
  }
}
function closeMenu() {
  dcEl.ariaExpanded = "false";
  dcEl.focus();
  secEl.focus()
}
function openMenu() {
  // get all the menu items in the dropdown
  const allMenueItems = dropDownEl.querySelectorAll('[role="menuitem"]');

  dcEl.ariaExpanded = "true";
  // Focus the first menu item in the dropdown when it is shown
  allMenueItems.item(0).focus();

  dropDownEl.addEventListener('keyup', handleMenuEscapeKeypress);
}
function toggleAlert() {
  // Hode the dropdown menu when the alert is clicked
  dropDownEl.classList.add("hidden");

  // Toggle the display of the alert element to show or hide it
  if (alertEl.style.display == "inline-flex") {
    alertEl.style.display = "none";
  } else {
    alertEl.style.display = "inline-flex";
  }
}

function toggleDropdownMenu() {
  // Get the expanded state of the dropdown
  const isExpanded = dcEl.attributes["aria-expanded"].value == "true";

  // Hide the alert popup when the dropdown menu is shown
  alertEl.style.display = "none";
  // Toggle the hidden class to show or hide the dropdown menu
  dropDownEl.classList.toggle("hidden");
  if (isExpanded) {
    closeMenu();
  } else {
    openMenu();
  }
}
function removeActive(index) {
  accordionEl.forEach((el, i) => {
    if (i !== index) {
      el.classList.remove("active");
      let contentBox = el.querySelector(".content-box");
      contentBox.style.height = "0px";
    }
  });
}

// Open the next accordion when the current one is checked
function openNext(index) {
  accordionEl.forEach((el, i) => {
    //
    let contentBox = el.querySelector(".content-box");
    if (i === index) {
      el.classList.add("active");
      contentBox.style.height = "120px";
    } else {
      el.classList.remove("active");
      contentBox.style.height = "0px";
    }
  });
}

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

arrowUp.addEventListener("click", function () {
  if (
    arrowUp.attributes.src.value ==
    "https://crushingit.tech/hackathon-assets/icon-arrow-up.svg"
  ) {
    arrowUp.attributes.src.value =
      "https://crushingit.tech/hackathon-assets/icon-arrow-down.svg";
  } else {
    arrowUp.attributes.src.value =
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
  topHeaderEl.style.display = "none";
});
