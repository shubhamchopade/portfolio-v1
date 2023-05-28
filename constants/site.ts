export const info = {
  name: "Shubham Chopade",
  title: "Tinkerer. Developer. Engineer.",
  location: "Syracuse, NY",
  siteTitle: "Shubham Chopade",
  siteDescription: "Shubham Chopade's personal website",
  siteKeywords:
    "Shubham Chopade, Shubham, Chopade, shubhamchopade, shubhamchopade, software developer",
  bio: "a software engineer based in New York experienced in building web applications, mobile applications and backend services.",
  siteLanguage: "en_US",
  twitter: "https://twitter.com/chopadehsubham4",
  github: "https://github.com/shubhamchopade",
  linkedin: "https://linkedin.com/in/shubham-chopade",
};

export const education = [
  {
    type: "education",
    program: "M.S. Computer Science",
    university: "Syracuse University",
    logo: "/syracuse-logo.png",
    college: "College of Engineering & Computer Science",
    location: "Syracuse, NY",
    startDate: "August 2021",
    endDate: "May 2023",
    timelineDate: "May 2023",
    note: "Completed graduation 🫶",
    description:
      "Data Structures and Algorithms, Object Oriented Programming, Embedded Programming, Networking",
    link: "https://www.syracuse.edu/",
  },
  {
    type: "education",
    program: "B.E. Electonics and Telecommunications",
    university: "SPPU, India",
    logo: "/sppu-logo.png",
    college: "Pimpri Chinchwad College of Engineering",
    location: "Pune, India",
    startDate: "May 2015",
    endDate: "May 2019",
    timelineDate: "May 2019",
    note: "Completed undergraduation in Electronics and Telecommunications 🎓",
    description:
      "Operating Systems, Computer Architecture, Design and Analysis Of Algorithms, Databases, Android Programming, Blockchain",
    link: "https://www.pccoepune.com/",
  },
];

export const experience = [
  {
    type: "experience",
    title: "Full Stack Engineer",
    company: "Syracuse University",
    logo: "/syracuse-logo.png",
    location: "Syracuse, NY",
    startDate: "August 2022",
    endDate: "May 2023",
    timelineDate: "May 2023",
    note: "Started working as a Full Stack Engineer",
    description:
      "Python Backend, REST API: Deployed a high-performance REST API server using FastAPI for executing CPU-intensive operations. Implemented a messaging queue for efficient scheduling and handling of real-time EventSource requests, enabling the server to effectively manage and respond to up to 1000 concurrent connections. AWS, Nginx: Setup the architecture to be served by Amazon EC2 behind an Nginx proxy server, and the load balancer is used to manage HTTPS encrypted traffic.",
    link: "https://www.syracuse.edu/",
  },
  {
    type: "experience",
    title: "Software Engineer Intern",
    company: "Viasat Inc.",
    logo: "/viasat-logo.png",
    location: "Syracuse, NY",
    startDate: "May 2022",
    endDate: "August 2022",
    timelineDate: "May 2022",
    note: "Started working as a Software Engineer Intern",
    description:
      "Global Satellite Networks Team: Worked closely with Enterprise search team to assess the quality of Zoom calls experience as a service over satellite network. Automation using Raspberry Pi: Conducted recurring Zoom calls and employed Selenium and Python for automated testing, generating and processing metrics. Implemented Apache Kafka to store and transmit the metrics over to the Production Data Lake, specifically Amazon S3, for efficient storage and analysis. Collaboration: Built an efficient and scalable ingestion data pipeline to handle large volumes of incoming data from various sources.",
    link: "https://www.viasat.com/",
  },
  {
    type: "experience",
    title: "Founding Frontend Engineer",
    company: "Grouped Inc.",
    logo: "/grouped-logo.webp",
    location: "Syracuse, NY",
    startDate: "January 2022",
    endDate: "April 2022",
    timelineDate: "January 2022",
    note: "First engineering hire at Grouped Inc.",
    description:
      "Private Community App: Developed a low-code social media application using React and Next.js, specifically designed for social media influencers to create and manage close-knit groups. Accompanied the application with comprehensive technical documentation. Frontend and UI Design: Led the planning and design of an enterprise UI design system utilizing Figma, resulting in the development of over 20 reusable frontend components. Backend Infrastructure: Created a robust backend infrastructure using NestJS (Node.js) to handle data storage on AWS S3. Collaborated with a team of three developers to successfully implement the backend architecture, ensuring scalability and efficient data management.",
    link: "https://www.grouped.com/",
  },
  {
    type: "experience",
    title: "Fullstack Developer",
    company: "Freelancer - Self Employed",
    logo: "/techsapien-logo.jpeg",
    location: "Pune, India",
    startDate: "March 2019",
    endDate: "July 2021",
    timelineDate: "March 2019",
    note: "Delivered my first freelance project",
    description:
      "Project Delivery: Successfully delivered projects for remote clients in three different countries, demonstrating strong project management skills and ability to collaborate effectively across borders. Microservices Development: Leveraged NodeJS to architect and develop scalable microservices, enabling the creation of distributed systems that can be independently deployed, managed, and scaled. Utilized this technology to enhance efficiency and facilitate seamless integration within complex software architectures.",
  },
];

