// (() => {
// 	const menuBtnRef = document.querySelector("[data-menu-button]");
// 	const mobileMenuRef = document.querySelector("[data-menu]");

// 	menuBtnRef.addEventListener("click", () => {
// 		const expanded = 
// 		menuBtnRef.getAttribute("aria-exspanded")===true || false;

// 		menuBtnRef.classList.toggle("is-open");
// 		menuBtnRef.setAttribute("aria-expanded", !expanded);

// 		mobileMenuRef.classList.toggle("is-open");
// 	});
// })();


(() => {
  const refs = {
    menuBtn: document.querySelector('[data-menu-button]'),
    menu: document.querySelector('[data-menu]'),
  };

  refs.menuBtn.addEventListener('click', () => {
    const expanded = refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.menuBtn.setAttribute('aria-expanded', !expanded);

    refs.menuBtn.classList.toggle('is-open');
    refs.menu.classList.toggle('is-open');

    document.body.classList.toggle('mobile-menu-is-open');
  });
})();