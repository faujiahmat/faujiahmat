import './style.css';

function scrollToSection(linkId, sectionId) {
  document.getElementById(linkId).addEventListener('click', function (event) {
    event.preventDefault();

    const section = document.querySelector(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  });
}

scrollToSection('about-link', '#about');
scrollToSection('project-link', '#project');
scrollToSection('tech-link', '#tech');



