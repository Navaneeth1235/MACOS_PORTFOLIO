const navLinks = [
    {
      id: 1,
      name: "Projects",
      type: "finder",
    },
    {
      id: 3,
      name: "Contact",
      type: "contact",
    },
    {
      id: 4,
      name: "Resume",
      type: "resume",
    },
  ];
  
  const navIcons = [
    {
      id: 1,
      img: "/icons/wifi.svg",
    },
    {
      id: 2,
      img: "/icons/search.svg",
    },
    {
      id: 3,
      img: "/icons/user.svg",
    },
    {
      id: 4,
      img: "/icons/mode.svg",
    },
  ];
  
  const dockApps = [
    {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
    },
    {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
    },
    {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
    },
    {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
    },
    {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
    },
  ];
  
  const blogPosts = [
    {
      id: 1,
      date: "Sep 2, 2025",
      title:
        "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
    },
    {
      id: 2,
      date: "Aug 28, 2025",
      title: "The Ultimate Guide to Mastering Three.js for 3D Development",
      image: "/images/blog2.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
    },
    {
      id: 3,
      date: "Aug 15, 2025",
      title: "The Ultimate Guide to Mastering GSAP Animations",
      image: "/images/blog3.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
    },
  ];
  
  const techStack = [
    {
      category: "AI / ML",
      items: [
        "PyTorch",
        "TensorFlow",
        "Transformers",
        "OpenAI",
        "Gemini",
        "YOLO",
        "NumPy",
        "Pandas",
      ],
    },
    {
      category: "Databases",
      items: [
        "PostgreSQL",
        "MySQL",
        "Oracle",
        "Firebase",
      ],
    },
    {
      category: "DevOps & Cloud",
      items: [
        "Docker",
        "S3, EC2",
        "Vercel",
        "Netlify"
      ],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "Angular",
        "Tailwind CSS",
        "Sass",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "FastAPI",
        "Flask",
      ],
    },
    {
      category: "Programming Languages",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",,
        "C++",
        "PHP",
      ],
    },
    {
      category: "Tools & Platforms",
      items: [
        "Git",
        "VS Code",
        "Cursor AI",
        "Google Colab",
        "Jupyter Notebook",
        "Firebase Studio"
      ],
    },
  ];  
  
  const socials = [
    {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/Navaneeth1235",
    },
    {
      id: 2,
      text: "Leetcode",
      icon: "/icons/leetcode.png",
      bg: "#4bcb63",
      link: "https://leetcode.com/u/Navaneeth12345/",
    },
    {
      id: 4,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/navaneeth-gowda-t-b09972306/",
    },
  ];
  
  const photosLinks = [
    {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
    },
    {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
    },
    {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
    },
    {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
    },
    {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
    },
  ];
  
  const gallery = [
    {
      id: 1,
      img: "/images/gal1.png",
    },
    {
      id: 2,
      img: "/images/gal2.png",
    },
    {
      id: 3,
      img: "/images/gal3.png",
    },
    {
      id: 4,
      img: "/images/gal4.png",
    },
  ];
  
  export {
    navLinks,
    navIcons,
    dockApps,
    blogPosts,
    techStack,
    socials,
    photosLinks,
    gallery,
  };
  
const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: macOS Portfolio
    {
      id: 5,
      name: "MacOS Portfolio Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[10vh] left-8",
      children: [
        {
          id: 101,
          name: "macOS Portfolio.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-8",
          description: [
            "1. A macOS-inspired interactive portfolio built entirely for the web.",
            "2. Simulates native macOS features such as Finder, Dock, draggable windows, and window controls.",
            "3. Built using React, GSAP, Zustand, and Tailwind CSS with a strong focus on UI/UX realism.",
            "4. Demonstrates advanced frontend architecture, state management, and animation handling."
          ]
        }
      ]
    },

    // ▶ Project 2: AI Image Recognition Chatbot
    {
      id: 7,
      name: "AI Image Recognition Chatbot",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-36 left-5",
      windowPosition: "top-[18vh] left-8",
      children: [
        {
          id: 102,
          name: "AI Image Recognition Chatbot.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-8",
          description: [
            "1. An AI-powered chatbot capable of understanding and responding to image-based queries.",
            "2. Uses computer vision techniques combined with NLP to analyze image content.",
            "3. Designed to showcase multimodal AI interactions using Python and deep learning models.",
            "4. Highlights practical use cases of AI in visual understanding and conversational systems."
          ]
        }
      ]
    },

    // ▶ Project 3: OSINT For Everyone
    {
      id: 9,
      name: "OSINT For Everyday Uses",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-62 left-5",
      windowPosition: "top-[26vh] left-8",
      children: [
        {
          id: 103,
          name: "OSINT For Everyone.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-8",
          description: [
            "1. A beginner-friendly project focused on Open-Source Intelligence (OSINT).",
            "2. Explores how publicly available data can be gathered, analyzed, and interpreted responsibly.",
            "3. Designed as an educational resource covering real-world OSINT techniques and tools.",
            "4. Emphasizes ethical awareness and cybersecurity fundamentals."
          ]
        }
      ]
    },

    // ▶ Project 4: Social Media Sentiment Analysis
    {
      id: 11,
      name: "Social-Media Sentiment Analysis",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-88 left-5",
      windowPosition: "top-[34vh] left-8",
      children: [
        {
          id: 104,
          name: "Social Media Sentiment Analysis.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-8",
          description: [
            "1. A data-driven project that analyzes sentiment from social media content.",
            "2. Uses NLP techniques to classify opinions as positive, negative, or neutral.",
            "3. Built to demonstrate real-world applications of machine learning and text analytics.",
            "4. Highlights skills in Python, data preprocessing, and sentiment modeling."
          ]
        }
      ]
    }
  ]
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/Navaneeth.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code:",
      image: "",
      description: [
        "I’m an Artificial Intelligence Engineer with a strong foundation in ML, Generative AI, and Full-Stack AI systems, currently pursuing my B.E. in AI & DS with a 8.9 CGPA. I enjoy building AI products that move beyond theory and deliver real-world impact.",
        "I’ve worked as an AI Intern at Intel, Datatobiz, and Wish Grantars, where I developed and deployed production-grade solutions including LLM-powered chatbots, automated question generation pipelines, and multimodal AI applications. My work has focused on optimizing models for performance, and cost-efficiency—often in cloud-deployed environments.",
         "Technically, I’m comfortable working across the stack with Python, SQL, C/C++, Flask, FastAPI, TensorFlow, PyTorch, Hugging Face, Docker, and cloud platforms like GCP and AWS. ",
        "I’m driven by curiosity, experimentation, and building AI systems that are practical, reliable, and user-centric. I’m currently seeking opportunities where I can contribute to impactful AI products while continuing to grow as an engineer.",
      ],
    },
  ],
};

  
  const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "Resume.pdf",
        icon: "/images/pdf.png",
        kind: "file",
        fileType: "pdf",
        // you can add `href` if you want to open a hosted resume
        // href: "/your/resume/path.pdf",
      },
    ],
  };
  
  const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
      {
        id: 1,
        name: "trash1.png",
        icon: "/images/image.png",
        kind: "file",
        fileType: "img",
        position: "top-10 left-10",
        imageUrl: "/images/trash-1.png",
      },
    ],
  };
  
  export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
  };
  
  const INITIAL_Z_INDEX = 1000;
  
  const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  };
  
  export { INITIAL_Z_INDEX, WINDOW_CONFIG };