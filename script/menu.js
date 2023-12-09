(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const menuBtnClose = document.querySelector("[data-menu-button-close]");
  const body = document.body;

  console.log(menuBtnRef);
  console.log(body);

  const toggleMenu = () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    body.classList.toggle("disable-scroll");
  };

  menuBtnRef.addEventListener("click", toggleMenu);
  menuBtnClose.addEventListener("click", toggleMenu);
})();
