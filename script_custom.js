document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".lc-header-lpc__fixed-wrapper");
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

  const tabs = document.querySelectorAll(".lc-tabs__tab_theme_textWithIcon");

  const faqHeads = document.querySelectorAll(".lc-spoiler-item__header");
  const faqTexts = document.querySelectorAll(".lc-spoiler-item");

  faqTexts.forEach((text) => text.classList.remove("lc-spoiler-item_open"));

  // events

  tabs.forEach((tab) => tab.addEventListener("click", toggleTab));
  faqHeads.forEach((head) => head.addEventListener("click", toggleFaq));

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

  // functions
  function toggleTab(e) {
    const tabClicked = e.target.closest(".lc-tabs__tab_theme_textWithIcon");

    if (!tabClicked) return;

    tabs.forEach((tab) => {
      tab.style.border = "3px solid rgba(40, 40, 40, 0)";
    });

    tabClicked.style.border = "3px solid rgba(194, 242, 60, 1)";
  }

  function toggleFaq(e) {
    const faqClicked = e.target.closest(".lc-spoiler-item");
    if (faqClicked.classList.contains("lc-spoiler-item_open"))
      return faqClicked.classList.toggle("lc-spoiler-item_open");

    faqTexts.forEach((text) => {
      text.classList.remove("lc-spoiler-item_open");
    });
    faqClicked.classList.toggle("lc-spoiler-item_open");
  }
});
