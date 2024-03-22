document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".lc-header-lpc__fixed-wrapper");
  // burger
  const burgerLink = document.querySelectorAll(
    ".lc-navigation-menu__item_layout_vertical"
  );
  const burgerBtn = document.querySelector(
    ".lc-header-lpc-burger__burger-button"
  );
  const burgerMenuWrap = document.querySelector(
    ".lc-header-lpc-burger__menu-wrapper"
  );
  const burgerMenu = document.querySelector(".lc-header-lpc-burger__paranja");
  const burgerMenuList = document.querySelector(
    ".lc-header-lpc-burger__menu_align_right"
  );
  const burgerIconWrapper = document.querySelector(
    ".lc-header-lpc-burger__burger-icon"
  );
  const burgerImg = document.querySelector(".lc-picture__thumbnail");

  burgerImg.classList.remove("lc-picture__thumbnail_transparent");
  burgerImg.classList.add("burger-img");

  burgerIconWrapper.innerHTML = "";
  burgerIconWrapper.appendChild(burgerImg);

  // tabs
  const tabs = document.querySelectorAll(".lc-tabs__tab_theme_textWithIcon");
  const tabsContents = document.querySelectorAll(".lc-tabs__content");
  const tabItems = document.querySelectorAll(".lc-features__items");

  // acordion
  const faqHeads = document.querySelectorAll(".lc-spoiler-item__header");
  const faqTexts = document.querySelectorAll(".lc-spoiler-item");

  // const arrowImg = document.querySelector('img[alt="faq-arrow"]');

  const svgs = document.querySelectorAll(".lc-spoiler-item__arrow svg");

  faqTexts.forEach((text) => text.classList.remove("lc-spoiler-item_open"));
  tabItems.forEach((item, index) => {
    if (index < 3) item.classList.add(`active-tabs-${index + 1}`);
  });

  svgs.forEach((svg) => {
    const img = document.createElement("img");
    img.src = "./icon-faq-arrow.svg";

    svg.parentNode.replaceChild(img, svg);
  });
  // events

  tabs.forEach((tab) =>
    tab.addEventListener("click", (e) => toggleTab(e, tabsContents, tabs))
  );

  faqHeads.forEach((head) =>
    head.addEventListener("click", (e) => toggleFaq(e, faqTexts))
  );

  window.onscroll = () => {
    if (window.scrollY > 0) {
      header.classList.add("lc-header-lpc__fixed-wrapper-active");
    } else {
      header.classList.remove("lc-header-lpc__fixed-wrapper-active");
    }
  };

  burgerBtn.addEventListener("click", () => {
    document.body.classList.add("menu-open");
  });

  burgerMenu.addEventListener("click", () => {
    burgerMenuWrap.classList.add("lc-header-lpc-burger__menu-wrapper_hidden");
    burgerMenu.classList.remove("lc-header-lpc-burger__paranja_opened");
    burgerMenuList.classList.remove("lc-header-lpc-burger__menu_opened");
    document.body.classList.remove("menu-open");
  });

  burgerLink.forEach((link) => {
    link.addEventListener("click", () => {
      burgerMenu.classList.remove("lc-header-lpc-burger__paranja_opened");
      burgerMenuList.classList.remove("lc-header-lpc-burger__menu_opened");
      document.body.classList.remove("menu-open");
    });
  });
});

// functions
function toggleTab(e, tabsContents, tabs) {
  const tabClicked = e.target.closest(".lc-tabs__tab_theme_textWithIcon");

  if (!tabClicked) return;

  const index = Array.from(tabs).indexOf(tabClicked);

  tabsContents.forEach((content) => {
    content.classList.remove("lc-tabs__content_visible");
  });

  tabsContents[index].classList.add("lc-tabs__content_visible");

  tabs.forEach((tab) => {
    tab.style.border = "3px solid rgba(40, 40, 40, 0)";
  });

  tabClicked.style.border = "3px solid rgba(194, 242, 60, 1)";
}

function toggleFaq(e, faqTexts) {
  const faqClicked = e.currentTarget.closest(".lc-spoiler-item");
  if (faqClicked.classList.contains("lc-spoiler-item_open"))
    return faqClicked.classList.toggle("lc-spoiler-item_open");

  faqTexts.forEach((text) => {
    text.classList.remove("lc-spoiler-item_open");
  });
  faqClicked.classList.toggle("lc-spoiler-item_open");
}
