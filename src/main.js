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

const projects = [
  {
    title: 'Cartonic Microservices E-commerce App',
    image: './e-commerce.webp',
    link: 'https://github.com/faujiahmat/Cartonic-Microservices-E-commerce-App',
    centerTitle: true,
    description:
      'Cartonic is a modern e-commerce dummy project built with a microservices architecture using Node.js, TypeScript, and Express, and orchestrated with Docker and Kong API Gateway.',
    tabs: [
      {
        name: 'technologies',
        label: 'Technologies',
        content: `
        <div class="grid grid-cols-5 gap-5 px-5 ">  
          <div>
            <h3 class="font-bold">
              Language
            </h3>
            <ul class="list-disc ml-5">
              <li>Typescript</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Runtime
            </h3>
            <ul class="list-disc ml-5">
              <li>NodeJs</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Framework
            </h3>
            <ul class="list-disc ml-5">
              <li>Express</li>
            </ul>
          </div>
            
          <div>
            <h3 class="font-bold">
              Database
            </h3>
            <ul class="list-disc ml-5">
              <li>MongoDB</li>
              <li>Postgresql</li>
              <li>Redis</li>
            </ul>
          </div>
            
          <div>
            <h3 class="font-bold">
            API Gateway
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>Kong Gateway</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
            Container Runtime
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>Docker</li>
              <li>Docker Compose</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
            Monitoring
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>Prometheus</li>
              <li>Grafana</li>
              <li>Sentry (Error monitoring)</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
            Message Broker
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>Rabbitmq</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
            Authentication
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>JWT</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
            Orm
            </h3>  
            
            <ul class="list-disc ml-5">
              <li>Prisma</li>
            </ul>
          </div>
        </div>
        `,
      },
      {
        name: 'architecture',
        label: 'Architecture',
        content: `<p class="px-5 mb-5">You can see the architecture of this project here.</p>
        <div class="flex justify-center items-center px-5">
          <a href="https://uploadimage.io/image/MIcroservice-cartonic.SVsdk" target="_blank"><img class="w-40" src="https://uploadimage.io/images/2025/04/18/MIcroservice-cartonic.th.jpg" alt="MIcroservice cartonic" border="0"></a>
        </div>
        `,
      },
      {
        name: 'structure',
        label: 'Structure',
        content: `
          <p class="px-5">
            CARTONIC/</br>
            ├── api-gateway/         # Konfigurasi Kong </br>
            ├── docker/              # Dockerfile dan docker-compose.yml </br>
            ├── docs/                # Dokumentasi API</br>
            ├── scripts/             # Script otomatisasi</br>
            ├── services/            # Semua service</br>
            ├── .gitignore</br>
            └── README.md
          </p>
        `,
      },
      {
        name: 'api',
        label: 'API Documentation',
        content: `<p class="px-5">You can see api documentaion <a href="https://github.com/faujiahmat/Cartonic-Microservices-E-commerce-App/blob/main/docs/api.md" target="_blank" class="font-bold text-cyan-200 hover:text-cyan-600">here</a></p>`,
      },

      {
        name: 'feature',
        label: 'Feature',

        content: `
          <div class="grid  grid-cols-6  gap-1 auto-rows-auto">
            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">Order Service</h3>
              <p class="text-xs">Simulasi pemesanan produk.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg col-span-2">
              <h3 class="font-bold">Auth Authentication</h3>
              <p class="text-xs">Register, login, logout dan refresh token dengan validasi JWT dan hashed password (bcrypt).</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">User Management</h3>
              <p class="text-xs">Memanage profile user.</p>
            </div>


            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg col-span-2">
              <h3 class="font-bold">Monitoring</h3>
              <p class="text-xs">Prometheus memonitor seluruh service, ditampilkan di Grafana dan error monitoring dengan Sentry.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">Product Management</h3>
              <p class="text-xs">Admin bisa menambahkan, mengedit, dan menghapus produk.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">Category System</h3>
              <p class="text-xs">Produk bisa dikelompokkan ke dalam berbagai kategori.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">Role-based Access</h3>
              <p class="text-xs">Role user dan admin dipisahkan. Admin punya kontrol penuh.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
            <h3 class="font-bold">Payment Service</h3>
            <p class="text-xs">Melakukan simulasi pembayaran yang berasal dari payment-gateway.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg ">
              <h3 class="font-bold col-span-2">Kong Gateway</h3>
              <p class="text-xs">Sebagai pintu utama akses tiap service, validasi token JWT dan rate limiting.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <h3 class="font-bold">Search & Filter</h3>
              <p class="text-xs">Cari produk berdasarkan nama, kategori, harga, rating dan lain-lain.</p>
            </div>
            
          </div>


        `,
      },
      {
        name: 'readme',
        label: 'Readme',
        content: `<p class="px-5">You can see detail of this project <a href="https://github.com/faujiahmat/Cartonic-Microservices-E-commerce-App/blob/main/README.md" class="text-cyan-200 hover:text-cyan-600 font-bold" target="_blank" >here</a></p>`,
      },
    ],
  },
  {
    title: 'Task Management App',
    image: './Sandy_Bus-37_Single-08.webp',
    link: 'https://github.com/faujiahmat/Back-end-Task-Management-App',
    centerTitle: false,
    description:
      'Task Management App is a simple and efficient tool to help you organize and manage your tasks effectively. It is designed to improve productivity and keep track of your daily activities.',
    tabs: [
      {
        name: 'technologies',
        label: 'Technologies',
        content: `
        <div class="grid grid-cols-5 gap-5 px-5 ">  
          <div>
            <h3 class="font-bold">
              Language
            </h3>
            <ul class="list-disc ml-5">
              <li>Typescript</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Runtime
            </h3>
            <ul class="list-disc ml-5">
              <li>NodeJs</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Framework
            </h3>
            <ul class="list-disc ml-5">
              <li>Express</li>
            </ul>
          </div>
            
          <div>
            <h3 class="font-bold">
              Database
            </h3>
            <ul class="list-disc ml-5">
              <li>Postgresql</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Authentication
            </h3>
            <ul class="list-disc ml-5">
              <li>JWT</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              ORM
            </h3>
            <ul class="list-disc ml-5">
              <li>Prisma</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Logger
            </h3>
            <ul class="list-disc ml-5">
              <li>Winston</li>
            </ul>
          </div>
        </div>
        `,
      },
      {
        name: 'feature',
        label: 'Feature',
        content: `
          <div class="grid  grid-cols-3  gap-3 auto-rows-auto">
            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <p class="text-sm">Users can easily create new tasks, change the details of existing tasks, or delete tasks that are no longer needed. This feature is designed to give users full flexibility in managing their to-do lists, both for personal and professional purposes.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <p class="text-sm">Each task can be assigned a “completed” status after it is completed. This feature helps users monitor progress and increase productivity with clear visualization between ongoing and completed tasks.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg ">
              <p class="text-sm">Users can group tasks based on specific categories, such as “Work,” “Personal,” “Shopping,” or custom categories that can be defined by themselves. This categorization makes it easier to sort tasks and maintain focus according to each priority.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <p class="text-sm">User security is a priority. With the implementation of JWT, every request to the server will be verified through an encrypted token, ensuring that only authorized users can access and manage their personal data.</p>
            </div>

            <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
              <p class="text-sm">The interface design is made with a user-friendly and mobile-first approach. The clean and intuitive appearance allows users from various backgrounds to immediately understand how the application works without having to learn for a long time.</p>
            </div>
          </div>
        `,
      },
      {
        name: 'api',
        label: 'Api Documentation',
        content: `
          <p>
            You can see api documentation <a href="https://github.com/faujiahmat/Back-end-Task-Management-App/blob/main/docs/api.md" target="_blank" class="font-bold text-cyan-200 hover:text-cyan-600">here</a>
          </p>
        `,
      },
      {
        name: 'readme',
        label: 'Readme',
        content: `
          <p>
            You can see detail of this project <a href="https://github.com/faujiahmat/Back-end-Task-Management-App/blob/main/README.md" target="_blank" class="font-bold text-cyan-200 hover:text-cyan-600">here</a>
          </p>
        `,
      },
    ],
  },
  {
    title: 'Seven Store Fullstack App',
    image: './beranda-seven-store.webp',
    link: 'https://github.com/faujiahmat/project-harisenin-fullstack-kel7',
    centerTitle: true,
    description:
      'Seven Store is a full-stack e-commerce application designed to provide a fast, responsive, and user-friendly online shopping experience. The application allows users to browse products, make transactions, and manage their accounts securely through a modern JWT-based authentication system.',
    tabs: [
      {
        nama: 'technologies',
        label: 'Technologies',
        content: `
          <div class="flex gap-8 px-5">
            <div>
              <h3 class="font-bold">
                Frontend
              </h3>
              <ul class="list-disc ml-5">
                <li>Javascript</li>
                <li>React Js</li>
                <li>Tailwind</li>
                <li>Redux</li>
                <li>Axios</li>
              </ul>
            </div>

            <div>
              <h3 class="font-bold">
                Backend
              </h3>
              <ul class="list-disc ml-5">
                <li>Node Js</li>
                <li>Express Js</li>
                <li>MySQL</li>
                <li>JSON Web Token</li>
                <li>RESTful API</li>
              </ul>
            </div>
          </div>
        `,
      },
    ],
  },
  {
    title: 'Todolist',
    image: './todolistimg.webp',
    link: 'https://github.com/faujiahmat/TUGAS-JAVASCRIPT',
    centerTitle: false,
    description:
      'A lightweight and intuitive task management application, built using HTML, CSS, and Vanilla JavaScript without any additional frameworks. The application allows users to add, edit, and delete tasks easily, while helping to organize daily activities efficiently.',
  },
  {
    title: 'Implementasi Redis',
    image: './redisimg.webp',
    link: 'https://github.com/faujiahmat/implementasi-redis',
    centerTitle: true,
    description:
      'A project demonstrating the implementation of Redis for caching and data storage.',
  },
];

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

