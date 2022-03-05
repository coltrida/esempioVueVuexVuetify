const routes = [
    { path: '/', component: () => import('../Pages/Home'), name: '/' },
    { path: '/home', component: () => import('../Pages/Home'), name: 'home' },
    { path: '/products', component: () => import('../Pages/Products'), name: 'products' },
];

export default routes;
