import { routes } from '@/util/routes.cjs';

export const state = () => ({
  navigation: [
    routes.HOME,
    {
      title: 'General',
      links: [routes.ABOUT_ME, routes.RESOURCES_OVERVIEW, routes.SPOTIFY_ARCHIVE],
    },
    {
      title: 'Projects',
      links: [
        routes.HENKEBYTE_WEBSITE,
        routes.IOS_CALCULATOR,
        routes.MINESWEEPER,
        {
          href: 'https://nuxt-envalid.henkebyte.com',
          name: 'nuxt-envalid',
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
      icon: 'bi bi-bold bi-envelope',
    },
  ],
});
