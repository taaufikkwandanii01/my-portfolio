// navbar fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
}

// hamburger logic
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');

  if (navMenu.classList.contains('hidden')) {
    navMenu.classList.remove('hidden');
    setTimeout(() => {
      navMenu.classList.add('opacity-100', 'translate-y-0');
      navMenu.classList.remove('opacity-0', '-translate-y-5');
    }, 10);
  } else {
    navMenu.classList.remove('opacity-100', 'translate-y-0');
    navMenu.classList.add('opacity-0', '-translate-y-5');
    setTimeout(() => {
      navMenu.classList.add('hidden');
    }, 300);
  }
});

// auto-close nav on link click
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.remove('opacity-100', 'translate-y-0');
    navMenu.classList.add('opacity-0', '-translate-y-5');
    setTimeout(() => {
      navMenu.classList.add('hidden');
    }, 300);
  });
});

// Section Active Detection + Active menu saat load
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("#nav-menu a");

  let current = "hero"; // Default aktif saat load

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-blue-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("text-blue-300");
    }
  });
}

window.addEventListener("scroll", setActiveSection);

// Jalankan sekali saat halaman dibuka
document.addEventListener("DOMContentLoaded", () => {
  setActiveSection();
});