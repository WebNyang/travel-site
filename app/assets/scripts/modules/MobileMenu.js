import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $(".site-header__menu-icon");

    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu);
  }

  toggleTheMenu() {
    console.log("Hooray - the icon was clicked");
  }
}

export default MobileMenu;
