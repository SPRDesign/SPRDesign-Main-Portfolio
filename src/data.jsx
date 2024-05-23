//  icons
import {
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi';

// projects images
import Project1 from './assets/img/projects/p1-ecommerce.png';
import Project2 from './assets/img/projects/p2-news.png';
import Project3 from './assets/img/projects/p3-qpqr.png';
import Project4 from './assets/img/projects/3D-1.png';


// projects sub-images
import P1A from './assets/img/projects/p1-products.png';
import P1B from './assets/img/projects/p1-cart.png';
import P1C from './assets/img/projects/p1-wishlist.png';

import P2A from './assets/img/projects/p2-search-word.png';
import P2B from './assets/img/projects/p2-single-article.png';
import P2C from './assets/img/projects/p-2-category-articles.png';

import P3A from './assets/img/projects/p3-startapp.png';
import P3B from './assets/img/projects/p3-menu.png';
import P3C from './assets/img/projects/p3-order.png';

import P4A from './assets/img/projects/3D-2.png';
import P4B from './assets/img/projects/3D-3.png';
import P4C from './assets/img/projects/3D-4.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/bootstrap.png';
import SkillImg5 from './assets/img/skills/tailwind.png';
import SkillImg6 from './assets/img/skills/reactjs.png';
import SkillImg7 from './assets/img/skills/astro.png';
import SkillImg8 from './assets/img/skills/nodejs.png';

import SkillImg10 from './assets/img/skills/python.png';
import SkillImg11 from './assets/img/skills/figma.png';
import SkillImg12 from './assets/img/skills/illustrator.png';
import SkillImg13 from './assets/img/skills/photoshop.png';
import SkillImg14 from './assets/img/skills/indesign.png';
import SkillImg15 from './assets/img/skills/clo3d.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },

  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [

  {
    icon: <FiGithub />,
    href: 'https://github.com/SPRDesign',
  },
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/sarapages/',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Fashion E-commerce',
    category: 'web development',
    href: 'https://spr-fashion-ecommerce.netlify.app',
    technology: 'React | Tailwind',
    description: 'Fashion E-commerce that offers a smooth and engaging experience with a modern design and intuitive interface. Visual elements enhance the user experience, creating a functional environment for online shopping.',
    photos: [
      P1A,
      P1B,
      P1C,
    ]
  },
  {
    id: '2',
    image: Project2,
    name: 'The News Tracker',
    category: 'web development',
    href: 'https://the-news-tracker.netlify.app',
    technology: 'Astro | React | Tailwind',
    description: 'A global news website that uses an API to categorize and search news by category and keyword, providing users with a precise and tailored informational experience. The platform offers real-time updates and comprehensive coverage of current events worldwide.',
    photos: [
      P2A,
      P2B,
      P2C,
    ]
  },
  {
    id: '3',
    image: Project3,
    name: 'Quick Pay QR',
    category: 'web development',
    href: 'https://sample-service-name-ij46.onrender.com/',
    technology: 'React | Bootstrap | Python | Flask',
    description: 'Web platform that integrates a QR scanning system to access a mobile app tailored for order management in dining venues. Users can browse menus, place orders, and pay independently, bypassing waiter assistance. This enhances the user experience by cutting wait times and simplifying the ordering and payment process.',
    photos: [
      P3A,
      P3B,
      P3C,
    ]
  },
  {
    id: '4',
    image: Project4,
    name: 'SPR Fashion 3D',
    category: 'Fashion 3D',
    href: 'https://sprdesign-fashion3d.netlify.app/',
    technology: 'Astro',
    description: "SPR Design's 3D fashion portfolio, where each image reflects the precision and detail of my latest creations. Explore the fusion of fashion and technology, where digitally modeled garments offer a unique and innovative experience.",
    photos: [
      P4A,
      P4B,
      P4C,
    ]

  },

];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'Fashion 3D',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
  {
    image: SkillImg12,
  },
  {
    image: SkillImg13,
  },
  {
    image: SkillImg14,
  },
  {
    image: SkillImg15,
  },
];



// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at ',
    mail: 'sprdesign3d@gmail.com'
  },

];


