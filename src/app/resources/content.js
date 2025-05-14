import { Logo } from '@/once-ui/components';
import ShinyText from '@/blocks/TextAnimations/ShinyText/ShinyText';
import DecryptedText from '@/blocks/TextAnimations/DecryptedText/DecryptedText';
import GradientText from '@/blocks/TextAnimations/GradientText/GradientText';

const person = {
  firstName: 'Vignesh',
  lastName: 'Ashokan',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Front-End Developer',
  avatar: '/images/avatar.PNG',
  email: 'mailto:vigneshashokann@gmail.com',
  location: 'Asia/Kolkata',
  languages: ['English'] // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of creativity and
      engineering.
    </>
  )
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/vignesh-exe'
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/vignesh-ashokan-08a619276/'
  },
  {
    name: 'Twitter',
    icon: 'twitter',
    link: 'https://x.com/VigneshAsh2610'
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`
  },
  {
    name: 'Medium',
    icon: 'medium',
    link: 'https://medium.com/@vigneshashokann'
  }
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <ShinyText text="Building bridges between design and code" disabled={false} speed={2} className="custom-class" />
  ),

  featured: {
    display: true,
    title: (
      <>
        Current project: <strong className="ml-4">QATAR MCIT</strong>
      </>
    ),
    href: '/work/building-once-ui-a-customizable-design-system'
  },
  subline: (
    <>
      I'm <DecryptedText text="VIGNESH" animateOn="view" revealDirection="center" speed={140} maxIterations={20} /> , a
      Front-end Developer at <ShinyText text="ACCENTURE" disabled={false} speed={2} className="custom-class" />
    </>
  )
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false
  },
  avatar: {
    display: true
  },
  calendar: {
    display: true,
    link: 'https://cal.com'
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <div style={{ fontSize: '16px' }}>
        <p>
          👨‍💻 Hi, I'm Vignesh Ashokan, a 2023 graduate🎓 with a passion for crafting robust frontend systems. As a
          seasoned{' '}
          <a
            className="text-green-300 hover:text-green-500 duration-300"
            href="https://www.linkedin.com/in/vignesh-ashokan-08a619276/"
            target="_blank"
            rel="noreferrer"
          >
            Software developer
          </a>{' '}
          I specialize in React.JS and tailwind css 🚀. ✍️ Beyond coding, I love sharing my insights and experiences
          through engaging blogs on{' '}
          <a
            className="text-purple-300 hover:text-purple-400 duration-300"
            href="https://medium.com/@vigneshashokann"
            target="_blank"
            rel="noreferrer"
          >
            Medium
          </a>
          , where I delve into the intricacies of software development and technology trends. On a different note, I'm
          also into photography📸. It's not just a hobby; I see it as a way to{' '}
          <span className="text-yellow-500">capture moments🌟📷, tell stories</span>.
        </p>
      </div>
    )
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
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
        timeframe: 'October 2023 - Present',
        role: 'Associate Software Engineer',
        achievements: [
          <>
            Involved in dynamic contributions to web and mobile📱 development projects, actively influencing and
            improving project outcomes.
          </>,
          <>
            Developed multiple shared components to simplify tasks for fellow developers, boosting efficiency and
            teamwork.
          </>,
          <>
            Enhanced product performance through significant contributions to backend development, optimizing essential
            components for improved efficiency 📈.
          </>,
          <>Implemented data security for the company’s product to provide role-based access control ⚙️.</>
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: '/images/projects/project-01/cover-01.jpg',
            alt: 'Once UI Project',
            width: 16,
            height: 9
          }
        ]
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
        timeframe: 'March 2023 - June 2023',
        role: 'Software Engineer Intern',
        achievements: [
          <>
            Gained experience with Git version control contributing to the development and maintenance of code
            repositories.
          </>,
          <>
            Worked on the application dashboard, making it more user-friendly and improving its overall functionality📱.
          </>
        ],
        images: []
      }
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Saveetha Engineering College',
        description: <>B.E. - Biomedical Engineering</>
      },
      {
        name: 'Zion Matriculation Higher Secondary School',
        description: <>Till 12th</>
      }
    ]
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'Figma',
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-02.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          },
          {
            src: '/images/projects/project-01/cover-03.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      },
      {
        title: 'Next.js',
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: '/images/projects/project-01/cover-04.jpg',
            alt: 'Project image',
            width: 16,
            height: 9
          }
        ]
      }
    ]
  }
};

const blog = {
  path: '/blog',
  label: 'Contact',
  title: 'Writing about design and tech...',
  description: `Read what ${person.name} has been up to recently`
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: '/work',
  label: 'Projects',
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'image',
      orientation: 'horizontal'
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'image',
      orientation: 'vertical'
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'image',
      orientation: 'vertical'
    }
  ]
};

export { person, social, newsletter, home, about, blog, work, gallery };