export const projects = [
  {
    type: "project",
    title: "Reactly - Host your React App in 3 steps",
    description:
      "Reactly is a CLI tool that helps you to host your React App in 3 steps. It is a simple and easy to use tool that helps you to host your React App on Github Pages, Netlify, and Vercel.",
    image: "/projects/decoderspace.png",
    startDate: "March 2023",
    endDate: "current",
    timelineDate: "May 2023",
    note: "Tried my hands on CLI tool development and orchestration.",
    link: "https://www.reactly.app/",
    github: "https://github.com/shubhamchopade/reactly",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "Mutualism - Agent-based modeling for Yeast",
    description:
      "Designed and developed a distributed systems-based simulator to study the behavior of Yeast in diverse environmental conditions, such as varying levels of Glucose and Lysine. This educational product is specifically aimed at teaching microbiology concepts to school-going children, providing an interactive and engaging learning experience.",
    image: "/projects/mutualismsimulator.png",
    startDate: "August 2022",
    endDate: "May 2023",
    timelineDate: "September 2022",
    note: "Learned about agent-based modeling and distributed systems.",
    link: "https://www.mutualismsimulator.org/",
    github: "https://github.com/shubhamchopade/mutualisim_frontend",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "Decoder Space - Verilog Coding Practice",
    description:
      "The Digital Electronics Coder Space is a dedicated platform designed to help individuals practice and enhance their Verilog coding skills specifically for interviews. With a focus on digital electronics, users can access a range of resources and exercises to master Verilog coding techniques, preparing them for success in technical interviews.",
    image: "/projects/decoderspace.png",
    startDate: "February 2023",
    endDate: "April 2023",
    timelineDate: "April 2023",
    note: "Building a platform to help people practice Verilog coding.",
    link: "https://www.decoderspace.com/",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "The Book Pundits - Connecting Authors & Influencers",
    description:
      "Book Pundits is a Book Campaign Platform. Their motto is to connect Authors with their niche readers and reliable authentic influencers.",
    image: "/projects/thebookpundits.png",
    startDate: "December 2020",
    endDate: "January 2021",
    timelineDate: "January 2021",
    note: "Built a platform to help authors connect with influencers.",
    link: "https://www.thebookpundits.com/",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "Tailwind CSS Gradients",
    description:
      "A collection of 180+ gradients for Tailwind CSS. The gradients are generated using the Tailwind CSS color palette.",
    image: "/projects/tailwind-v2.png",
    startDate: "May 2020",
    endDate: "October 2020",
    timelineDate: "October 2020",
    note: "You can use these gradients in your Tailwind CSS projects",
    link: "https://github.com/shubhamchopade/tailwind-gradient",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "Tailwind CSS Gradients 2.0",
    description:
      "A collection of 180+ gradients for Tailwind CSS. The gradients are generated using the Tailwind CSS color palette.",
    image: "/projects/tailwind-v2.png",
    startDate: "January 2021",
    endDate: "April 2021",
    timelineDate: "April 2021",
    note: "Another version of Tailwind CSS Gradients.",
    link: "https://github.com/shubhamchopade/tailwind-gradient-v2",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
  {
    type: "project",
    title: "Techsapien - Opensource Tech Blog",
    description:
      "Techsapien is a tech blog where I write about the latest technologies and my experiences with them.",
    image: "/projects/techsapien.png",
    startDate: "April 2020",
    endDate: "September 2020",
    timelineDate: "September 2020",
    note: "A tech blog where I write about the latest technologies.",
    link: "https://www.techsapien.dev/",
    github: "https://github.com/shubhamchopade/techsapien",
    techStack: ["React", "NodeJS", "Typescript", "Github Actions"],
  },
];

const _timeline = [...education, ...experience, ...projects];
export const sortedTimeline = _timeline.sort((a, b) => {
  const aDate = new Date(a.timelineDate).getTime();
  const bDate = new Date(b.timelineDate).getTime();
  return aDate > bDate ? -1 : 1;
});
