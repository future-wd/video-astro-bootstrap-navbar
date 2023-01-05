type mainMenu = ({
  title: string;
  url: string;
} | {
  title: string;
  children: ({
      title: string;
      url: string;
  } | {
      divider: true;
  })[];
  url?: undefined;
})[]

export const SITE_TITLE: string = 'Astro Site';

export const MAIN_MENU: mainMenu = [
  { title: 'Home', url: '/' },
  { title: 'About', url: '/about' },
  { title: 'Dropdown', children: [
    {title: 'First child', url: '/first'},
    {divider: true },
    {title: 'Second child', url: '/second'},
  ]}
];
