import ShinyText from "@/blocks/TextAnimations/ShinyText/ShinyText";
import DecryptedText from "@/blocks/TextAnimations/DecryptedText/DecryptedText";

const person = {
  firstName: "Vignesh",
  lastName: "Ashokan",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "iOS Developer",
  avatar: "/images/avatar.PNG",
  email: "mailto:vigneshashokann@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>CONTACT - {person.firstName}</>,
  description: <>Slide into my inbox like a smooth CSS transition.....</>,
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vignesh-exe",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vignesh-ashokan-08a619276/",
  },
  {
    name: "Twitter",
    icon: "x",
    link: "https://x.com/VigneshAsh2610",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://medium.com/@vigneshashokann",
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <ShinyText
      text="Building bridges between design and code"
      disabled={false}
      speed={2}
      className="custom-class"
      style={{ fontSize: "120px" }}
    />
  ),

  featured: {
    display: true,
    title: (
      <>
        Current project: <strong className="ml-4">QATAR MCIT</strong>
      </>
    ),
    href: "/work/qatar-mcit",
  },
  subline: (
    <>
      I&apos;m{" "}
      <DecryptedText
        text="VIGNESH"
        animateOn="view"
        revealDirection="center"
        speed={80}
        maxIterations={20}
      />{" "}
      , iOS Developer at{" "}
      <ShinyText
        text="ACCENTURE"
        disabled={false}
        speed={2}
        className="custom-class super-bold-text"
        // style={{ fontWeight: 900 }}
        textStyle={{ fontWeight: 900 }} // If the component has this prop
      />
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "/images/vignesh-ashokan.pdf",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <div style={{ fontSize: "16px" }}>
        <p>
          👨‍💻 Hi, I&apos;m Vignesh Ashokan, an experienced{" "}
          <span className="text-blue-400">iOS Developer</span> specializing in{" "}
          <span className="text-white">Swift</span> and{" "}
          <span className="text-blue-300">SwiftUI</span>, with a strong focus on
          building scalable, high-performance native iOS applications 📱. I have
          hands-on expertise in implementing{" "}
          <span className="text-green-400">VIPER architecture</span>, ensuring
          clean separation of concerns, testability, and long-term
          maintainability across complex app modules.
          <br />
          <br />I am currently working as a{" "}
          <a
            className="text-green-300 hover:text-green-500 duration-300"
            href="https://www.linkedin.com/in/vignesh-ashokan-08a619276/"
            target="_blank"
            rel="noreferrer"
          >
            Software Developer
          </a>
          , where I design and deliver intuitive user experiences that align
          closely with Apple&apos;s Human Interface Guidelines 🚀. My work
          involves integrating RESTful APIs, handling edge cases, optimizing UI
          performance, and ensuring seamless localization and accessibility
          support.
          <br />
          <br />
          Beyond development, I actively share technical insights and real-world
          iOS experiences through in-depth articles on{" "}
          <a
            className="text-purple-300 hover:text-purple-400 duration-300"
            href="https://medium.com/@vigneshashokann"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          , covering topics such as SwiftUI best practices, architectural
          patterns, and performance optimization. Outside of tech, I enjoy
          photography 📸—a creative outlet that helps me{" "}
          <span className="text-yellow-500">
            capture moments, tell stories, and refine my eye for detail
          </span>
          .
        </p>
      </div>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: (
          <a
            href="https://www.accenture.com/in-en"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 duration-300"
          >
            Accenture
          </a>
        ),
        timeframe: "October 2023 - Present",
        role: "iOS Developer - Analyst",
        achievements: [
          <>
            Involved in dynamic contributions to web and mobile📱 development
            projects, actively influencing and improving project outcomes.
          </>,
          <>
            Developed multiple shared components to simplify tasks for fellow
            developers, boosting efficiency and teamwork.
          </>,
          <>
            Enhanced product performance through significant contributions to
            backend development, optimizing essential components for improved
            efficiency 📈.
          </>,
          <>
            Implemented data security for the company’s product to provide
            role-based access control ⚙️.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: (
          <a
            href="https://emphaticsense.com/#"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 duration-300"
          >
            Emphatic Sense Technologies
          </a>
        ),
        timeframe: "March 2023 - June 2023",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Gained experience with Git version control contributing to the
            development and maintenance of code repositories.
          </>,
          <>
            Worked on the application dashboard, making it more user-friendly
            and improving its overall functionality📱.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Alagappa University",
        description: <>MBA - Human Resource Management - pursuing</>,
      },
      {
        name: "Saveetha Engineering College",
        description: <>B.E. - Biomedical Engineering - 2023</>,
      },
      {
        name: "Zion Matriculation Higher Secondary School",
        description: <>HSC - 2019</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Contact",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,

  images: [
    {
      src: "/images/gallery/puppy.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/river.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/me.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ganesha.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/moon.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/mahabs.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
