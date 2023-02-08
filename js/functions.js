//A11 - Accordion
function toggleAccordion() {
  const e = document.querySelector(".act-accordion__section");
  if (e.classList.contains("act-accordion__section__open")) {
    e.classList.remove("act-accordion__section__open");
    e.classList.add("act-accordion__section__closed");
  } else {
    e.classList.remove("act-accordion__section__closed");
    e.classList.add("act-accordion__section__open");
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
function setActiveTab(e) {
  const currentActiveTab = document.querySelector(".act-tabs__tab__active");
  if (currentActiveTab) {
    currentActiveTab.classList.remove("act-tabs__tab__active");
  }
  e.target.classList.add("act-tabs__tab__active");
}

//W=12 Nav Bar
function showSearchField() {
  //hide placeholder text
  const search = document.querySelector(".act-navbar__search__container");

  if (search) {
    for (item of search.children) {
      if (item.tagName == "SPAN" || item.tagName == "I") item.style.display = "none";
    }
  }

  const searchInputField = document.querySelector("#nav-search");
  //the search input doesnt exist
  if (!searchInputField) {
    return;
  }
  searchInputField.style.display = "block";
  const searchContainer = document.querySelector(".act-navbar__content");
  if (!searchContainer) {
    //couldnt find container to set the width to 100%
    return;
  }

  //set the input field wider
  searchInputField.style.width = "100%";

  //focus in search field
  searchInputField.focus();
}

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
