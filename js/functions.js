//A11 - Accordion
function toggleAccordion() {
  const elements = document.getElementsByClassName("act-accordion__section");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function() {
      for (let j = 0; j < elements.length; j++) {
        if (j !== i) {
          elements[j].classList.remove("act-accordion__section__open");
        }
      }
      this.classList.add("act-accordion__section__open");
    });
  }
}

//A21 - Global Alerts
function dismissGlobalAlbert() {
  const e = document.querySelector(".act-alert-global");
  e.remove();
}

//B11 - Back to top Button
function backToTop() {
  window.scrollTo(0, 0);
}

//P11 - Popover
function togglePopover() {
  const e = document.querySelector(".act-popup");
  e.remove();
}

//T21 - Tabs
document.addEventListener("DOMContentLoaded", function() {
  var tabs = document.querySelectorAll(".act-tabs__tab");
  var tabContents = document.querySelectorAll(".act-tabs__content");
  tabs.forEach(function(tab, index) {
    tab.addEventListener("click", function() {
      tabs.forEach(function(tab) {
        tab.classList.remove("act-tabs__tab__active");
        tab.setAttribute("aria-selected", "false");
      });
      this.classList.add("act-tabs__tab__active");
      this.setAttribute("aria-selected", "true");
      tabContents.forEach(function(tabContent) {
        tabContent.classList.remove("act-tabs__content__open");
        tabContent.classList.add("act-tabs__content__closed");
      });
      tabContents[index].classList.remove("act-tabs__content__closed");
      tabContents[index].classList.add("act-tabs__content__open");
    });
  });
});

//W=12 Nav Bar
document.addEventListener("DOMContentLoaded", function() {
  const searchContainer = document.querySelector(".act-navbar__search__container");
  const searchInput = searchContainer.querySelector(".act-navbar__search__text");
  const searchIcon = searchContainer.querySelector(".act-navbar__search__icon");
  searchInput.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchInput.classList.add("active");
    searchIcon.classList.replace("fa-magnifying-glass", "fa-times");
  });
  searchIcon.addEventListener("click", () => {
    searchIcon.classList.replace("fa-times", "fa-magnifying-glass");
    searchContainer.classList.remove("active");
    searchContainer.blur();
    searchInput.value = "";
    searchInput.classList.remove("active");
    searchInput.blur();
  });

});

//W-15 Mega Menu - toggle visibility
function toggleMegaMenu() {
  const e = document.querySelector(".act-megamenu");
  if (e) {
    if (e.style.visibility === "hidden") {
      e.style.visibility = "visible";
    } else {
      //find all the visible child links and hide them before closing the menu
      const visibleChildElements = document.querySelectorAll("[id^=child-links-]");
      for (const childElement of visibleChildElements) {
        childElement.style.display = "none";
      }

      //now close the menu
      e.style.visibility = "hidden";
    }
  }
}

//W-15 Mega Menu - reveal child links
function openChildLinks(e) {
  const element = e.currentTarget;
  const num = element.id.split("-")[1];

  const visibleChildElements = document.querySelectorAll("[id^=child-links-]");
  for (const childElement of visibleChildElements) {
    childElement.style.display = "none";
  }
  const childElement = document.querySelector(`#child-links-${num}`);
  if (!childElement) {
    return;
  }
  childElement.style.display = "block";
}

//P-12 Cookie Consent
function toggleCookieConsent() {
  const e = document.querySelector(".act-popup.bottom");
  if (e) {
    if (e.style.visibility === "hidden") {
      e.style.visibility = "visible";
    } else {
      //find all the visible child links and hide them before closing the menu
      const visibleChildElements = document.querySelectorAll("[id^=child-links-]");
      for (const childElement of visibleChildElements) {
        childElement.style.display = "none";
      }

      //now close the menu
      e.style.visibility = "hidden";
    }
  }
}
