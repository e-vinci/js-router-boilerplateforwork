// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';

/**
 * Render the Navbar which is styled by using Bootstrap
 * Each item in the Navbar is tightly coupled with the Router configuration :
 * - the URI associated to a page shall be given in the attribute "data-uri" of the Navbar
 * - the router will show the Page associated to this URI when the user click on a nav-link
 */

const Navbar = () => {
  const navbarWrapper = document.querySelector('#navbarWrapper');
  const navbar = `
  <nav id="desktop-nav">
  <div class="logo">Muhammad Haziq</div>
  <div>
    <ul class="nav-links">
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
<nav id="hamburger-nav">
  <div class="logo">John Doe</div>
  <div class="hamburger-menu">
    <div class="hamburger-icon" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div class="menu-links">
      <li><a href="#about" onclick="toggleMenu()">About</a></li>
      <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
      <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
      <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
    </div>
  </div>
</nav>
  `;
  navbarWrapper.innerHTML = navbar;
  toggleMenu();
};

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


export default Navbar;
