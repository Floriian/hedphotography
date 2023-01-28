type Route = {
  name: string;
  path: string;
};

export const routes: Route[] = [
  {
    name: 'Főoldal',
    path: '/',
  },
  {
    name: 'Rólam',
    path: '/about-me',
  },
  {
    name: 'Galéria',
    path: '/gallery',
  },
  {
    name: 'Kapcsolat',
    path: '/contact',
  },
];
