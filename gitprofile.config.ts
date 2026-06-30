// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'msafariyan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 3, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['progit2-fa/progit2'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Mehdi Safarian',
    description: 'Software Engineer',
    imageURL:
      'https://media.licdn.com/dms/image/v2/D4D35AQE4GMo2mnwn8Q/profile-framedphoto-shrink_400_400/B4DZyJZ9YGIoAc-/0/1771831809888?e=1783411200&v=beta&t=elzRR7XQSsJv2haTgZVElnLjNuQkzTwJOpdYD2TmBSg',
  },
  social: {
    linkedin: 'mahdi-safariyan',
    x: 'msafarian',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'safarian',
    dev: 'safarian',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: 'Safariyan',
    website: 'https://www.mehdicodes.ir',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://www.linkedin.com/ambry/?x-li-ambry-ep=AQKXSRJWj_XwGAAAAZ8XYqiZkMiuEwZTpl3lGmXt6YKKtSFCcM4APGp0aB8lx0kqb7Aa48-VJnef52JXj4kqDGLIjQwAFL8jU_ug-49pB2Q64R1Qa_pXpS033JVIJfgXsimuTtfwDB-GaDjBw6CfGwgIMG9ml3YUz4HvCULi_l3D9AclJtvC7mkaiPtt2SndNlWDp1inHiDrkfUneiL9h-ONYY5A8F00W11ZHHeU23WniutF_k22GHhGyN1UqaQ2fOVFtP_n9FC07G7KxU1pApsojTfRRUf5Ebi9a5av_QNZ0sSr43DbWGW8LR_zJ1DhXCSywyFVUjKB0f-4NPr-CtlWe17ejKyYtyk4Ui0QeexBMUGfeczi_zI-hYuN_gIAqtdZJPpZOGizKFExJlolUFNanRtKA3fVLY2-J56eg_AnXHE7MJ_2d_mEh1mNONrF0VDz-DmD0axeL3aF-VBHRf2TKcm5GgFqmF-SwppFumV7b39tR5vH9-yp-TqPbCOBUA9UaG1_OZStEX3zr72MbSeGyOHvfLB9YmZYZ0-jp9HD-wx0wafAX3aLXJagFrBj4Hb6Cg&x-ambry-um-filename=Profile.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'FastAPI',
    'Rust',
    'Blockchain',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Invex Crypto Exchange',
      position: 'Software Engineer',
      from: '2020',
      to: 'Present',
      companyLink: 'https://invex.ir/',
    },
    {
      company: 'Paya Communication Industries',
      position: 'Software engineer',
      from: '2019',
      to: '2019',
      companyLink: '',
    },
    {
      company: 'KETABLAND',
      position: 'software developer',
      from: '2018',
      to: '2018',
      companyLink: 'https://ketab.land/',
    },
    {
      company: 'TasnimeTeb',
      position: 'PHP developer',
      from: '2017',
      to: '2017',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Python for Data Science, AI & Development',
      body: '',
      year: 'Issued Jan 2026',
      link: 'https://www.coursera.org/account/accomplishments/records/VD22PNCRPWF8',
    },
    {
      name: 'GO Programming for Everyone',
      body: '',
      year: 'Issued Jan 2025',
      link: 'https://coursera.org/share/c141950abcdeded7dbfdaceadf5e0977',
    },
    {
      name: 'المپیک فناوری - Python/Django',
      body: '',
      year: 'Issued Jan 2024',
      link: 'https://quera.org/certificate/RVGXwTIE/',
    },
  ],
  educations: [
    {
      institution: 'Shamsipour Technical and Vocational College\n',
      degree: 'Bachelor',
      from: '2021',
      to: '2024',
    },
    {
      institution: 'Shamsipour Technical and Vocational College\n',
      degree: "Associate's Degree",
      from: '2019',
      to: '2021',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'safarian', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'dim',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['winter', 'dim'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
