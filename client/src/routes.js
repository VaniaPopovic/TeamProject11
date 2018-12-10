import React from 'react';
import DefaultLayout from './containers/DefaultLayout';
//import WordFind from './views/Dashboard/Dashboard';

const Breadcrumbs = React.lazy(() => import('./views/Base/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Navbars = React.lazy(() => import('./views/Base/Navbars'));
const Navs = React.lazy(() => import('./views/Base/Navs'));

const WordFind = React.lazy(() => import('./views/WordFind'));
const CrosswordsPage = React.lazy(() => import('./views/CrosswordsPage'));
const ScrabblePage = React.lazy(() => import('./views/WordUnscramble'));


const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/wordfind', name: 'WordFindPage', component: WordFind },
  { path: '/crosswords', name: 'CrosswordsPage', component: CrosswordsPage },
  { path: '/scrabble', name: 'ScrabblePage', component: ScrabblePage },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },
];

export default routes;
