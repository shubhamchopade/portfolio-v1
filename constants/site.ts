export const info = {
  name: "Shubham Chopade",
  title: "Tinkerer. Developer. Engineer.",
  location: "Syracuse, NY",
  siteTitle: "Shubham Chopade",
  siteDescription: "Shubham Chopade's personal website",
  siteKeywords:
    "Shubham Chopade, Shubham, Chopade, shubhamchopade, shubhamchopade, software developer",
  bio: "A software engineer based in New York experienced in building web applications, mobile applications and backend services.",
  siteLanguage: "en_US",
  twitter: "https://twitter.com/chopadeshubham4",
  github: "https://github.com/shubhamchopade",
  linkedin: "https://linkedin.com/in/shubham-chopade",
  metadata: {
    og: {
      title: "Shubham Chopade",
      image: "/og/open-graph-lg.png",
      url: "https://shubhamchopade.com",
    },
    twitter: {
      title: "Shubham Chopade",
      image: "/og/twitter-sm.png",
      card: "/og/twitter-lg.png",
      url: "https://shubhamchopade.com",
      creator: "@chopadeshubham4",
    },
  },
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
    note: "Completed Masters in Computer Science",
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
    title: "Software Engineer",
    company: "Kinimatic (RoadOne IntermodaLogistics)",
    logo: "/kinimatic-logo.png",
    location: "Boston, NY",
    startDate: "August 2023",
    endDate: "current",
    timelineDate: "August 2023",
    note: "Started working as a Full Stack Engineer",
    description:
      "Being an early engineer, I was responsible for building the core product from scratch. I worked on the frontend using React and Next.js and the backend using Node.js and Express. I also worked on the database schema design and implementation using Postgres. I also worked on the CI/CD pipeline using Github Actions and Docker. I also worked on the deployment of the application on AWS.",
    link: "https://www.kinimatic.com",
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
    title: "Software Engineer",
    company: "Paveway Automation",
    logo: "/paveway-logo.jpeg",
    location: "Pune, India",
    startDate: "June 2019",
    endDate: "July 2021",
    timelineDate: "June 2019",
    note: "First job as a Software Engineer",
    description:
      "Project Delivery: Worked with a team of experienced developers to design and develop software solutions for clients in various automobile automation industries",
  },
];

export const projects = [
  {
    type: "project",
    title: "Reactly",
    description:
      "Reactly is a CLI tool along with a web interface that helps you host your React App in 3 steps. It is a simple and easy to use tool that helps you to host your React App on Github Pages, Netlify, and Vercel.",
    image: "/projects/reactly.png",
    startDate: "March 2023",
    endDate: "May 2023",
    timelineDate: "May 2023",
    note: "Tried my hands on CLI tool development and orchestration.",
    github: "https://github.com/shubhamchopade/reactly",
    techStack: ["NextJS", "Typescript", "ExpressJS", "Docker", "Postgres"],
  },
  {
    type: "project",
    title: "Mutualism - Agent-based modeling",
    description:
      "Designed and developed a distributed systems-based simulator to study the behavior of Yeast in diverse environmental conditions, such as varying levels of Glucose and Lysine. This educational product is specifically aimed at teaching microbiology concepts to school-going children, providing an interactive and engaging learning experience.",
    image: "/projects/mutualismsimulator.png",
    startDate: "August 2022",
    endDate: "May 2023",
    timelineDate: "September 2022",
    note: "Learned about agent-based modeling and distributed systems.",
    github: "https://github.com/shubhamchopade/mutualisim_frontend",
    techStack: ["React", "Python", "AWS", "Github Actions", "FastAPI"],
  },
  {
    type: "project",
    title: "Decoder Space - Verilog",
    description:
      "The Digital Electronics Coder Space is a dedicated platform designed to help individuals practice and enhance their Verilog coding skills specifically for interviews. With a focus on digital electronics, users can access a range of resources and exercises to master Verilog coding techniques, preparing them for success in technical interviews.",
    image: "/projects/decoderspace.png",
    startDate: "February 2023",
    endDate: "April 2023",
    timelineDate: "April 2023",
    note: "Building a platform to help people practice Verilog coding.",
    link: "https://www.decoderspace.com/",
    techStack: ["Django", "Postgres", "AWS", "Verilog", "NextJS"],
  },
  {
    type: "project",
    title: "The Book Pundits",
    description:
      "Book Pundits is a Book Campaign Platform. Their motto is to connect Authors with their niche readers and reliable authentic influencers.",
    image: "/projects/thebookpundits.png",
    startDate: "December 2020",
    endDate: "January 2021",
    timelineDate: "January 2021",
    note: "Built a platform to help authors connect with influencers.",
    link: "https://thebookpundits.com/",
    techStack: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    type: "project",
    title: "Tailwind CSS Gradients",
    description:
      "A collection of 180+ gradients for Tailwind CSS. The gradients are generated using the Tailwind CSS color palette.",
    image: "/projects/tailwind-gradient.png",
    startDate: "May 2020",
    endDate: "October 2020",
    timelineDate: "October 2020",
    note: "You can use these gradients in your Tailwind CSS projects",
    github: "https://github.com/shubhamchopade/tailwind-gradient",
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
    github: "https://github.com/shubhamchopade/tailwind-gradient-v2",
    techStack: ["React", "Styled Components", "Tailwind CSS", "Supabase"],
  },
  {
    type: "project",
    title: "Techsapien - Blog",
    description:
      "Techsapien is a tech blog where I write about the latest technologies and my experiences with them.",
    image: "/projects/techsapien.png",
    startDate: "April 2020",
    endDate: "September 2020",
    timelineDate: "September 2020",
    note: "A tech blog where I write about the latest technologies.",
    github: "https://github.com/shubhamchopade/techsapien",
    techStack: ["Gatsby", "MDX", "Tailwind CSS"],
  },
];

const _timeline = [...education, ...experience, ...projects];
export const sortedTimeline = _timeline.sort((a, b) => {
  const aDate = new Date(a.timelineDate).getTime();
  const bDate = new Date(b.timelineDate).getTime();
  return aDate > bDate ? -1 : 1;
});
