export const projects = [
  {
    title: 'Zentra | An E-commerce App Microservice',
    image: './zentra.webp',
    link: 'https://github.com/faujiahmat/zentra-microservices',
    centerTitle: true,
    description: '',

    tabs: [
      //   {
      //     name: 'technologies',
      //     label: 'Technologies',
      //     content: `
      //     <div class="grid grid-cols-5 gap-5 px-5 ">
      //       <div>
      //         <h3 class="font-bold">
      //           Language
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Typescript</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //           Runtime
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>NodeJs</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //           Framework
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Express</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //           Database
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>MongoDB</li>
      //           <li>Postgresql</li>
      //           <li>Redis</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         API Gateway
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Kong Gateway</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         Container Runtime
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Docker</li>
      //           <li>Docker Compose</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         Monitoring
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Prometheus</li>
      //           <li>Grafana</li>
      //           <li>Sentry (Error monitoring)</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         Message Broker
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Rabbitmq</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         Authentication
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>JWT</li>
      //         </ul>
      //       </div>
      //       <div>
      //         <h3 class="font-bold">
      //         Orm
      //         </h3>
      //         <ul class="list-disc ml-5">
      //           <li>Prisma</li>
      //         </ul>
      //       </div>
      //     </div>
      //     `,
      //   },
      //   {
      //     name: 'architecture',
      //     label: 'Architecture',
      //     content: `<p class="px-5 mb-5">You can see the architecture of this project here.</p>
      //     <div class="flex justify-center items-center px-5">
      //       <a href="https://uploadimage.io/image/MIcroservice-cartonic.SVsdk" target="_blank"><img class="w-40" src="https://uploadimage.io/images/2025/04/18/MIcroservice-cartonic.th.jpg" alt="MIcroservice cartonic" border="0"></a>
      //     </div>
      //     `,
      //   },
      //   {
      //     name: 'structure',
      //     label: 'Structure',
      //     content: `
      //       <p class="px-5">
      //         CARTONIC/</br>
      //         ├── api-gateway/         # Konfigurasi Kong </br>
      //         ├── docker/              # Dockerfile dan docker-compose.yml </br>
      //         ├── docs/                # Dokumentasi API</br>
      //         ├── scripts/             # Script otomatisasi</br>
      //         ├── services/            # Semua service</br>
      //         ├── .gitignore</br>
      //         └── README.md
      //       </p>
      //     `,
      //   },
      //   {
      //     name: 'api',
      //     label: 'API Documentation',
      //     content: `<p class="px-5">You can see api documentaion <a href="https://github.com/faujiahmat/Cartonic-Microservices-E-commerce-App/blob/main/docs/api.md" target="_blank" class="font-bold text-cyan-200 hover:text-cyan-600">here</a></p>`,
      //   },
      //   {
      //     name: 'feature',
      //     label: 'Feature',
      //     content: `
      //       <div class="grid  grid-cols-6  gap-1 auto-rows-auto">
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">Order Service</h3>
      //           <p class="text-xs">Simulasi pemesanan produk.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg col-span-2">
      //           <h3 class="font-bold">Auth Authentication</h3>
      //           <p class="text-xs">Register, login, logout dan refresh token dengan validasi JWT dan hashed password (bcrypt).</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">User Management</h3>
      //           <p class="text-xs">Memanage profile user.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg col-span-2">
      //           <h3 class="font-bold">Monitoring</h3>
      //           <p class="text-xs">Prometheus memonitor seluruh service, ditampilkan di Grafana dan error monitoring dengan Sentry.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">Product Management</h3>
      //           <p class="text-xs">Admin bisa menambahkan, mengedit, dan menghapus produk.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">Category System</h3>
      //           <p class="text-xs">Produk bisa dikelompokkan ke dalam berbagai kategori.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">Role-based Access</h3>
      //           <p class="text-xs">Role user dan admin dipisahkan. Admin punya kontrol penuh.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //         <h3 class="font-bold">Payment Service</h3>
      //         <p class="text-xs">Melakukan simulasi pembayaran yang berasal dari payment-gateway.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg ">
      //           <h3 class="font-bold col-span-2">Kong Gateway</h3>
      //           <p class="text-xs">Sebagai pintu utama akses tiap service, validasi token JWT dan rate limiting.</p>
      //         </div>
      //         <div class="bg-cyan-900 rounded-xl p-1 text-white h-fit shadow-lg">
      //           <h3 class="font-bold">Search & Filter</h3>
      //           <p class="text-xs">Cari produk berdasarkan nama, kategori, harga, rating dan lain-lain.</p>
      //         </div>
      //       </div>
      //     `,
      //   },
      //   {
      //     name: 'readme',
      //     label: 'Readme',
      //     content: `<p class="px-5">You can see detail of this project <a href="https://github.com/faujiahmat/Cartonic-Microservices-E-commerce-App/blob/main/README.md" class="text-cyan-200 hover:text-cyan-600 font-bold" target="_blank" >here</a></p>`,
      //   },
    ],
  },
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
    title: 'Book Store App with Go',
    image:
      'https://res.cloudinary.com/dyaxpyhd0/image/upload/v1754798236/3303129_475427-PH1LQQ-118_spyho3.jpg',
    link: 'https://github.com/faujiahmat/books_store_api',
    centerTitle: true,
    description:
      'This project is a backend service for a Book Store application, providing CRUD (Create, Read, Update, Delete) APIs to manage book data. It is built with Go using the Fiber framework for high performance and ease of development.Version control is managed with Git, while Docker and Docker Compose are used to streamline building, deployment, and ensure a consistent development environment. The project also includes comprehensive testing to maintain code quality and API stability, making it a solid foundation for any server-based bookstore application.',

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
              <li>Go</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Framework
            </h3>
            <ul class="list-disc ml-5">
              <li>Fiber</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold">
              Orm
            </h3>
            <ul class="list-disc ml-5">
              <li>Gorm</li>
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
              Testing
            </h3>
            <ul class="list-disc ml-5">
              <li>Testify</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Containerization
            </h3>
            <ul class="list-disc ml-5">
              <li>Docker</li>
            </ul>
          </div>

          <div>
            <h3 class="font-bold">
              Linting
            </h3>
            <ul class="list-disc ml-5">
              <li>golangci-lint</li>
            </ul>
          </div>
          

        `,
      },
      {
        name: 'structure',
        label: 'Structure',
        content: `
          <p class="px-5">
            src\<br>
            |--config\         # Environment variables and configuration related things<br>
            |--controller\     # Route controllers (controller layer)<br>
            |--database\       # Database connection & migrations<br>
            |--middleware\     # Custom fiber middlewares<br>
            |--model\          # Postgres models (data layer)<br>
            |--response\       # Response models<br>
            |--router\         # Routes<br>
            |--service\        # Business logic (service layer)<br>
            |--utils\          # Utility classes and functions<br>
            |--validation\     # Request data validation schemas<br>
            |--main.go         # Fiber app<br>
          </p>
        `,
      },
      {
        name: 'readme',
        label: 'Readme',
        content: `<p class="px-5">You can see detail of this project <a href="https://github.com/faujiahmat/books_store_api/blob/main/README.md" class="text-blue-300">here</a></p>`,
      },
    ],
  },
  {
    title: 'PT. Zen Putra Malaka',
    image: './zenputramalaka.webp',
    link: 'https://github.com/faujiahmat/zen-putra-malaka',
    centerTitle: true,
    description:
      'Zen Putra Malaka adalah perusahaan kontraktor terpercaya untuk proyek instalasi listrik dan galian tanah di Indonesia.',
    tabs: [
      {
        name: 'link',
        label: 'Link',
        content:
          "<p class='px-5'>You can see the website <a href='https://zenputramalaka.com' target='_blank' class='text-cyan-200 hover:text-cyan-600 font-bold'>here</a></p>",
      },
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
              <li>NextJs</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold">
              Styling
            </h3>
            <ul class="list-disc ml-5">
              <li>Tailwind Css</li>
            </ul>
          </div>
          <div>
            <h3 class="font-bold">
              Email Service
            </h3>
            <ul class="list-disc ml-5">
              <li>EmailJs</li>
            </ul>
          </div>
            
        `,
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
