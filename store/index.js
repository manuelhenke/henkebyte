import { routes } from '@/util/routes.cjs';

// eslint-disable-next-line import/prefer-default-export
export const state = () => ({
  navigation: [
    routes.HOME,
    {
      title: 'General',
      links: [routes.ABOUT_ME, routes.RESOURCES_OVERVIEW, routes.F1_COUNTDOWN],
    },
    {
      title: 'Projects',
      links: [routes.HENKEBYTE_WEBSITE, routes.IOS_CALCULATOR, routes.MINESWEEPER],
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
});
