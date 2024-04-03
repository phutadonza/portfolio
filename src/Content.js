// import images
import { nanoid } from 'nanoid'
import Hero_person from './assets/images/Me/Me.png'

import figma from './assets/images/Skills/figma.png'
import my from './assets/images/Skills/mysql.png'
import mg from './assets/images/Skills/mongo.png'
import react from './assets/images/Skills/react.png'
import nodejs from './assets/images/Skills/node.png'
import ht from './assets/images/Skills/html-5.png'
import cs from './assets/images/Skills/css.png'
import js from './assets/images/Skills/javascript.png'
import bs from './assets/images/Skills/bootstrap.png'
import ph from './assets/images/Skills/php.png'
import php from './assets/images/Skills/PhpMyAdmin.png'
import ub from './assets/images/Skills/ubuntu.png'
import az from './assets/images/Skills/azure.png'

import project1 from './assets/images/projects/shorturl.png'
import project2 from './assets/images/projects/web.png'
import person_project from './assets/images/Me/Me2.png'

// import icons from react-icons
import { GrMail } from 'react-icons/gr'
import { MdArrowForward, MdCall } from 'react-icons/md'
import { BsInstagram } from 'react-icons/bs'
import { TbSmartHome } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import { RiProjectorLine } from 'react-icons/ri'
import { MdOutlinePermContactCalendar } from 'react-icons/md'

export const content = {
  nav: [
    {
      id: nanoid(),
      link: '#home',
      icon: TbSmartHome,
    },
    {
      id: nanoid(),
      link: '#skills',
      icon: BiUser,
    },
    {
      id: nanoid(),
      link: '#projects',
      icon: RiProjectorLine,
    },
    {
      id: nanoid(),
      link: '#contact',
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: 'Web Developer',
    firstName: 'PHUTADON',
    LastName: 'PHUMMARIN',
    btnText: 'Resume',
    btnText2: 'Transcript',
    btnText3: 'About Me',
    image: Hero_person,
    hero_content: [
      {
        title: 'Your Hero Title',
        description: 'Your hero description goes here',
        btnText3: 'Button Text',
      },
    ],
  },
  skills: {
    title: 'Skills',
    subtitle: 'MY TOP SKILLS',
    skills_content: [
      {
        name: 'React js',
        link: 'https://legacy.reactjs.org/docs/getting-started.html',
        logo: react,
      },
      {
        name: 'HTML',
        link: 'https://www.w3schools.com/html/html_intro.asp',
        logo: ht,
      },
      {
        name: 'CSS',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        logo: cs,
      },
      {
        name: 'Bootstrap',
        link: 'https://getbootstrap.com/docs/4.1/getting-started/introduction/',
        logo: bs,
      },
      {
        name: 'JavaScript',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        logo: js,
      },
      {
        name: 'Node js',
        link: 'https://nodejs.org/docs/latest/api/',
        logo: nodejs,
      },
      {
        name: 'MongoDB',
        link: 'https://www.mongodb.com/cloud/atlas/lp/compare-mongodb-vs-documentdb?utm_content=rlsapostreg&utm_source=google&utm_campaign=search_gs_pl_evergreen_atlas_general_retarget-brand-postreg_gic-null_apac-all_ps-all_desktop_eng_lead&utm_term=&utm_medium=cpc_paid_search&utm_ad=&utm_ad_campaign_id=14412646494&adgroup=131761134852&cq_cmp=14412646494&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAaPofqgRo8PI75P9UZvZ0-5iSJlzOTSFfwsvFSh57V2XKnm-QaPzyRoCw28QAvD_BwE',
        logo: mg,
      },
      {
        name: 'PHP',
        link: 'https://www.php.net/docs.php',
        logo: ph,
      },
      {
        name: 'MySQL',
        link: 'https://dev.mysql.com/doc/',
        logo: my,
      },
      {
        name: 'PhpMyadmin',
        link: 'https://www.phpmyadmin.net/docs/',
        logo: php,
      },
      {
        name: 'Ubuntu',
        link: 'https://help.ubuntu.com/',
        logo: ub,
      },
      {
        name: 'Microsoft Azure',
        link: 'https://learn.microsoft.com/en-us/azure/?product=popular',
        logo: az,
      },
      {
        name: 'Figma',
        link: 'https://help.figma.com/hc/en-us',
        logo: figma,
      },
    ],
    icon: MdArrowForward,
  },
  Projects: {
    title: 'Projects',
    subtitle: 'MY CREATION',
    image: person_project,
    project_content: [
      {
        title: 'Short Url',
        image: project1,
        link: 'https://phutadon.netlify.app/',
        git: 'https://github.com/phutadonza/local-phutadon.git',
      },
      {
        title: 'Web internet',
        image: project2,
        link: 'http://emc.technicchan.ac.th/std63301280010/index.html',
      },
    ],
  },
  Contact: {
    title: 'Contect Me',
    subtitle: 'GET IN TOUCH',
    social_media: [
      {
        text: 'phutadol5627@gmail.com',
        icon: GrMail,
        link: 'mailto:phutadol5627@gmail.com',
      },
      {
        text: '092-396-5627',
        icon: MdCall,
        link: 'https://wa.me/1234567890',
      },
      {
        text: 'ph_xdn',
        icon: BsInstagram,
        link: 'https://www.instagram.com/ph_xdn/',
      },
    ],
  },
  Footer: {
    text: 'All © Copy Right Reserved',
  },
}
