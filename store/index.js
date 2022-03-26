export const state = () => ({
  navigation: [
    {
      title: 'Home',
      to: '/',
    },
    {
      title: 'General',
      links: [
        {
          to: 'about-me',
          name: 'About Me',
        },
        {
          to: 'resources-overview',
          name: 'Resources Overview',
        },
      ],
    },
    {
      title: 'Projects',
      links: [
        {
          to: 'ios-calculator',
          name: 'iOS-Calculator',
        },
        {
          to: 'minesweeper',
          name: 'Minesweeper',
        },
      ],
    },
  ],
  contactOptions: [
    {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/manuel-henke/',
      icon: 'bi bi-linkedin',
    },
    {
      text: 'GitHub',
      href: 'https://github.com/manuelhenke',
      icon: 'bi bi-github',
    },
    {
      text: 'E-Mail',
      href: 'mailto:contact@henkebyte.com',
      icon: 'bi bi-envelope',
    },
  ],
})
