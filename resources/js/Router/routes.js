const routes = [
    { path: '/', component: () => import('../Pages/Home'), name: '/' },
    { path: '/home', component: () => import('../Pages/Home'), name: 'home' },
    { path: '/login', component: () => import('../Pages/Login'), name: 'login' },
    { path: '/register', component: () => import('../Pages/Register'), name: 'register' },
];

export default routes;