const technologies = [
  {
    name: 'Docker',
    url: 'https://www.docker.com/',
    img: './docker.png',
  },
  {
    name: 'Microservice',
    url: 'https://konghq.com/',
    img: './microservice.png',
  },
  {
    name: 'Kong',
    url: 'https://www.microservices.com/',
    img: './kong.svg',
  },
  {
    name: 'JavaScript',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    img: './javascript.svg',
  },
  {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
    img: './typescript.svg',
  },
  {
    name: 'Node.js',
    url: 'https://nodejs.org/en',
    img: './node.svg',
  },
  {
    name: 'Express',
    url: 'https://expressjs.com/',
    img: './express.svg',
  },
  {
    name: 'HTML',
    url: 'https://www.w3schools.com/html/',
    img: './html.svg',
  },
  {
    name: 'CSS',
    url: 'https://www.w3schools.com/css/',
    img: './css.svg',
  },
  {
    name: 'Tailwind CSS',
    url: 'https://tailwindcss.com/',
    img: './tailwind.svg',
  },
  {
    name: 'Redis',
    url: 'https://redis.io/',
    img: './redis.svg',
  },
  {
    name: 'MySQL',
    url: 'https://www.mysql.com/',
    img: 'mysql.png',
  },
  {
    name: 'PostgreSQL',
    url: 'https://www.postgresql.org/',
    img: './postgresql.svg',
  },
  {
    name: 'MongoDB',
    url: 'https://www.mongodb.com/',
    img: './mongodb.png',
  },
  {
    name: 'RabbitMQ',
    url: 'https://www.rabbitmq.com/',
    img: './rabbitmq.png',
  },
  {
    name: 'Prometheus',
    url: 'https://prometheus.io/',
    img: './prometheus.svg',
  },
  {
    name: 'Grafana',
    url: 'https://grafana.com/',
    img: './grafana.svg',
  },
  {
    name: 'Sentry',
    url: 'https://sentry.io/',
    img: './sentry.png',
  },
];

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
