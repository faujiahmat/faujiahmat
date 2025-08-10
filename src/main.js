import './style.css';
import { projects } from './projects.js';
import { technologies } from './techonlogies.js';

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

const container = document.getElementById('projects-container');

projects.forEach((project, index) => {
  const projectCard = `
    <div class="bg-white rounded-md sm:rounded-lg shadow-md sm:shadow-lg overflow-hidden transform transition hover:scale-105 cursor-pointer" data-index="${index}">
      <img src="${project.image}" alt="${
    project.title
  }" class="w-full h-24 object-cover" />
      <div class="p-2">
        <h3 class="text-sm sm:text-xl font-semibold text-slate-700 ${
          project.centerTitle ? 'text-center' : ''
        }">
          ${project.title}
        </h3>
      </div>
    </div>
  `;
  container.insertAdjacentHTML('beforeend', projectCard);
});

// Modal logic
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDesc = document.getElementById('modal-description');
const modalLink = document.getElementById('modal-link');

container.addEventListener('click', (e) => {
  const card = e.target.closest('[data-index]');
  if (!card) return;

  const index = card.dataset.index;
  const project = projects[index];

  if (window.innerWidth < 768) {
    window.location.href = project.link;
    return;
  }

  modalTitle.textContent = project.title;
  modalImage.src = project.image;
  modalImage.alt = project.title;
  modalDesc.textContent = project.description;
  modalLink.href = project.link;

  renderTabs(index);

  modal.classList.add('flex');
  modal.classList.remove('hidden');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

function renderTabs(projectIndex) {
  const buttonContainer = document.getElementById('modal-tab-buttons');
  const contentContainer = document.getElementById('modal-tab-contents');

  const project = projects[projectIndex];
  const tabs = project.tabs || [];

  // Kosongkan tab sebelumnya
  buttonContainer.innerHTML = '';
  contentContainer.innerHTML = '';

  tabs.forEach((tab) => {
    // Buat button tab
    const button = document.createElement('button');
    button.className =
      'bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800';
    button.textContent = tab.label;
    button.dataset.tab = tab.name;

    button.addEventListener('click', function () {
      showModalTab(tab.name);
    });

    buttonContainer.appendChild(button);

    // Buat konten tab
    const contentDiv = document.createElement('div');
    contentDiv.id = `modal-tab-${tab.name}`;
    contentDiv.className = 'hidden text-white text-sm';
    contentDiv.innerHTML = tab.content;

    contentContainer.appendChild(contentDiv);
  });

  // Tampilkan tab technologies secara default jika tersedia
  const hasTechTab = tabs.some((tab) => tab.name === 'technologies');
  if (hasTechTab) {
    showModalTab('technologies');
  } else if (tabs.length > 0) {
    // Atau tampilkan tab pertama jika technologies tidak ada
    showModalTab(tabs[0].name);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const tabs = [
    'link',
    'technologies',
    'architecture',
    'structure',
    'api',
    'readme',
    'feature',
  ];

  tabs.forEach((tab) => {
    const button = document.getElementById(`tab-${tab}`);

    if (button) {
      button.addEventListener('click', () => {
        showModalTab(tab);
      });
    }
  });
});

// Fungsi untuk menampilkan tab yang dipilih di dalam modal
let activeTab = null;

function showModalTab(tabName) {
  const content = document.getElementById(`modal-tab-${tabName}`);
  const button = document.querySelector(`button[data-tab="${tabName}"]`);

  if (!content || !button) return;

  // Sembunyikan semua tab
  const allTabs = [
    'link',
    'technologies',
    'architecture',
    'structure',
    'api',
    'readme',
    'feature',
  ];

  allTabs.forEach((tab) => {
    const tabContent = document.getElementById(`modal-tab-${tab}`);
    const tabButton = document.querySelector(`button[data-tab="${tab}"]`);

    if (tabContent) tabContent.classList.add('hidden');
    if (tabButton) {
      tabButton.classList.remove('bg-cyan-700', 'text-white');
      tabButton.classList.add('bg-gray-100', 'text-gray-800');
    }
  });

  // Tampilkan tab yang baru diklik
  content.classList.remove('hidden');
  button.classList.remove('bg-gray-100', 'text-gray-800');
  button.classList.add('bg-cyan-700', 'text-white');

  activeTab = tabName;
}

const techGrid = document.getElementById('techGrid');

technologies.forEach((tech) => {
  const a = document.createElement('a');
  a.href = tech.url;
  a.target = '_blank';

  const img = document.createElement('img');
  img.src = tech.img;
  img.alt = tech.name;
  img.className = 'sm:w-20 sm:h-20 w-10 h-10 sm:rounded-lg rounded-md';

  a.appendChild(img);
  techGrid.appendChild(a);
});
